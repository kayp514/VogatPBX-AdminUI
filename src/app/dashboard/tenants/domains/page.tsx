import { Domains } from "@/components/domains"
import { getDomains, getTenantOptions } from "@/lib/mock-data"


export default async function DomainsPage() {
    const [domains, tenantOptions] = await Promise.all([getDomains(), getTenantOptions()])
    return <Domains initialDomains={domains} tenantOptions={tenantOptions} />
  }