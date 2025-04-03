"use client"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger, 
  DropdownMenuLabel, 
  DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { CheckCircle2, XCircle, MoreHorizontal} from "lucide-react"
import type { Extension } from "@/lib/db/types"



interface ExtensionsTableProps {
  extensions: Extension[]
  selectedExtensions: string[]
  toggleExtension: (id: string) => void
  toggleAll: () => void
  isLoading: Record<string, boolean>
  onPreferences: (id: string) => void
  onToggleEnable: (id: string) => void
  onDelete: (id: string) => void
}

  export function ExtensionsTable({
    extensions,
    selectedExtensions,
    toggleExtension,
    toggleAll,
    isLoading,
    onPreferences,
    onToggleEnable,
    onDelete,
  }: ExtensionsTableProps) {


  return (
      <Card>
        <CardContent className="p-0">
         <div className="border-t">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">
                  <Checkbox
                    checked={selectedExtensions.length === extensions.length}
                    onCheckedChange={toggleAll}
                  />
                </TableHead>
                <TableHead>Extension</TableHead>
                <TableHead>Effective Caller ID Name</TableHead>
                <TableHead>Outbound Caller ID Name</TableHead>
                <TableHead className="hidden md:table-cell">Call Group</TableHead>
                <TableHead className="hidden lg:table-cell">Description</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[70px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {extensions.map((extension) => (
                  <TableRow key={extension.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedExtensions.includes(extension.id)}
                        onCheckedChange={() => toggleExtension(extension.id)}
                      />
                    </TableCell>
                    <TableCell className="font-medium">{extension.extension}</TableCell>
                    <TableCell>{extension.effective_caller_id_name}</TableCell>
                    <TableCell>{extension.effective_caller_id_number}</TableCell>
                    <TableCell className="hidden md:table-cell">{extension.call_group}</TableCell>
                    <TableCell>{extension.user_context}</TableCell>
                    <TableCell>
                      {extension.enabled ? (
                        <CheckCircle2 className="text-green-500" size={20} />
                      ) : (
                        <XCircle className="text-red-500" size={20} />
                      )}
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
                          <DropdownMenuItem 
                           onSelect={() => onPreferences(extension.id)}
                           disabled={isLoading[extension.id]}
                           >
                            Preferences
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                           onSelect={() => onToggleEnable(extension.id)}
                           disabled={isLoading[extension.id]}
                           >
                            {extension.enabled ? 'Disable' : 'Enable'}
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem 
                           className="text-destructive"
                           onSelect={() => onDelete(extension.id)}
                           disabled={isLoading[extension.id]}
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