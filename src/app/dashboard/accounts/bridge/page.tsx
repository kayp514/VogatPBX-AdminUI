"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { BridgeSkeleton } from "@/components/skeleton"
import { AddBridgeButton, DeleteBridgeButton } from "@/components/buttons"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Check, X } from "lucide-react"

type Bridge = {
  id: number;
  name: string;
  destination: string;
  enabled: boolean;
}

export default function BridgePage() {
  const router = useRouter()
  const [bridges, setBridges] = useState<Bridge[]>([])
  const [selectedBridges, setSelectedBridges] = useState<number[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchBridges() {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/v1/bridges/')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setBridges(data)
      } catch (e) {
        setError('Failed to fetch bridges')
        console.error('Error fetching bridges:', e)
      } finally {
        setLoading(false)
      }
    }

    fetchBridges()
  }, [])

  const toggleBridge = (id: number) => {
    setSelectedBridges(prev =>
      prev.includes(id) ? prev.filter(bridgeId => bridgeId !== id) : [...prev, id]
    )
  }

  const toggleAll = () => {
    setSelectedBridges(prev =>
      prev.length === bridges.length ? [] : bridges.map(bridge => bridge.id)
    )
  }

  const handleAdd = () => {
    router.push('/dashboard/accounts/bridges/add')
  }

  const handleDelete = () => {
    console.log(`Delete selected bridges: ${selectedBridges.join(", ")}`)
    // Implement delete logic here
  }

  const handlePreferences = (id: number) => {
    console.log(`Open preferences for bridge with id: ${id}`)
    // Implement preferences logic here
  }

  const handleToggleEnable = (id: number) => {
    console.log(`Toggle enable for bridge with id: ${id}`)
    // Implement toggle enable logic here
  }

  const handleDeleteSingle = (id: number) => {
    console.log(`Delete bridge with id: ${id}`)
    // Implement delete single bridge logic here
  }

  return (
    <div className="container mx-auto py-10">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Bridges</h1>
        <div className="space-x-2">
          <DeleteBridgeButton onClick={handleDelete} />
          <AddBridgeButton onClick={handleAdd} />
        </div>
      </div>
      <Card>
        <CardContent className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">
                  <Checkbox
                    checked={selectedBridges.length === bridges.length}
                    onCheckedChange={toggleAll}
                  />
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Destination</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <>
                  <BridgeSkeleton />
                  <BridgeSkeleton />
                  <BridgeSkeleton />
                </>
              ) : error ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-red-500">{error}</TableCell>
                </TableRow>
              ) : (
                bridges.map((bridge) => (
                  <TableRow key={bridge.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedBridges.includes(bridge.id)}
                        onCheckedChange={() => toggleBridge(bridge.id)}
                      />
                    </TableCell>
                    <TableCell>{bridge.name}</TableCell>
                    <TableCell>{bridge.destination}</TableCell>
                    <TableCell>
                      {bridge.enabled ? (
                        <Check className="text-green-500" />
                      ) : (
                        <X className="text-red-500" />
                      )}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          <DotsHorizontalIcon className="h-5 w-5" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem onSelect={() => handlePreferences(bridge.id)}>
                            Preferences
                          </DropdownMenuItem>
                          <DropdownMenuItem onSelect={() => handleToggleEnable(bridge.id)}>
                            {bridge.enabled ? 'Disable' : 'Enable'}
                          </DropdownMenuItem>
                          <DropdownMenuItem onSelect={() => handleDeleteSingle(bridge.id)}>
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}