"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { GatewaySkeleton } from "@/app/ui/skeleton"
import { AddGatewayButton, DeleteGatewayButton } from "@/app/ui/buttons"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { CheckCircle2, XCircle } from "lucide-react"
import { GatewayAddDialog } from "@/app/ui/gatewayAdd-dialog"

type Gateway = {
  id: number;
  gateway: string;
  proxy: string;
  context: string;
  status: string;
  action: string;
  state: string;
  description: string;
  enabled: string;
}

export default function GatewayPage() {
  const router = useRouter()
  const [gateways, setGateways] = useState<Gateway[]>([])
  const [selectedGateways, setSelectedGateways] = useState<number[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  

  useEffect(() => {
    async function fetchGateways() {
      try {
        const response = await fetch('/api/gateways')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setGateways(data)
      } catch (e) {
        setError('Failed to fetch gateways')
        console.error('Error fetching gateways:', e)
      } finally {
        setLoading(false)
      }
    }

    fetchGateways()
  }, [])

  const toggleGateway = (id: number) => {
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

  const handlePreferences = (id: number) => {
    console.log(`Open preferences for gateway with id: ${id}`)
    router.push(`/dashboard/accounts/gateways/${id}/settings`)
  }

  const handleToggleEnable = (id: number) => {
    console.log(`Toggle enable for gateway with id: ${id}`)
    // Implement toggle enable logic here
  }

  const handleDeleteSingle = (id: number) => {
    console.log(`Delete gateway with id: ${id}`)
    // Implement delete single gateway logic here
  }

  return (
    <div className="container mx-auto py-10">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gateways</h1>
        <div className="space-x-2">
          <GatewayAddDialog />
        </div>
      </div>
      <Card>
        <CardContent className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">
                  <Checkbox
                    checked={selectedGateways.length === gateways.length}
                    onCheckedChange={toggleAll}
                  />
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Proxy</TableHead>
                <TableHead>Context</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
                <TableHead>State</TableHead>
                <TableHead>Enabled</TableHead>
                <TableHead>Decription</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <>
                  <GatewaySkeleton />
                  <GatewaySkeleton />
                  <GatewaySkeleton />
                </>
              ) : error ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center text-red-500">{error}</TableCell>
                </TableRow>
              ) : (
                gateways.map((gateway) => (
                  <TableRow key={gateway.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedGateways.includes(gateway.id)}
                        onCheckedChange={() => toggleGateway(gateway.id)}
                      />
                    </TableCell>
                    <TableCell>{gateway.gateway}</TableCell>
                    <TableCell>{gateway.proxy}</TableCell>
                    <TableCell>{gateway.context}</TableCell>
                    <TableCell>{gateway.status}</TableCell>
                    <TableCell>{gateway.action}</TableCell>
                    <TableCell>{gateway.state}</TableCell>
                    <TableCell>
                      {gateway.enabled ? (
                        <CheckCircle2 className="text-green-500" size={20} />
                      ) : (
                        <XCircle className="text-red-500" size={20} />
                      )}
                    </TableCell>
                    <TableCell>{gateway.description}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          <DotsHorizontalIcon className="h-5 w-5" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem onSelect={() => handlePreferences(gateway.id)}>
                            Preferences
                          </DropdownMenuItem>
                          <DropdownMenuItem onSelect={() => handleToggleEnable(gateway.id)}>
                            {gateway.enabled ? 'Disable' : 'Enable'}
                          </DropdownMenuItem>
                          <DropdownMenuItem onSelect={() => handleDeleteSingle(gateway.id)}>
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