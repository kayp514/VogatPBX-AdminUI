"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { ExtensionSkeleton } from "@/app/ui/skeleton"
import { AddExtensionButton, DeleteExtensionButton } from "@/app/ui/buttons"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Check, X } from "lucide-react"

type Extension = {
  id: number;
  extension: string;
  effective_caller_id_name: string;
  effective_caller_id_number: string;
  call_group: string;
  user_context: string;
  enabled: boolean;
}

export default function ExtensionPage() {
  const router = useRouter()
  const [extensions, setExtensions] = useState<Extension[]>([])
  const [selectedExtensions, setSelectedExtensions] = useState<number[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchExtensions() {
      try {
        const response = await fetch('/api/extensions/')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setExtensions(data)
      } catch (e) {
        setError('Failed to fetch extensions')
        console.error('Error fetching extensions:', e)
      } finally {
        setLoading(false)
      }
    }

    fetchExtensions()
  }, [])

  const toggleExtension = (id: number) => {
    setSelectedExtensions(prev =>
      prev.includes(id) ? prev.filter(extId => extId !== id) : [...prev, id]
    )
  }

  const toggleAll = () => {
    setSelectedExtensions(prev =>
      prev.length === extensions.length ? [] : extensions.map(ext => ext.id)
    )
  }

  const handleAdd = () => {
    router.push('/dashboard/accounts/extensions/add')
  }

  const handleDelete = () => {
    console.log(`Delete selected extensions: ${selectedExtensions.join(", ")}`)
    // Implement delete logic here
  }

  const handlePreferences = (id: number) => {
    console.log(`Open preferences for extension with id: ${id}`)
    router.push(`/dashboard/accounts/extensions/${id}/settings`)

  }

  const handleToggleEnable = (id: number) => {
    console.log(`Toggle enable for extension with id: ${id}`)
    // Implement toggle enable logic here
  }

  const handleDeleteSingle = (id: number) => {
    console.log(`Delete extension with id: ${id}`)
    // Implement delete single extension logic here
  }

  return (
    <div className="container mx-auto py-10">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Extensions</h1>
        <div className="space-x-2">
          <DeleteExtensionButton onClick={handleDelete} />
          <AddExtensionButton onClick={handleAdd} />
        </div>
      </div>
      <Card>
        <CardContent className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">
                  <Checkbox
                    checked={selectedExtensions.length === extensions.length}
                    onCheckedChange={toggleAll}
                  />
                </TableHead>
                <TableHead>Extension</TableHead>
                <TableHead>Effective Caller ID Name</TableHead>
                <TableHead>Outbound Caller ID Name</TableHead>
                <TableHead>Callgroup</TableHead>
                <TableHead>Context</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <>
                  <ExtensionSkeleton />
                  <ExtensionSkeleton />
                  <ExtensionSkeleton />
                </>
              ) : error ? (
                <TableRow>
                  <TableCell colSpan={8} className="text-center text-red-500">{error}</TableCell>
                </TableRow>
              ) : (
                extensions.map((extension) => (
                  <TableRow key={extension.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedExtensions.includes(extension.id)}
                        onCheckedChange={() => toggleExtension(extension.id)}
                      />
                    </TableCell>
                    <TableCell>{extension.extension}</TableCell>
                    <TableCell>{extension.effective_caller_id_name}</TableCell>
                    <TableCell>{extension.effective_caller_id_number}</TableCell>
                    <TableCell>{extension.call_group}</TableCell>
                    <TableCell>{extension.user_context}</TableCell>
                    <TableCell>
                      {extension.enabled ? (
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
                          <DropdownMenuItem onSelect={() => handlePreferences(extension.id)}>
                            Preferences
                          </DropdownMenuItem>
                          <DropdownMenuItem onSelect={() => handleToggleEnable(extension.id)}>
                            {extension.enabled ? 'Disable' : 'Enable'}
                          </DropdownMenuItem>
                          <DropdownMenuItem onSelect={() => handleDeleteSingle(extension.id)}>
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