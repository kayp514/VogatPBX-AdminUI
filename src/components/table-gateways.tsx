"use client"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel } from "@/components/ui/dropdown-menu"
import { CheckCircle2, XCircle, MoreHorizontal } from "lucide-react"
import { GatewayAddDialog } from "@/components/gatewayAdd-dialog"
import type { Gateway } from "@/lib/db/types"

interface GatewaysTableProps {
    gateways: Gateway[]
    selectedGateways: string[]
    toggleSelected: (id: string) => void
    toggleAll: () => void
    toggleGateway: (id: string) => void
    isLoading: Record<string, boolean>
    onPreferences: (id: string) => void
    onToggleEnable: (id: string) => void
    onDelete: (id: string) => void
  }



  export function GatewaysTable({
    gateways,
    selectedGateways,
    toggleSelected,
    toggleAll,
    toggleGateway,
    isLoading,
    onPreferences,
    onToggleEnable,
    onDelete,
  }: GatewaysTableProps) {


  return (
      <Card>
        <CardContent className="p-0">
          <div className="border-t">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">
                  <Checkbox
                    checked={selectedGateways.length === gateways.length}
                    onCheckedChange={toggleAll}
                  />
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Proxy</TableHead>
                <TableHead className="hidden md:table-cell">Context</TableHead>
                <TableHead className="hidden md:table-cell">Status</TableHead>
                <TableHead>Actions</TableHead>
                <TableHead>State</TableHead>
                <TableHead>Enabled</TableHead>
                <TableHead className="hidden lg:table-cell">Description</TableHead>
                <TableHead className="w-[70px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
                {gateways.map((gateway) => (
                  <TableRow key={gateway.id} className="group hover:bg-muted/30">
                    <TableCell>
                      <Checkbox
                        checked={selectedGateways.includes(gateway.id)}
                        onCheckedChange={() => toggleGateway(gateway.id)}
                      />
                    </TableCell>
                    <TableCell className="font-medium">{gateway.gateway}</TableCell>
                    <TableCell>{gateway.proxy}</TableCell>
                    <TableCell>
                      <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                        {gateway.proxy}
                      </code>
                    </TableCell>
                    <TableCell>{gateway.status}</TableCell>
                    <TableCell>{gateway.action}</TableCell>
                    <TableCell>{gateway.state}</TableCell>
                    <TableCell>
                      {gateway.enabled ? (
                        <CheckCircle2 className="text-green-500" size={20} />
                      ) : (
                        <XCircle className="text-red-500" size={20} />
                      )}
                    </TableCell>
                    <TableCell className="hidden lg:table-cell text-muted-foreground">{gateway.description}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                        <Button variant="ghost" className="h-8 w-8 p-0 opacity-70 group-hover:opacity-100">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem 
                           onSelect={() => onPreferences(gateway.id)}
                           >
                            Preferences
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                           onSelect={() => onToggleEnable(gateway.id)}
                           >
                            {gateway.enabled ? 'Disable' : 'Enable'}
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                           className="text-destructive"
                           onSelect={() => onDelete(gateway.id)}
                           >
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          </div>
        </CardContent>
      </Card>
  )
}