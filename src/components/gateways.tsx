"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { PageWrapper } from "@/components/page-wrapper"
import { GatewayHeader } from "@/components/headers"
import { GatewaySearch } from "@/components/search"
import { GatewaysTable } from "@/components/table-gateways"
import type { Gateway as GatewayType } from "@/lib/db/types"

interface GatewayProps {
  initialGateways: GatewayType[]
}

export function Gateways({ initialGateways }: GatewayProps) {
  const router = useRouter()
  const [gateways, setGateways] = useState<GatewayType[]>(initialGateways)
  const [selectedGateways, setSelectedGateways] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState<Record<string, boolean>>({})

  const toggleGateway = (id: string) => {
    setSelectedGateways(prev =>
      prev.includes(id) ? prev.filter(gatewayId => gatewayId !== id) : [...prev, id]
    )
  }

  const toggleAll = () => {
    setSelectedGateways(prev =>
      prev.length === gateways.length ? [] : gateways.map(gateway => gateway.id)
    )
  }

  const handleAdd = () => {
    router.push('/dashboard/accounts/gateways/add')
  }

  const handleDelete = () => {
    console.log(`Delete selected gateways: ${selectedGateways.join(", ")}`)
    // Implement delete logic here
  }

  const handlePreferences = (id: string) => {
    console.log(`Open preferences for gateway with id: ${id}`)
    router.push(`/dashboard/accounts/gateways/${id}/settings`)
  }

  const handleToggleEnable = (id: string) => {
    console.log(`Toggle enable for gateway with id: ${id}`)
    // Implement toggle enable logic here
  }

  const handleDeleteSingle = (id: string) => {
    console.log(`Delete gateway with id: ${id}`)
    // Implement delete single gateway logic here
  }

  const toggleSelected = (id: string) => {
    setSelectedGateways((prev) => (prev.includes(id) ? prev.filter((gatewayId) => gatewayId !== id) : [...prev, id]))
  }




  const filteredGateways = gateways.filter(
    (gateway) =>
      gateway.gateway.toLowerCase().includes(searchQuery.toLowerCase()) ||
      gateway.proxy.toLowerCase().includes(searchQuery.toLowerCase()) ||
      gateway.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <PageWrapper>
      <GatewayHeader selectedCount={selectedGateways.length} />

      <GatewaySearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <GatewaysTable
        gateways={filteredGateways}
        selectedGateways={selectedGateways}
        toggleSelected={toggleSelected}
        toggleAll={toggleAll}
        toggleGateway={toggleGateway}
        isLoading={isLoading}
        onPreferences={handlePreferences}
        onToggleEnable={handleToggleEnable}
        onDelete={handleDeleteSingle}
      />
    </PageWrapper>
  )
}

