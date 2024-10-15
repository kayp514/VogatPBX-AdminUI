"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { DomainSkeleton } from "@/app/ui/skeleton"
import { AddButton, DeleteButton } from "@/app/ui/buttons"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Check, X } from "lucide-react"

type Domain = {
  id: number;
  name: string;
  portal_name: string;
  home_switch: string;
  description: string;
  enabled: boolean;
}

export default function DomainPage() {
  const [domains, setDomains] = useState<Domain[]>([])
  const router = useRouter()
  const [selectedDomains, setSelectedDomains] = useState<number[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchDomains() {
      try {
        const response = await fetch('../../api/domains/')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setDomains(data)
      } catch (e) {
        setError('Failed to fetch domains')
        console.error('Error fetching domains:', e)
      } finally {
        setLoading(false)
      }
    }

    fetchDomains()
  }, [])

  const toggleDomain = (id: number) => {
    setSelectedDomains(prev =>
      prev.includes(id) ? prev.filter(domainId => domainId !== id) : [...prev, id]
    )
  }

  const toggleAll = () => {
    setSelectedDomains(prev =>
      prev.length === domains.length ? [] : domains.map(domain => domain.id)
    )
  }

  const handleAdd = () => {
    router.push('/dashboard/settings/domains/add')
  }

  const handleDelete = () => {
    console.log(`Delete selected domains: ${selectedDomains.join(", ")}`)
    // Implement delete logic here
  }

  const handlePreferences = (id: number) => {
    console.log(`Open preferences for domain with id: ${id}`)
    // Implement preferences logic here
  }

  const handleToggleEnable = (id: number) => {
    console.log(`Toggle enable for domain with id: ${id}`)
    // Implement toggle enable logic here
  }

  const handleDeleteSingle = (id: number) => {
    console.log(`Delete domain with id: ${id}`)
    // Implement delete single domain logic here
  }

  return (
    <div className="container mx-auto py-10">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Domains</h1>
        <div className="space-x-2">
          <DeleteButton onClick={handleDelete} />
          <AddButton onClick={handleAdd} />
        </div>
      </div>
      <Card>
        <CardContent className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">
                  <Checkbox
                    checked={selectedDomains.length === domains.length}
                    onCheckedChange={toggleAll}
                  />
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Portal Name</TableHead>
                <TableHead>Switch</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Status</TableHead>
                
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <>
                  <DomainSkeleton />
                  <DomainSkeleton />
                  <DomainSkeleton />
                </>
              ) : error ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center text-red-500">{error}</TableCell>
                </TableRow> 
              ) : (
                domains.map((domain) => (
                  <TableRow key={domain.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedDomains.includes(domain.id)}
                        onCheckedChange={() => toggleDomain(domain.id)}
                      />
                    </TableCell>
                    <TableCell>{domain.name}</TableCell>
                    <TableCell>{domain.portal_name}</TableCell>
                    <TableCell>{domain.home_switch}</TableCell>
                    <TableCell>{domain.description}</TableCell>
                    <TableCell>
                      {domain.enabled ? (
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
                          <DropdownMenuItem onSelect={() => handlePreferences(domain.id)}>
                            Preferences
                          </DropdownMenuItem>
                          <DropdownMenuItem onSelect={() => handleToggleEnable(domain.id)}>
                            {domain.enabled ? 'Disable' : 'Enable'}
                          </DropdownMenuItem>
                          <DropdownMenuItem onSelect={() => handleDeleteSingle(domain.id)}>
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