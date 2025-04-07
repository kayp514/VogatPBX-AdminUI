import { PortalManager } from "@/components/portal-manager"
import { getPortalConfigurations } from "@/lib/mock-data"

export default async function PortalPage() {
  // Fetch portal configurations
  const portalConfigs = await getPortalConfigurations()

  return <PortalManager initialConfigurations={portalConfigs} />
}

