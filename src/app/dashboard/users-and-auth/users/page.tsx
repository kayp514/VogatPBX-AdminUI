"use client"

import { useState, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { UserSkeleton } from "@/app/ui/skeleton"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"


// This would typically come from an API or database
const initialUsers = [
  { id: 1, username: "john_doe", email: "john@example.com", firstName: "John", lastName: "Doe", staffStatus: true, active: true },
  { id: 2, username: "jane_smith", email: "jane@example.com", firstName: "Jane", lastName: "Smith", staffStatus: true, active: true},
  { id: 3, username: "bob_johnson", email: "bob@example.com", firstName: "Bob", lastName: "Johnson", staffStatus: false, active: false },
]

export default function UserPage() {
  const [users, setUsers] = useState(initialUsers)
  const [selectedUsers, setSelectedUsers] = useState<number[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    const fetchUsers = async () => {
      await new Promise(resolve => setTimeout(resolve, 1500)) // Simulate delay
      setUsers(initialUsers)
      setLoading(false)
    }

    fetchUsers()
  }, [])

  const toggleUser = (id: number) => {
    setSelectedUsers(prev =>
      prev.includes(id) ? prev.filter(userId => userId !== id) : [...prev, id]
    )
  }

  const toggleAll = () => {
    setSelectedUsers(prev =>
      prev.length === users.length ? [] : users.map(user => user.id)
    )
  }

  const toggleActive = (id: number) => {
    setUsers(prev =>
      prev.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    )
  }

  const handleDelete = () => {
    console.log(`Delete selected gateways`)
    // Implement delete logic here
  }

  const handlePreferences = (id: number) => {
    console.log(`Open preferences for gateway with id: ${id}`)
    // Implement preferences logic here
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
      <Card>
        <CardHeader>
          <CardTitle>Users</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">
                  <Checkbox
                    checked={selectedUsers.length === users.length}
                    onCheckedChange={toggleAll}
                  />
                </TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Email Address</TableHead>
                <TableHead>First Name</TableHead>
                <TableHead>Last Name</TableHead>
                <TableHead>Staff Status</TableHead>
                <TableHead>Active</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <>
                  <UserSkeleton />
                  <UserSkeleton />
                  <UserSkeleton />
                  <UserSkeleton />
                </>
              ) : (
              users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedUsers.includes(user.id)}
                      onCheckedChange={() => toggleUser(user.id)}
                    />
                  </TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.firstName}</TableCell>
                  <TableCell>{user.lastName}</TableCell>
                  <TableCell>{user.staffStatus ? "Yes" : "No"}</TableCell>
                  <TableCell>
                    <Switch
                      checked={user.active}
                      onCheckedChange={() => toggleActive(user.id)}
                      className={user.active ? "bg-green-500" : ""}
                    />
                  </TableCell>
                  <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          <DotsHorizontalIcon className="h-5 w-5" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem onSelect={() => handlePreferences(user.id)}>
                            Preferences
                          </DropdownMenuItem>
                          <DropdownMenuItem onSelect={() => handleToggleEnable(user.id)}>
                            {user.active ? 'Disable' : 'Enable'}
                          </DropdownMenuItem>
                          <DropdownMenuItem onSelect={() => handleDeleteSingle(user.id)}>
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