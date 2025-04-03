"use client"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { SipProfileDialog } from "@/components/sipprofileadd-dialog"
import { MoreHorizontal } from "lucide-react"
import { 
    DropdownMenu, 
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuSeparator
 } from "@/components/ui/dropdown-menu"
import { SipProfileCopyDialog } from "@/components/sipprofileCopyDialog"
import type { SipProfile } from "@/lib/db/types"



interface SipProfilesTableProps {
    sipProfiles: SipProfile[]
    selectedSipProfiles: string[]
    selectedProfileId: string | null
    toggleSelected: (id: string) => void
    toggleAll: () => void
    toggleEnabled: (id: string) => void
    isLoading: Record<string, boolean>
    showCopyDialog: boolean
    handleCloseCopyDialog: () => void
    handlePreferences: (id: string) => void
    handleDeleteSingle: (id: string) => void
    handleCopy: (id: string) => void
}
   


  export function SipProfilesTable({
    sipProfiles,
    selectedSipProfiles,
    selectedProfileId,
    toggleSelected,
    toggleAll,
    toggleEnabled,
    showCopyDialog,
    handleCloseCopyDialog,
    handlePreferences,
    handleCopy,
    handleDeleteSingle,
    isLoading,
  }: SipProfilesTableProps) {

  return (
    <>
      <Card>
        <CardContent className="p-0">
         <div className="border-t">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">
                  <Checkbox
                    checked={selectedSipProfiles.length === sipProfiles.length}
                    onCheckedChange={toggleAll}
                  />
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Hostname</TableHead>
                <TableHead>Enabled</TableHead>
                <TableHead className="hidden lg:table-cell">Description</TableHead>
                <TableHead className="w-[70px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
                {sipProfiles.map((sipProfile) => (
                  <TableRow key={sipProfile.id} className="group hover:bg-muted/30">
                    <TableCell>
                      <Checkbox
                        checked={selectedSipProfiles.includes(sipProfile.id)}
                        onCheckedChange={() => toggleSelected(sipProfile.id)}
                      />
                    </TableCell>
                    <TableCell>{sipProfile.name}</TableCell>
                    <TableCell>{sipProfile.hostname}</TableCell>
                    <TableCell>
                      <Switch
                        checked={sipProfile.enabled === 'true'}
                        onCheckedChange={() => toggleEnabled(sipProfile.id)}
                      />
                    </TableCell>
                    <TableCell className="hidden lg:table-cell text-muted-foreground">{sipProfile.description}</TableCell>
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
                           onSelect={() => handlePreferences(sipProfile.id)}
                          >
                            Preferences
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onSelect={() => handleCopy(sipProfile.id)}
                            >
                            Copy
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                           className="cursor-pointer text-destructive"
                           onSelect={() => handleDeleteSingle(sipProfile.id)}
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
      {showCopyDialog && selectedProfileId && (
        <SipProfileCopyDialog
          isOpen={showCopyDialog}
          onClose={handleCloseCopyDialog}
          profileId={selectedProfileId}
        />
      )}
    </>
  )
}