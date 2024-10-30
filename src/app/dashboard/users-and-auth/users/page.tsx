"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { UserSkeleton } from "@/app/ui/skeleton"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { User, CheckCircle2, XCircle } from "lucide-react"
import { UserAddDialog } from "@/app/ui/userAddDialog"


type Users = {
  id: string;
  user_uuid: string;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  status: string;
  enabled: string;
  is_staff: boolean;
  is_active: boolean;
  is_superuser: boolean;
}


export default function UserPage() {
  const router = useRouter()
  const [users, setUsers] = useState<Users[]>([])
  const [selectedUsers, setSelectedUsers] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('/api/v1/users/')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setUsers(data)
      } catch (e) {
        setError('Failed to fetch domains')
        console.error('Error fetching domains:', e)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  const toggleUser = (id: string) => {
    setSelectedUsers(prev =>
      prev.includes(id) ? prev.filter(userId => userId !== id) : [...prev, id]
    )
  }

  const toggleAll = () => {
    setSelectedUsers(prev =>
      prev.length === users.length ? [] : users.map(user => user.id)
    )
  }

  const toggleActive = (id: string) => {
    setUsers(prev =>
      prev.map(user =>
        user.id === id ? { ...user, is_active: !user.is_active } : user
      )
    )
  }

  const handleDelete = () => {
    console.log(`Delete selected gateways`)
    // Implement delete logic here
  }

  const handlePreferences = (id: string) => {
    console.log(`Open preferences for gateway with id: ${id}`)
    router.push(`/dashboard/users-and-auth/users/${id}/settings`)
  }

  const handleToggleActive = (id: string) => {
    console.log(`Toggle active for user with id: ${id}`)
    toggleActive(id)
  }

  const handleDeleteSingle = (id: string) => {
    console.log(`Delete user with id: ${id}`)
    // Implement delete single user logic here
  }


  return (
    <div className="container mx-auto py-10">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Users</h1>
        <div className="space-x-2">
          </div>
          <UserAddDialog />
          </div>
      <Card>
        <CardContent className="p-6">
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
                  <TableCell>{user.first_name}</TableCell>
                  <TableCell>{user.last_name}</TableCell>
                  <TableCell>
                    {user.is_staff ? (
                      <CheckCircle2 className="text-green-500" size={20} />
                    ) : (
                      <XCircle className="text-red-500" size={20} />
                    )}
                  </TableCell>
                  <TableCell>
                  <Switch
                      checked={user.is_active}
                      onCheckedChange={() => toggleActive(user.id)}
                      className={user.is_active ? "bg-green-500" : ""}
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
                          <DropdownMenuItem onSelect={() => handleToggleActive(user.id)}>
                          {user.is_active ? 'Deactivate' : 'Activate'}
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