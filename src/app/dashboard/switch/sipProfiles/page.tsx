import { SipProfiles } from "@/components/sip-profile"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'

async function getSipProfiles() {
  const res = await fetch(`${API_BASE_URL}/api/v1/sipProfiles/`, { 
    cache: 'no-store' 
  })
  if (!res.ok) {
    throw new Error('Failed to fetch sip profiles')
  }
  return res.json()
}



export default async function SipProfilesPage() {
  const sipProfiles = await getSipProfiles()

  return <SipProfiles initialProfiles={sipProfiles} />
  
}
