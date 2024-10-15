"use client"

import { useState, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { GroupDetailsModal } from "@/app/ui/group-details-modal"
import { GroupsSkeleton } from "@/app/ui/skeleton"

// This would typically come from an API or database
const initialGroups = [
  { id: 1, name: "Administrators" },
  { id: 2, name: "Managers" },
  { id: 3, name: "Users" },
  { id: 4, name: "Guests" },
]

export default function GroupsPage() {
  const [groups, setGroups] = useState(initialGroups)
  const [selectedGroups, setSelectedGroups] = useState<number[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    const fetchGroups = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate delay
      setGroups(initialGroups)
      setLoading(false)
    }

    fetchGroups()
  }, [])

  const toggleGroup = (id: number) => {
    setSelectedGroups(prev =>
      prev.includes(id) ? prev.filter(groupId => groupId !== id) : [...prev, id]
    )
  }

  const toggleAll = () => {
    setSelectedGroups(prev =>
      prev.length === groups.length ? [] : groups.map(group => group.id)
    )
  }

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Groups</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">
                  <Checkbox
                    checked={selectedGroups.length === groups.length}
                    onCheckedChange={toggleAll}
                  />
                </TableHead>
                <TableHead>Group</TableHead>
                <TableHead className="w-[100px]">View</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
                {loading ? (
                    <>
                    <GroupsSkeleton />
                    <GroupsSkeleton />
                    <GroupsSkeleton />
                    <GroupsSkeleton />
                    </>
                ) : (
              groups.map((group) => (
                <TableRow key={group.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedGroups.includes(group.id)}
                      onCheckedChange={() => toggleGroup(group.id)}
                    />
                  </TableCell>
                  <TableCell>{group.name}</TableCell>
                  <TableCell>
                    <GroupDetailsModal groupName={group.name} />
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