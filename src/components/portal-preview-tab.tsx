"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Home, User, Users, Shield, UserCog, ExternalLink } from "lucide-react"
import type { PortalConfiguration, PortalAccess } from "@/lib/mock-data"
import { availableRoles } from "@/lib/mock-data"

interface PortalPreviewTabProps {
  configuration: PortalConfiguration
}

export function PortalPreviewTab({ configuration }: PortalPreviewTabProps) {
  const [selectedRole, setSelectedRole] = useState<string>("member")

  const getRoleIcon = (role: string) => {
    switch (role) {
      case "admin":
        return <Shield className="h-4 w-4" />
      case "superuser":
        return <UserCog className="h-4 w-4" />
      case "staff":
        return <Users className="h-4 w-4" />
      default:
        return <User className="h-4 w-4" />
    }
  }

  // Get accessible pages for the selected role
  const accessiblePages = configuration.accessItems.filter(
    (item) => item.isVisible && item.roles.includes(selectedRole as any),
  )

  // Get default page for the selected role
  const roleDefault = configuration.roleDefaults.find((rd) => rd.role === selectedRole)

  const defaultPage = roleDefault?.defaultPageId
    ? configuration.accessItems.find((item) => item.id === roleDefault.defaultPageId)
    : null

  // Group accessible pages by section
  const groupedPages = accessiblePages.reduce(
    (acc, page) => {
      const parts = page.navItemPath.split(".")
      const section = parts[0]

      if (!acc[section]) {
        acc[section] = []
      }

      acc[section].push(page)
      return acc
    },
    {} as Record<string, PortalAccess[]>,
  )

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Portal Preview</CardTitle>
          <CardDescription>Preview how the portal will appear for different user roles</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={selectedRole} onValueChange={setSelectedRole}>
            <TabsList className="mb-4">
              {availableRoles.map((role) => (
                <TabsTrigger key={role} value={role} className="capitalize">
                  <div className="flex items-center gap-2">
                    {getRoleIcon(role)}
                    {role}
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {availableRoles.map((role) => (
              <TabsContent key={role} value={role}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium capitalize">{role} Portal View</h3>
                      <p className="text-sm text-muted-foreground">
                        {accessiblePages.length} accessible navigation items
                      </p>
                    </div>
                    {defaultPage ? (
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">Default landing page:</span>
                        <Badge className="bg-blue-100 text-blue-800">
                          <Home className="mr-1 h-3.5 w-3.5" />
                          {defaultPage.navItemName}
                        </Badge>
                      </div>
                    ) : (
                      <Badge variant="outline" className="text-amber-600 border-amber-200 bg-amber-50">
                        No default landing page set
                      </Badge>
                    )}
                  </div>

                  <Card className="border-2 border-dashed">
                    <CardHeader className="bg-muted/50 border-b">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center text-primary-foreground">
                            <Shield className="h-4 w-4" />
                          </div>
                          <span className="font-bold">VogatPBX Portal</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="capitalize">
                            {getRoleIcon(role)}
                            <span className="ml-1">{role}</span>
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="flex h-[400px]">
                        <div className="w-64 border-r bg-muted/20 p-4">
                          <ScrollArea className="h-full">
                            <div className="space-y-6">
                              {Object.entries(groupedPages).map(([section, pages]) => (
                                <div key={section} className="space-y-2">
                                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider px-2">
                                    {section}
                                  </h4>
                                  <div className="space-y-1">
                                    {pages.map((page) => (
                                      <Button
                                        key={page.id}
                                        variant="ghost"
                                        className="w-full justify-start text-sm h-9"
                                        disabled
                                      >
                                        <div className="flex items-center gap-2 truncate">
                                          {page.id === defaultPage?.id ? (
                                            <Home className="h-4 w-4 text-blue-500" />
                                          ) : (
                                            <div className="h-4 w-4" />
                                          )}
                                          <span className="truncate">{page.navItemName}</span>
                                        </div>
                                      </Button>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </ScrollArea>
                        </div>
                        <div className="flex-1 p-8 flex items-center justify-center bg-muted/10">
                          <div className="text-center text-muted-foreground">
                            <Home className="h-12 w-12 mx-auto mb-4 opacity-20" />
                            <p className="text-lg font-medium">Portal Content Area</p>
                            <p className="text-sm">Content for the selected navigation item will appear here</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      <div className="flex justify-center">
        <Button variant="outline" className="gap-2">
          <ExternalLink className="h-4 w-4" />
          Open Portal in New Tab
        </Button>
      </div>
    </div>
  )
}

