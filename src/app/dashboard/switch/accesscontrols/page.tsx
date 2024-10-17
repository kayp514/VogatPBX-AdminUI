"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { AccessControlDialog } from "@/app/ui/accesscontroladd-dialog"

type AccessControl = {
  id: number;
  name: string;
  default: string;
  description: string;
}

export default function AccessControlsPage() {
  const [accessControls, setAccessControls] = useState<AccessControl[]>([
    { id: 1, name: "domains", default: "deny", description: "Domain access" },
    { id: 2, name: "deny", default: "deny", description: "Deny access" },
  ])
  const [selectedAccessControls, setSelectedAccessControls] = useState<number[]>([])
  const [loading, setLoading] = useState(false)

  const toggleAccessControl = (id: number) => {
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