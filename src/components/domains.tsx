"use client"

import { useState } from "react"
import { PageWrapper } from "@/components/page-wrapper"
import { DomainHeader } from "@/components/headers"
import { DomainSearch } from "@/components/search"
import { DomainTable } from "@/components/table-domains"
import { DomainForm } from "@/components/form-domains"
import type { Domain, TenantOption } from "@/lib/mock-data"
import { toggleDomainStatus, deleteDomain, createDomain, updateDomain } from "@/lib/mock-data"
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

interface DomainClientProps {
  initialDomains: Domain[]
  tenantOptions: TenantOption[]
}

export function Domains({ initialDomains, tenantOptions }: DomainClientProps) {
  const { toast } = useToast()
  const [domains, setDomains] = useState<Domain[]>(initialDomains)
  const [selectedDomains, setSelectedDomains] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [filterTenant, setFilterTenant] = useState<string>("all")
  const [filterStatus, setFilterStatus] = useState<string>("all")
  const [isLoading, setIsLoading] = useState<Record<string, boolean>>({})
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [domainToEdit, setDomainToEdit] = useState<Domain | null>(null)
  const [domainToDelete, setDomainToDelete] = useState<string | null>(null)
  const [isBulkDeleteDialogOpen, setIsBulkDeleteDialogOpen] = useState(false)

  const toggleSelected = (id: string) => {
    setSelectedDomains((prev) => (prev.includes(id) ? prev.filter((domainId) => domainId !== id) : [...prev, id]))
  }

  const toggleAll = () => {
    if (selectedDomains.length === filteredDomains.length) {
      setSelectedDomains([])
    } else {
      setSelectedDomains(filteredDomains.map((domain) => domain.id))
    }
  }

  const handleToggleStatus = async (id: string) => {
    setIsLoading((prev) => ({ ...prev, [id]: true }))

    try {
      await toggleDomainStatus(id)

      // Update the local state
      setDomains((prev) =>
        prev.map((domain) =>
          domain.id === id
            ? {
                ...domain,
                disabled: !domain.disabled,
              }
            : domain,
        ),
      )

      toast({
        title: "Status updated",
        description: "Domain status has been updated successfully.",
      })
    } catch (error) {
      console.error("Failed to toggle domain status:", error)
      toast({
        title: "Error",
        description: "Failed to update domain status. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading((prev) => ({ ...prev, [id]: false }))
    }
  }

  const handleDeleteDomain = async (id: string) => {
    setIsLoading((prev) => ({ ...prev, [id]: true }))

    try {
      await deleteDomain(id)

      // Update the local state
      setDomains((prev) => prev.filter((domain) => domain.id !== id))
      setSelectedDomains((prev) => prev.filter((domainId) => domainId !== id))

      toast({
        title: "Domain deleted",
        description: "Domain has been deleted successfully.",
      })
    } catch (error) {
      console.error("Failed to delete domain:", error)
      toast({
        title: "Error",
        description: "Failed to delete domain. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading((prev) => ({ ...prev, [id]: false }))
      setDomainToDelete(null)
      setIsDeleteDialogOpen(false)
    }
  }

  const handleBulkDelete = async () => {
    setIsLoading((prev) => {
      const newLoading = { ...prev }
      selectedDomains.forEach((id) => {
        newLoading[id] = true
      })
      return newLoading
    })

    try {
      // In a real app, you might want to use a batch delete endpoint
      await Promise.all(selectedDomains.map((id) => deleteDomain(id)))

      // Update the local state
      setDomains((prev) => prev.filter((domain) => !selectedDomains.includes(domain.id)))
      setSelectedDomains([])

      toast({
        title: "Domains deleted",
        description: `${selectedDomains.length} domains have been deleted successfully.`,
      })
    } catch (error) {
      console.error("Failed to delete domains:", error)
      toast({
        title: "Error",
        description: "Failed to delete domains. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading({})
      setIsBulkDeleteDialogOpen(false)
    }
  }

  const handleCreateDomain = async (domainData: Omit<Domain, "id">) => {
    try {
      const newDomain = await createDomain(domainData)
      setDomains((prev) => [...prev, newDomain])

      toast({
        title: "Domain created",
        description: "New domain has been created successfully.",
      })

      setIsFormOpen(false)
    } catch (error) {
      console.error("Failed to create domain:", error)
      toast({
        title: "Error",
        description: "Failed to create domain. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleUpdateDomain = async (domainData: Partial<Domain>) => {
    if (!domainToEdit) return

    setIsLoading((prev) => ({ ...prev, [domainToEdit.id]: true }))

    try {
      const updatedDomain = await updateDomain(domainToEdit.id, domainData)

      // Update the local state
      setDomains((prev) => prev.map((domain) => (domain.id === domainToEdit.id ? updatedDomain : domain)))

      toast({
        title: "Domain updated",
        description: "Domain has been updated successfully.",
      })

      setDomainToEdit(null)
      setIsFormOpen(false)
    } catch (error) {
      console.error("Failed to update domain:", error)
      toast({
        title: "Error",
        description: "Failed to update domain. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading((prev) => ({ ...prev, [domainToEdit.id]: false }))
    }
  }

  const openCreateForm = () => {
    setDomainToEdit(null)
    setIsFormOpen(true)
  }

  const openEditForm = (domain: Domain) => {
    setDomainToEdit(domain)
    setIsFormOpen(true)
  }

  const confirmDeleteDomain = (id: string) => {
    setDomainToDelete(id)
    setIsDeleteDialogOpen(true)
  }

  const confirmBulkDelete = () => {
    setIsBulkDeleteDialogOpen(true)
  }

  // Get tenant name by ID
  const getTenantName = (tenantId: string) => {
    const tenant = tenantOptions.find((t) => t.id === tenantId)
    return tenant ? tenant.name : "Unknown Tenant"
  }

  // Apply filters
  const filteredDomains = domains.filter((domain) => {
    const matchesSearch =
      domain.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      domain.portalName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (domain.description && domain.description.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesTenant = filterTenant === "all" || domain.tenant === filterTenant
    const matchesStatus =
      filterStatus === "all" ||
      (filterStatus === "active" && !domain.disabled) ||
      (filterStatus === "disabled" && domain.disabled)

    return matchesSearch && matchesTenant && matchesStatus
  })

  return (
    <PageWrapper>
      <DomainHeader
        selectedCount={selectedDomains.length}
        onCreateDomain={openCreateForm}
        onBulkDelete={confirmBulkDelete}
      />

      <DomainSearch
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filterTenant={filterTenant}
        setFilterTenant={setFilterTenant}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        tenantOptions={tenantOptions}
      />

      <DomainTable
        domains={filteredDomains}
        selectedDomains={selectedDomains}
        toggleSelected={toggleSelected}
        toggleAll={toggleAll}
        toggleStatus={handleToggleStatus}
        onEdit={openEditForm}
        onDelete={confirmDeleteDomain}
        isLoading={isLoading}
        getTenantName={getTenantName}
      />

      {/* Domain Form Dialog */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>{domainToEdit ? "Edit Domain" : "Create New Domain"}</DialogTitle>
            <DialogDescription>
              {domainToEdit
                ? "Update domain information and settings."
                : "Fill in the information to create a new domain."}
            </DialogDescription>
          </DialogHeader>
          <DomainForm
            domain={domainToEdit}
            tenantOptions={tenantOptions}
            onSubmit={domainToEdit ? handleUpdateDomain : handleCreateDomain}
            onCancel={() => setIsFormOpen(false)}
          />
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you want to delete this domain?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the domain and remove its data from our
              servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => domainToDelete && handleDeleteDomain(domainToDelete)}
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
            <AlertDialogTitle>Are you sure you want to delete {selectedDomains.length} domains?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete these domains and remove their data from our
              servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleBulkDelete} className="bg-red-600 hover:bg-red-700">
              Delete {selectedDomains.length} Domains
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </PageWrapper>
  )
}

