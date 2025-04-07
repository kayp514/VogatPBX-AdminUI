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
  XCircle,
  RefreshCw,
  Edit,
  Trash2,
  ExternalLink,
  Globe,
  Building2,
  Server,
} from "lucide-react"
import type { Domain } from "@/lib/mock-data"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface DomainTableProps {
  domains: Domain[]
  selectedDomains: string[]
  toggleSelected: (id: string) => void
  toggleAll: () => void
  toggleStatus: (id: string) => void
  onEdit: (domain: Domain) => void
  onDelete: (id: string) => void
  isLoading: Record<string, boolean>
  getTenantName: (tenantId: string) => string
}

export function DomainTable({
  domains,
  selectedDomains,
  toggleSelected,
  toggleAll,
  toggleStatus,
  onEdit,
  onDelete,
  isLoading,
  getTenantName,
}: DomainTableProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Domains</CardTitle>
        <CardDescription>
          {selectedDomains.length > 0
            ? `${selectedDomains.length} domains selected`
            : `${domains.length} domains found`}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="border-t">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">
                  <Checkbox
                    checked={selectedDomains.length === domains.length && domains.length > 0}
                    onCheckedChange={toggleAll}
                  />
                </TableHead>
                <TableHead>Domain Name</TableHead>
                <TableHead>Portal Name</TableHead>
                <TableHead>Tenant</TableHead>
                <TableHead className="hidden md:table-cell">Home Switch</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[70px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {domains.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="h-24 text-center">
                    <div className="flex flex-col items-center justify-center text-muted-foreground">
                      <Globe className="h-8 w-8 mb-2 opacity-40" />
                      <p>No domains found</p>
                      <p className="text-sm">Try adjusting your search or filters</p>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                domains.map((domain) => (
                  <TableRow key={domain.id} className="group hover:bg-muted/30">
                    <TableCell>
                      <Checkbox
                        checked={selectedDomains.includes(domain.id)}
                        onCheckedChange={() => toggleSelected(domain.id)}
                      />
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-muted-foreground" />
                        <div className="font-medium">{domain.name}</div>
                      </div>
                    </TableCell>
                    <TableCell>{domain.portalName}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-muted-foreground" />
                        <span>{getTenantName(domain.tenant)}</span>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {domain.homeSwitch ? (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="flex items-center gap-2">
                                <Server className="h-4 w-4 text-muted-foreground" />
                                <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">
                                  {domain.homeSwitch}
                                </code>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Home Switch: {domain.homeSwitch}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ) : (
                        <span className="text-muted-foreground text-sm">Not set</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Switch
                          checked={!domain.disabled}
                          onCheckedChange={() => toggleStatus(domain.id)}
                          disabled={isLoading[domain.id]}
                          className={!domain.disabled ? "bg-green-500" : ""}
                        />
                        {isLoading[domain.id] ? (
                          <RefreshCw className="h-4 w-4 animate-spin" />
                        ) : !domain.disabled ? (
                          <Badge
                            variant="outline"
                            className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300 border-green-200 dark:border-green-800"
                          >
                            <CheckCircle2 className="mr-1 h-3.5 w-3.5" />
                            Active
                          </Badge>
                        ) : (
                          <Badge
                            variant="outline"
                            className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300 border-red-200 dark:border-red-800"
                          >
                            <XCircle className="mr-1 h-3.5 w-3.5" />
                            Disabled
                          </Badge>
                        )}
                      </div>
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
                          <DropdownMenuItem onClick={() => onEdit(domain)} className="cursor-pointer">
                            <Edit className="mr-2 h-4 w-4" />
                            Edit Domain
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Visit Domain
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            onClick={() => onDelete(domain.id)}
                            className="cursor-pointer text-destructive"
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete Domain
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

