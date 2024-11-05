import Link from 'next/link'
import { getDomains } from '@/lib/domains'

type Domain = {
    id: string;
    name: string;
    portal_name: string;
    home_switch: string;
    description: string | null;
    enabled: string;
    created: Date | null;
    updated: Date | null;
    synchronised: Date | null;
    updated_by: string;
    menu_id_id: string | null;
  }

export default async function DashboardPage() {
  const domains: Domain[] = await getDomains()

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">VogatPBX Dashboard</h1>
      <h2 className="text-xl font-semibold mb-2">Available Domains:</h2>
      <ul className="list-disc pl-5">
        {domains.map((domain: Domain) => (
          <li key={domain.id}>
            <Link href={`/?domain=${domain.name}`} className="text-blue-500 hover:underline">
              {domain.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}