import { Bridge } from "@/components/bridge"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'

async function getBridge() {
  const res = await fetch(`${API_BASE_URL}/api/v1/bridge/`, { 
    cache: 'no-store' 
  })
  if (!res.ok) {
    throw new Error('Failed to fetch bridge')
  }
  return res.json()
}


export default async function BridgePage() {
  const bridge = await getBridge()

  return <Bridge initialBridges={bridge} />
}