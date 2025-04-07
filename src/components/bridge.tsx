"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { PageWrapper } from "@/components/page-wrapper"
import { BridgeHeader } from "@/components/headers"
import { BridgeSearch } from "@/components/search"
import { BridgeTable } from "@/components/table-bridge"
import type { Bridge } from "@/lib/db/types"

interface BridgeClientProps {
  initialBridges: Bridge[]
}

export function Bridge({ initialBridges }: BridgeClientProps) {
  const router = useRouter()
  const [bridges, setBridges] = useState<Bridge[]>(initialBridges)
  const [selectedBridges, setSelectedBridges] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState<Record<string, boolean>>({})

  const toggleSelected = (id: string) => {
    setSelectedBridges((prev) => (prev.includes(id) ? prev.filter((bridgeId) => bridgeId !== id) : [...prev, id]))
  }

  const toggleAll = () => {
    if (selectedBridges.length === filteredBridges.length) {
      setSelectedBridges([])
    } else {
      setSelectedBridges(filteredBridges.map((bridge) => bridge.id))
    }
  }


  const handleAdd = () => {
    router.push('/dashboard/switch/bridges/add')
  }

  const handleDelete = () => {
    console.log(`Delete selected bridges: ${selectedBridges.join(", ")}`)
    // Implement delete logic here
  }

  const handlePreferences = (id: string) => {
    console.log(`Open preferences for bridge with id: ${id}`)
    // Implement preferences logic here
  }

  const handleToggleEnable = (id: string) => {
    console.log(`Toggle enable for bridge with id: ${id}`)
  }

  const handleDeleteSingle = (id: string) => {
    console.log(`Delete bridge with id: ${id}`)
    // Implement delete single bridge logic here
  }


  const filteredBridges = bridges.filter(
    (bridge) =>
      bridge.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bridge.destination.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <PageWrapper>
      <BridgeHeader selectedCount={selectedBridges.length} />

      <BridgeSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <BridgeTable
        bridges={filteredBridges}
        selectedBridges={selectedBridges}
        toggleSelected={toggleSelected}
        toggleAll={toggleAll}
        isLoading={isLoading}
        onPreferences={handlePreferences}
        onToggleEnable={handleToggleEnable}
        onDelete={handleDeleteSingle}
      />
    </PageWrapper>
  )
}

