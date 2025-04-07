"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Search, Edit, Eye, EyeOff, Home } from "lucide-react"
import type { PortalAccess } from "@/lib/mock-data"
import { availableRoles } from "@/lib/mock-data"

interface NavigationAccessTabProps {
  accessItems: PortalAccess[]
  onAccessChange: (updatedAccess: PortalAccess[]) => void
}

export function NavigationAccessTab({ accessItems, onAccessChange }: NavigationAccessTabProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [editingItem, setEditingItem] = useState<PortalAccess | null>(null)
  const [editFormData, setEditFormData] = useState<{
    roles: Record<string, boolean>
    isVisible: boolean
    isDefault: boolean
    defaultForRoles: Record<string, boolean>
  }>({
    roles: {},
    isVisible: true,
    isDefault: false,
    defaultForRoles: {},
  })

  // Group access items by their parent section
  const groupedItems = accessItems.reduce(
    (acc, item) => {
      const parts = item.navItemPath.split(".")
      const section = parts[0]

      if (!acc[section]) {
        acc[section] = []
      }

      acc[section].push(item)
      return acc
    },
    {} as Record<string, PortalAccess[]>,
  )

  const filteredGroups = Object.entries(groupedItems).filter(([section, items]) => {
    return (
      section.toLowerCase().includes(searchQuery.toLowerCase()) ||
      items.some(
        (item) =>
          item.navItemName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.navItemPath.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    )
  })

  const handleToggleVisibility = (item: PortalAccess) => {
    const updatedItems = accessItems.map((accessItem) =>
      accessItem.id === item.id ? { ...accessItem, isVisible: !accessItem.isVisible } : accessItem,
    )
    onAccessChange(updatedItems)
  }

  const openEditDialog = (item: PortalAccess) => {
    setEditingItem(item)

    // Initialize form data
    const rolesMap: Record<string, boolean> = {}
    const defaultForRolesMap: Record<string, boolean> = {}

    availableRoles.forEach((role) => {
      rolesMap[role] = item.roles.includes(role)
      defaultForRolesMap[role] = item.defaultForRoles.includes(role)
    })

    setEditFormData({
      roles: rolesMap,
      isVisible: item.isVisible,
      isDefault: item.isDefault,
      defaultForRoles: defaultForRolesMap,
    })
  }

  const handleSaveEdit = () => {
    if (!editingItem) return

    const updatedItem: PortalAccess = {
      ...editingItem,
      roles: availableRoles.filter((role) => editFormData.roles[role]),
      isVisible: editFormData.isVisible,
      isDefault: editFormData.isDefault,
      defaultForRoles: availableRoles.filter((role) => editFormData.defaultForRoles[role]),
      lastModified: new Date().toISOString(),
    }

    const updatedItems = accessItems.map((item) => (item.id === editingItem.id ? updatedItem : item))

    onAccessChange(updatedItems)
    setEditingItem(null)
  }

  const handleRoleCheckboxChange = (role: string, checked: boolean) => {
    setEditFormData((prev) => ({
      ...prev,
      roles: {
        ...prev.roles,
        [role]: checked,
      },
    }))
  }

  const handleDefaultRoleCheckboxChange = (role: string, checked: boolean) => {
    setEditFormData((prev) => ({
      ...prev,
      defaultForRoles: {
        ...prev.defaultForRoles,
        [role]: checked,
      },
    }))
  }

  return (
    <>
      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle>Navigation Access</CardTitle>
              <CardDescription>Configure which navigation items are accessible to different user roles</CardDescription>
            </div>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search navigation items..."
                className="pl-8 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {filteredGroups.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No navigation items found matching your search.
              </div>
            ) : (
              filteredGroups.map(([section, items]) => (
                <Card key={section} className="overflow-hidden">
                  <CardHeader className="bg-muted/50 py-3">
                    <CardTitle className="text-lg capitalize">{section}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Navigation Item</TableHead>
                          <TableHead>Path</TableHead>
                          <TableHead>Roles</TableHead>
                          <TableHead className="w-[100px] text-center">Visible</TableHead>
                          <TableHead className="w-[100px] text-center">Default</TableHead>
                          <TableHead className="w-[80px]"></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {items.map((item) => (
                          <TableRow key={item.id}>
                            <TableCell className="font-medium">{item.navItemName}</TableCell>
                            <TableCell className="font-mono text-xs">{item.navItemPath}</TableCell>
                            <TableCell>
                              <div className="flex flex-wrap gap-1">
                                {item.roles.map((role) => (
                                  <Badge key={role} variant="outline" className="capitalize">
                                    {role}
                                  </Badge>
                                ))}
                              </div>
                            </TableCell>
                            <TableCell className="text-center">
                              <Switch
                                checked={item.isVisible}
                                onCheckedChange={() => handleToggleVisibility(item)}
                                className="data-[state=checked]:bg-green-500"
                              />
                            </TableCell>
                            <TableCell className="text-center">
                              {item.isDefault && (
                                <Badge className="bg-blue-100 text-blue-800">
                                  <Home className="mr-1 h-3 w-3" />
                                  Default
                                </Badge>
                              )}
                            </TableCell>
                            <TableCell>
                              <Button variant="ghost" size="sm" onClick={() => openEditDialog(item)}>
                                <Edit className="h-4 w-4" />
                                <span className="sr-only">Edit</span>
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </CardContent>
      </Card>

      {/* Edit Dialog */}
      <Dialog open={!!editingItem} onOpenChange={(open) => !open && setEditingItem(null)}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Edit Navigation Access</DialogTitle>
            <DialogDescription>Configure access settings for {editingItem?.navItemName}</DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="visible">Visible in Portal</Label>
              <div className="flex items-center gap-2">
                {editFormData.isVisible ? (
                  <Eye className="h-4 w-4 text-green-500" />
                ) : (
                  <EyeOff className="h-4 w-4 text-red-500" />
                )}
                <Switch
                  id="visible"
                  checked={editFormData.isVisible}
                  onCheckedChange={(checked) => setEditFormData((prev) => ({ ...prev, isVisible: checked }))}
                  className="data-[state=checked]:bg-green-500"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="default">Default Landing Page</Label>
              <div className="flex items-center gap-2">
                <Home className={`h-4 w-4 ${editFormData.isDefault ? "text-blue-500" : "text-muted-foreground"}`} />
                <Switch
                  id="default"
                  checked={editFormData.isDefault}
                  onCheckedChange={(checked) => setEditFormData((prev) => ({ ...prev, isDefault: checked }))}
                  className="data-[state=checked]:bg-blue-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Accessible by Roles</Label>
              <div className="grid grid-cols-2 gap-2">
                {availableRoles.map((role) => (
                  <div key={role} className="flex items-center space-x-2">
                    <Checkbox
                      id={`role-${role}`}
                      checked={editFormData.roles[role]}
                      onCheckedChange={(checked) => handleRoleCheckboxChange(role, checked === true)}
                    />
                    <Label htmlFor={`role-${role}`} className="capitalize">
                      {role}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {editFormData.isDefault && (
              <div className="space-y-2">
                <Label>Default Page For Roles</Label>
                <div className="grid grid-cols-2 gap-2">
                  {availableRoles.map((role) => (
                    <div key={`default-${role}`} className="flex items-center space-x-2">
                      <Checkbox
                        id={`default-role-${role}`}
                        checked={editFormData.defaultForRoles[role]}
                        onCheckedChange={(checked) => handleDefaultRoleCheckboxChange(role, checked === true)}
                        disabled={!editFormData.roles[role]}
                      />
                      <Label
                        htmlFor={`default-role-${role}`}
                        className={`capitalize ${!editFormData.roles[role] ? "text-muted-foreground" : ""}`}
                      >
                        {role}
                      </Label>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">
                  Note: Default page can only be set for roles that have access to this item
                </p>
              </div>
            )}
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setEditingItem(null)}>
              Cancel
            </Button>
            <Button onClick={handleSaveEdit}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

