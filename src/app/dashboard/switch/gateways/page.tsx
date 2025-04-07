import { Gateways} from "@/components/gateways"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'

async function getGateways() {
  const res = await fetch(`${API_BASE_URL}/api/v1/gateways/`, { 
    cache: 'no-store' 
  })
  if (!res.ok) {
    throw new Error('Failed to fetch gateways')
  }
  return res.json()
}

export default async function GatewaysPage() {
  const gateways = await getGateways()

  return <Gateways initialGateways={gateways} />
}