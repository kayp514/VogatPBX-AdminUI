import { TenantClient } from "@/components/tenants"
import { getTenants } from "@/lib/mock-data"

export default async function TenantsPage() {
  const tenants = await getTenants()

  return <TenantClient initialTenants={tenants} />
}


