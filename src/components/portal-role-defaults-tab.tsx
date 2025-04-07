"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Home, User, Users, Shield, UserCog } from "lucide-react"
import type { PortalAccess, RoleDefaultPage } from "@/lib/mock-data"

interface RoleDefaultsTabProps {
  roleDefaults: RoleDefaultPage[]
  accessItems: PortalAccess[]
  onRoleDefaultsChange: (updatedDefaults: RoleDefaultPage[]) => void
}

export function RoleDefaultsTab({ roleDefaults, accessItems, onRoleDefaultsChange }: RoleDefaultsTabProps) {
  const handleDefaultPageChange = (role: string, pageId: string | null) => {
    const updatedDefaults = roleDefaults.map((item) => (item.role === role ? { ...item, defaultPageId: pageId } : item))
    onRoleDefaultsChange(updatedDefaults)
  }

  const getRoleIcon = (role: string) => {
    switch (role) {
      case "admin":
        return <Shield className="h-4 w-4 text-purple-500" />
      case "superuser":
        return <UserCog className="h-4 w-4 text-blue-500" />
      case "staff":
        return <Users className="h-4 w-4 text-amber-500" />
      default:
        return <User className="h-4 w-4 text-green-500" />
    }
  }

  // Get accessible pages for each role
  const getAccessiblePages = (role: string) => {
    return accessItems.filter((item) => item.isVisible && item.roles.includes(role as any))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Role Default Pages</CardTitle>
        <CardDescription>
          Configure the default landing page for each user role when they access the portal
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Role</TableHead>
              <TableHead>Default Landing Page</TableHead>
              <TableHead className="hidden md:table-cell">Available Pages</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {roleDefaults.map((roleDefault) => {
              const accessiblePages = getAccessiblePages(roleDefault.role)
              const currentDefault = accessItems.find((item) => item.id === roleDefault.defaultPageId)

              return (
                <TableRow key={roleDefault.role}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getRoleIcon(roleDefault.role)}
                      <span className="capitalize font-medium">{roleDefault.role}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Select
                      value={roleDefault.defaultPageId || ""}
                      onValueChange={(value) => handleDefaultPageChange(roleDefault.role, value || null)}
                    >
                      <SelectTrigger className="w-full md:w-[300px]">
                        <SelectValue placeholder="Select a default page">
                          {currentDefault ? (
                            <div className="flex items-center gap-2">
                              <Home className="h-4 w-4 text-blue-500" />
                              {currentDefault.navItemName}
                            </div>
                          ) : (
                            "Select a default page"
                          )}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {accessiblePages.length === 0 ? (
                          <div className="p-2 text-sm text-muted-foreground">No accessible pages for this role</div>
                        ) : (
                          accessiblePages.map((page) => (
                            <SelectItem key={page.id} value={page.id}>
                              <div className="flex items-center gap-2">
                                <Home className="h-4 w-4" />
                                {page.navItemName}
                              </div>
                            </SelectItem>
                          ))
                        )}
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Badge variant="outline">{accessiblePages.length} pages</Badge>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

