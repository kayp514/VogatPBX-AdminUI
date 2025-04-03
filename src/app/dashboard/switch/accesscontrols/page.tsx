"use client"

import { useState, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { AccessControlDialog } from "@/components/accesscontroladd-dialog"
import { toast } from "@/hooks/use-toast"

type AccessControl = {
  id: string;
  name: string;
  default: string;
  description: string;
}

export default function AccessControlsPage() {
  const [accessControls, setAccessControls] = useState<AccessControl[]>([])
  const [selectedAccessControls, setSelectedAccessControls] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchAccessControls() {
      try {
        const response = await fetch('/api/v1/accessControls/')
        if (!response.ok) {
          throw new Error('Failed to fetch SIP profiles')
        }
        const data = await response.json()
        setAccessControls(data)
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
  
    fetchAccessControls()
  }, [])


  const toggleAccessControl = (id: string) => {
    setSelectedAccessControls(prev =>
      prev.includes(id) ? prev.filter(acId => acId !== id) : [...prev, id]
    )
  }

  const toggleAll = () => {
    setSelectedAccessControls(prev =>
      prev.length === accessControls.length ? [] : accessControls.map(ac => ac.id)
    )
  }

  return (
    <div className="container mx-auto py-10">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Access Controls</h1>
        <AccessControlDialog />
      </div>
      <Card>
        <CardContent className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">
                  <Checkbox
                    checked={selectedAccessControls.length === accessControls.length}
                    onCheckedChange={toggleAll}
                  />
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Default</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center">Loading...</TableCell>
                </TableRow>
              ) : (
                accessControls.map((accessControl) => (
                  <TableRow key={accessControl.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedAccessControls.includes(accessControl.id)}
                        onCheckedChange={() => toggleAccessControl(accessControl.id)}
                      />
                    </TableCell>
                    <TableCell>{accessControl.name}</TableCell>
                    <TableCell>{accessControl.default}</TableCell>
                    <TableCell>{accessControl.description}</TableCell>
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