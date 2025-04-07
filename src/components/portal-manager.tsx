"use client"

import { useState } from "react"
import { PageWrapper } from "@/components/page-wrapper"
import { PageHeader } from "@/components/page-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { NavigationAccessTab } from "@/components/portal-navigation-access-tab"
import { RoleDefaultsTab } from "@/components/portal-role-defaults-tab"
import { PortalPreviewTab } from "@/components/portal-preview-tab"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Save } from "lucide-react"
import type { PortalConfiguration, PortalAccess, RoleDefaultPage } from "@/lib/mock-data"
import { updatePortalConfiguration } from "@/lib/mock-data"

interface PortalManagerProps {
  initialConfigurations: PortalConfiguration[]
}

export function PortalManager({ initialConfigurations }: PortalManagerProps) {
  const { toast } = useToast()
  const [activeConfig, setActiveConfig] = useState<PortalConfiguration>(initialConfigurations[0])
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("navigation")

  const handleAccessChange = (updatedAccess: PortalAccess[]) => {
    setActiveConfig((prev) => ({
      ...prev,
      accessItems: updatedAccess,
    }))
  }

  const handleRoleDefaultsChange = (updatedDefaults: RoleDefaultPage[]) => {
    setActiveConfig((prev) => ({
      ...prev,
      roleDefaults: updatedDefaults,
    }))
  }

  const handleSaveConfiguration = async () => {
    setIsLoading(true)
    try {
      const updatedConfig = await updatePortalConfiguration(activeConfig.id, activeConfig)
      setActiveConfig(updatedConfig)

      toast({
        title: "Configuration saved",
        description: "Portal configuration has been updated successfully.",
      })
    } catch (error) {
      console.error("Failed to save portal configuration:", error)
      toast({
        title: "Error",
        description: "Failed to save portal configuration. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <PageWrapper>
      <PageHeader
        title="Portal Management"
        description="Configure portal access for different user roles"
        actions={
          <Button onClick={handleSaveConfiguration} disabled={isLoading}>
            <Save className="mr-2 h-4 w-4" />
            Save Configuration
          </Button>
        }
      />

      <Tabs defaultValue="navigation" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="navigation">Navigation Access</TabsTrigger>
          <TabsTrigger value="roles">Role Defaults</TabsTrigger>
          <TabsTrigger value="preview">Portal Preview</TabsTrigger>
        </TabsList>

        <TabsContent value="navigation">
          <NavigationAccessTab accessItems={activeConfig.accessItems} onAccessChange={handleAccessChange} />
        </TabsContent>

        <TabsContent value="roles">
          <RoleDefaultsTab
            roleDefaults={activeConfig.roleDefaults}
            accessItems={activeConfig.accessItems}
            onRoleDefaultsChange={handleRoleDefaultsChange}
          />
        </TabsContent>

        <TabsContent value="preview">
          <PortalPreviewTab configuration={activeConfig} />
        </TabsContent>
      </Tabs>
    </PageWrapper>
  )
}

