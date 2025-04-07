"use client"

import { useState } from "react"
import { PageWrapper } from "@/components/page-wrapper"
import { TenantHeader } from "@/components/headers"
import { TenantSearch } from "@/components/search"
import { TenantTable } from "@/components/table-tenants"
import { TenantForm } from "@/components/form-tenants"
import type { Tenant } from "@/lib/mock-data"
import { toggleTenantStatus, deleteTenant, createTenant, updateTenant } from "@/lib/mock-data"
import { useToast } from "@/hooks/use-toast"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

interface TenantClientProps {
  initialTenants: Tenant[]
}

export function TenantClient({ initialTenants }: TenantClientProps) {
  const { toast } = useToast()
  const [tenants, setTenants] = useState<Tenant[]>(initialTenants)
  const [selectedTenants, setSelectedTenants] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState<string>("all")
  const [filterPlan, setFilterPlan] = useState<string>("all")
  const [isLoading, setIsLoading] = useState<Record<string, boolean>>({})
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [tenantToEdit, setTenantToEdit] = useState<Tenant | null>(null)
  const [tenantToDelete, setTenantToDelete] = useState<string | null>(null)
  const [isBulkDeleteDialogOpen, setIsBulkDeleteDialogOpen] = useState(false)

  const toggleSelected = (id: string) => {
    setSelectedTenants((prev) => (prev.includes(id) ? prev.filter((tenantId) => tenantId !== id) : [...prev, id]))
  }

  const toggleAll = () => {
    if (selectedTenants.length === filteredTenants.length) {
      setSelectedTenants([])
    } else {
      setSelectedTenants(filteredTenants.map((tenant) => tenant.id))
    }
  }

  const handleToggleStatus = async (id: string) => {
    setIsLoading((prev) => ({ ...prev, [id]: true }))

    try {
      await toggleTenantStatus(id)

      // Update the local state
      setTenants((prev) =>
        prev.map((tenant) =>
          tenant.id === id
            ? {
                ...tenant,
                status: tenant.status === "active" ? "suspended" : "active",
              }
            : tenant,
        ),
      )

      toast({
        title: "Status updated",
        description: "Tenant status has been updated successfully.",
      })
    } catch (error) {
      console.error("Failed to toggle tenant status:", error)
      toast({
        title: "Error",
        description: "Failed to update tenant status. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading((prev) => ({ ...prev, [id]: false }))
    }
  }

  const handleDeleteTenant = async (id: string) => {
    setIsLoading((prev) => ({ ...prev, [id]: true }))

    try {
      await deleteTenant(id)

      // Update the local state
      setTenants((prev) => prev.filter((tenant) => tenant.id !== id))
      setSelectedTenants((prev) => prev.filter((tenantId) => tenantId !== id))

      toast({
        title: "Tenant deleted",
        description: "Tenant has been deleted successfully.",
      })
    } catch (error) {
      console.error("Failed to delete tenant:", error)
      toast({
        title: "Error",
        description: "Failed to delete tenant. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading((prev) => ({ ...prev, [id]: false }))
      setTenantToDelete(null)
      setIsDeleteDialogOpen(false)
    }
  }

  const handleBulkDelete = async () => {
    setIsLoading((prev) => {
      const newLoading = { ...prev }
      selectedTenants.forEach((id) => {
        newLoading[id] = true
      })
      return newLoading
    })

    try {
      // In a real app, you might want to use a batch delete endpoint
      await Promise.all(selectedTenants.map((id) => deleteTenant(id)))

      // Update the local state
      setTenants((prev) => prev.filter((tenant) => !selectedTenants.includes(tenant.id)))
      setSelectedTenants([])

      toast({
        title: "Tenants deleted",
        description: `${selectedTenants.length} tenants have been deleted successfully.`,
      })
    } catch (error) {
      console.error("Failed to delete tenants:", error)
      toast({
        title: "Error",
        description: "Failed to delete tenants. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading({})
      setIsBulkDeleteDialogOpen(false)
    }
  }

  const handleCreateTenant = async (tenantData: Omit<Tenant, "id" | "createdAt">) => {
    try {
      const newTenant = await createTenant(tenantData)
      setTenants((prev) => [...prev, newTenant])

      toast({
        title: "Tenant created",
        description: "New tenant has been created successfully.",
      })

      setIsFormOpen(false)
    } catch (error) {
      console.error("Failed to create tenant:", error)
      toast({
        title: "Error",
        description: "Failed to create tenant. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleUpdateTenant = async (tenantData: Partial<Tenant>) => {
    if (!tenantToEdit) return

    setIsLoading((prev) => ({ ...prev, [tenantToEdit.id]: true }))

    try {
      const updatedTenant = await updateTenant(tenantToEdit.id, tenantData)

      // Update the local state
      setTenants((prev) => prev.map((tenant) => (tenant.id === tenantToEdit.id ? updatedTenant : tenant)))

      toast({
        title: "Tenant updated",
        description: "Tenant has been updated successfully.",
      })

      setTenantToEdit(null)
      setIsFormOpen(false)
    } catch (error) {
      console.error("Failed to update tenant:", error)
      toast({
        title: "Error",
        description: "Failed to update tenant. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading((prev) => ({ ...prev, [tenantToEdit.id]: false }))
    }
  }

  const openCreateForm = () => {
    setTenantToEdit(null)
    setIsFormOpen(true)
  }

  const openEditForm = (tenant: Tenant) => {
    setTenantToEdit(tenant)
    setIsFormOpen(true)
  }

  const confirmDeleteTenant = (id: string) => {
    setTenantToDelete(id)
    setIsDeleteDialogOpen(true)
  }

  const confirmBulkDelete = () => {
    setIsBulkDeleteDialogOpen(true)
  }

  // Apply filters
  const filteredTenants = tenants.filter((tenant) => {
    const matchesSearch =
      tenant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tenant.domain.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = filterStatus === "all" || tenant.status === filterStatus
    const matchesPlan = filterPlan === "all" || tenant.plan === filterPlan

    return matchesSearch && matchesStatus && matchesPlan
  })

  return (
    <PageWrapper>
      <TenantHeader
        selectedCount={selectedTenants.length}
        onCreateTenant={openCreateForm}
        onBulkDelete={confirmBulkDelete}
      />

      <TenantSearch
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        filterPlan={filterPlan}
        setFilterPlan={setFilterPlan}
      />

      <TenantTable
        tenants={filteredTenants}
        selectedTenants={selectedTenants}
        toggleSelected={toggleSelected}
        toggleAll={toggleAll}
        toggleStatus={handleToggleStatus}
        onEdit={openEditForm}
        onDelete={confirmDeleteTenant}
        isLoading={isLoading}
      />

      {/* Tenant Form Dialog */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>{tenantToEdit ? "Edit Tenant" : "Create New Tenant"}</DialogTitle>
            <DialogDescription>
              {tenantToEdit
                ? "Update tenant information and settings."
                : "Fill in the information to create a new tenant."}
            </DialogDescription>
          </DialogHeader>
          <TenantForm
            tenant={tenantToEdit}
            onSubmit={tenantToEdit ? handleUpdateTenant : handleCreateTenant}
            onCancel={() => setIsFormOpen(false)}
          />
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you want to delete this tenant?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the tenant account and remove their data from
              our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => tenantToDelete && handleDeleteTenant(tenantToDelete)}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Bulk Delete Confirmation Dialog */}
      <AlertDialog open={isBulkDeleteDialogOpen} onOpenChange={setIsBulkDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you want to delete {selectedTenants.length} tenants?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete these tenant accounts and remove their data
              from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleBulkDelete} className="bg-red-600 hover:bg-red-700">
              Delete {selectedTenants.length} Tenants
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </PageWrapper>
  )
}

