"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { SipProfileDialog } from "@/app/ui/sipprofileadd-dialog"
import { DeleteButton } from "@/app/ui/buttons"
import { toast } from "@/hooks/use-toast"
import { SipProfilesSkeleton } from "@/app/ui/skeleton"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"


type SipProfile = {
    id: string;
    name: string;
    hostname: string;
    enabled: string;
    description: string;
  }

export default function SipProfilesPage() {
  const router = useRouter()
  const [sipProfiles, setSipProfiles] = useState<SipProfile[]>([])
  const [selectedSipProfiles, setSelectedSipProfiles] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
  async function fetchSipProfiles() {
    try {
      const response = await fetch('/api/sipProfiles/')
      if (!response.ok) {
        throw new Error('Failed to fetch SIP profiles')
      }
      const data = await response.json()
      setSipProfiles(data)
    } catch (error) {
      console.error('Error fetching SIP profiles:', error)
      toast({
        title: "Error",
        description: "Failed to fetch SIP profiles. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  fetchSipProfiles()
}, [])



  const toggleSipProfile = (id: string) => {
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
    // Implement toggle enabled logic here
  }

  const handlePreferences = (id: string) => {
    console.log(`Open preferences for sip profile with id: ${id}`)
    router.push(`/dashboard/switch/sipProfiles/${id}/settings`)

  }

  const handleDeleteSingle = (id: string) => {
    console.log(`Delete domain with id: ${id}`)
    // Implement delete single domain logic here
  }

  return (
    <div className="container mx-auto py-10">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">SIP Profiles</h1>
        <div className="space-x-2">
        <SipProfileDialog />
        </div>
      </div>
      <Card>
        <CardContent className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">
                  <Checkbox
                    checked={selectedSipProfiles.length === sipProfiles.length}
                    onCheckedChange={toggleAll}
                  />
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Hostname</TableHead>
                <TableHead>Enabled</TableHead>
                <TableHead>Description</TableHead>

              </TableRow>
            </TableHeader>
            <TableBody>
                {loading ? (
                  <>
                    <SipProfilesSkeleton />
                    <SipProfilesSkeleton />
                    <SipProfilesSkeleton />
                  </>
              ) : error ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center text-red-500">{error}</TableCell>
                </TableRow> 
              ) : (
                sipProfiles.map((sipProfile) => (
                  <TableRow key={sipProfile.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedSipProfiles.includes(sipProfile.id)}
                        onCheckedChange={() => toggleSipProfile(sipProfile.id)}
                      />
                    </TableCell>
                    <TableCell>{sipProfile.name}</TableCell>
                    <TableCell>{sipProfile.hostname}</TableCell>
                    <TableCell>
                      <Switch
                        checked={sipProfile.enabled === 'true'}
                        onCheckedChange={() => toggleEnabled(sipProfile.id)}
                      />
                    </TableCell>
                    <TableCell>{sipProfile.description}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          <DotsHorizontalIcon className="h-5 w-5" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem onSelect={() => handlePreferences(sipProfile.id)}>
                            Preferences
                          </DropdownMenuItem>
                          <DropdownMenuItem onSelect={() => handleDeleteSingle(sipProfile.id)}>
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