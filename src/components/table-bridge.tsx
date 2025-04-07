"use client"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Check, X, MoreHorizontal, Network} from "lucide-react"
import type { Bridge } from "@/lib/db/types"

interface BridgeTableProps {
    bridges: Bridge[]
    selectedBridges: string[]
    toggleSelected: (id: string) => void
    toggleAll: () => void
    isLoading: Record<string, boolean>
    onToggleEnable: (id: string) => void
    onDelete: (id: string) => void
    onPreferences: (id: string) => void
}



export function BridgeTable({
    bridges,
    selectedBridges,
    toggleSelected,
    toggleAll,
    isLoading,
    onDelete,
    onPreferences,
    onToggleEnable,
}: BridgeTableProps) {
  return (
      <Card>
        <CardContent className="p-0">
         <div className="border-t">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">
                  <Checkbox
                    checked={selectedBridges.length === bridges.length}
                    onCheckedChange={toggleAll}
                  />
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Destination</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[70px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bridges.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="h-24 text-center">
                    <div className="flex flex-col items-center justify-center text-muted-foreground">
                      <Network className="h-8 w-8 mb-2 opacity-40" />
                      <p>No bridges found</p>
                      <p className="text-sm">Try adjusting your search</p>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
              bridges.map((bridge) => (
                  <TableRow key={bridge.id} className="group hover:bg-muted/30">
                    <TableCell>
                      <Checkbox
                        checked={selectedBridges.includes(bridge.id)}
                        onCheckedChange={() => toggleSelected(bridge.id)}
                      />
                    </TableCell>
                    <TableCell className="font-medium">{bridge.name}</TableCell>
                    <TableCell>{bridge.destination}</TableCell>
                    <TableCell>
                      {bridge.enabled ? (
                        <Check className="text-green-500" />
                      ) : (
                        <X className="text-red-500" />
                      )}
                    </TableCell>
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
                          <DropdownMenuItem onSelect={() => onPreferences(bridge.id)}
                            >
                            Preferences
                          </DropdownMenuItem>
                          <DropdownMenuItem onSelect={() => onToggleEnable(bridge.id)}
                            >
                            {bridge.enabled ? 'Disable' : 'Enable'}
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem 
                           className="cursor-pointer text-destructive"
                           onSelect={() => onDelete(bridge.id)}
                           >
                            Delete
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