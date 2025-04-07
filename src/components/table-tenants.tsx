"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import {
  MoreHorizontal,
  CheckCircle2,
  RefreshCw,
  Edit,
  Trash2,
  ExternalLink,
  Building2,
  Clock,
  Users,
  Phone,
  AlertCircle,
  PauseCircle,
} from "lucide-react"
import type { Tenant } from "@/lib/mock-data"
import { format, formatDistanceToNow } from "date-fns"

interface TenantTableProps {
  tenants: Tenant[]
  selectedTenants: string[]
  toggleSelected: (id: string) => void
  toggleAll: () => void
  toggleStatus: (id: string) => void
  onEdit: (tenant: Tenant) => void
  onDelete: (id: string) => void
  isLoading: Record<string, boolean>
}

export function TenantTable({
  tenants,
  selectedTenants,
  toggleSelected,
  toggleAll,
  toggleStatus,
  onEdit,
  onDelete,
  isLoading,
}: TenantTableProps) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Badge
            variant="outline"
            className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300 border-green-200 dark:border-green-800"
          >
            <CheckCircle2 className="mr-1 h-3.5 w-3.5" />
            Active
          </Badge>
        )
      case "suspended":
        return (
          <Badge
            variant="outline"
            className="bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300 border-amber-200 dark:border-amber-800"
          >
            <PauseCircle className="mr-1 h-3.5 w-3.5" />
            Suspended
          </Badge>
        )
      case "pending":
        return (
          <Badge
            variant="outline"
            className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border-blue-200 dark:border-blue-800"
          >
            <Clock className="mr-1 h-3.5 w-3.5" />
            Pending
          </Badge>
        )
      case "expired":
        return (
          <Badge
            variant="outline"
            className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300 border-red-200 dark:border-red-800"
          >
            <AlertCircle className="mr-1 h-3.5 w-3.5" />
            Expired
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString)
      return format(date, "MMM d, yyyy")
    } catch (error) {
      return "Invalid date"
    }
  }

  const formatTimeAgo = (dateString?: string) => {
    if (!dateString) return "N/A"
    try {
      return formatDistanceToNow(new Date(dateString), { addSuffix: true })
    } catch (error) {
      return "Invalid date"
    }
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Tenants</CardTitle>
        <CardDescription>
          {selectedTenants.length > 0
            ? `${selectedTenants.length} tenants selected`
            : `${tenants.length} tenants found`}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="border-t">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">
                  <Checkbox
                    checked={selectedTenants.length === tenants.length && tenants.length > 0}
                    onCheckedChange={toggleAll}
                  />
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Domain</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="hidden md:table-cell">Users</TableHead>
                <TableHead className="hidden lg:table-cell">Created</TableHead>
                <TableHead className="w-[70px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tenants.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="h-24 text-center">
                    <div className="flex flex-col items-center justify-center text-muted-foreground">
                      <Building2 className="h-8 w-8 mb-2 opacity-40" />
                      <p>No tenants found</p>
                      <p className="text-sm">Try adjusting your search or filters</p>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                tenants.map((tenant) => (
                  <TableRow key={tenant.id} className="group hover:bg-muted/30">
                    <TableCell>
                      <Checkbox
                        checked={selectedTenants.includes(tenant.id)}
                        onCheckedChange={() => toggleSelected(tenant.id)}
                      />
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">{tenant.name}</div>
                    </TableCell>
                    <TableCell className="font-mono text-sm">{tenant.domain}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="font-medium">
                        {tenant.plan}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Switch
                          checked={tenant.status === "active"}
                          onCheckedChange={() => toggleStatus(tenant.id)}
                          disabled={isLoading[tenant.id] || tenant.status === "pending" || tenant.status === "expired"}
                          className={tenant.status === "active" ? "bg-green-500" : ""}
                        />
                        {isLoading[tenant.id] ? (
                          <RefreshCw className="h-4 w-4 animate-spin" />
                        ) : (
                          getStatusBadge(tenant.status)
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span>{tenant.usersCount}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <span>{tenant.extensionsCount}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden lg:table-cell text-muted-foreground">
                      {formatDate(tenant.createdAt)}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0 opacity-70 group-hover:opacity-100">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem onClick={() => onEdit(tenant)} className="cursor-pointer">
                            <Edit className="mr-2 h-4 w-4" />
                            Edit Tenant
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View Dashboard
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            onClick={() => onDelete(tenant.id)}
                            className="cursor-pointer text-destructive"
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete Tenant
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

