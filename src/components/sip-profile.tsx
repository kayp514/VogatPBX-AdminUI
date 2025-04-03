"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { PageWrapper } from "@/components/page-wrapper"
import { SipProfilesHeader } from "@/components/headers"
import { SipProfilesSearch } from "@/components/search"
import { SipProfilesTable } from "@/components/table-sip-profile"
import type { SipProfile } from "@/lib/db/types"


interface SipProfilesProps {
  initialProfiles: SipProfile[]
}

export function SipProfiles({ initialProfiles }: SipProfilesProps) {
const router = useRouter()
  const [sipProfiles, setSipProfiles] = useState<SipProfile[]>(initialProfiles)
  const [selectedSipProfiles, setSelectedSipProfiles] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState<Record<string, boolean>>({})
  const [showCopyDialog, setShowCopyDialog] = useState(false)
  const [selectedProfileId, setSelectedProfileId] = useState<string | null>(null)



  const toggleSelected = (id: string) => {
    setSelectedSipProfiles(prev =>
      prev.includes(id) ? prev.filter(spId => spId !== id) : [...prev, id]
    )
  }

  const toggleAll = () => {
    setSelectedSipProfiles(prev =>
      prev.length === sipProfiles.length ? [] : sipProfiles.map(sp => sp.id)
    )
  }

  const toggleEnabled = (id: string) => {
    console.log(`Toggle enabled for SIP profile with id: ${id}`)
  }

  const handlePreferences = (id: string) => {
    console.log(`Open preferences for sip profile with id: ${id}`)
    router.push(`/dashboard/switch/sipProfiles/${id}/settings`)

  }

  const handleDeleteSingle = (id: string) => {
    console.log(`Delete domain with id: ${id}`)
  }

  const handleCopy = (id: string) => {
    setSelectedProfileId(id)
    setShowCopyDialog(true)
  }

  const handleCloseCopyDialog = () => {
    setShowCopyDialog(false)
    setSelectedProfileId(null)
  }





  const filteredProfiles = sipProfiles.filter(
    (profile) =>
      profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.hostname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <PageWrapper>
      <SipProfilesHeader selectedCount={selectedSipProfiles.length} />

      <SipProfilesSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <SipProfilesTable
        sipProfiles={filteredProfiles}
        selectedSipProfiles={selectedSipProfiles}
        toggleSelected={toggleSelected}
        toggleAll={toggleAll}
        toggleEnabled={toggleEnabled}
        handlePreferences={handlePreferences}
        handleDeleteSingle={handleDeleteSingle}
        handleCopy={handleCopy}
        handleCloseCopyDialog={handleCloseCopyDialog}
        showCopyDialog={showCopyDialog}
        selectedProfileId={selectedProfileId}
        isLoading={isLoading}
      />
    </PageWrapper>
  )
}

