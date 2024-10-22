"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Check, X } from "lucide-react"
import { ExtensionSkeleton } from "./skeleton"
import { toast } from '@/hooks/use-toast'
import { Toaster } from "@/components/ui/toaster"

type Extension = {
  id: string;
  extension: string;
  effective_caller_id_name: string;
  effective_caller_id_number: string;
  call_group: string;
  user_context: string;
  enabled: string;
}

interface ExtensionTableProps {
    initialExtensions: Extension[];
  }

  export default function ExtensionTable({ initialExtensions }: ExtensionTableProps) {
  const router = useRouter()
  const [extensions, setExtensions] = useState<Extension[]>(initialExtensions)
  const [selectedExtensions, setSelectedExtensions] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false);

  //extensionsPromise.then(setExtensions)

  const toggleExtension = (id: string) => {
    setSelectedExtensions(prev =>
      prev.includes(id) ? prev.filter(extId => extId !== id) : [...prev, id]
    )
  }

  const toggleAll = () => {
    setSelectedExtensions(prev =>
      prev.length === extensions.length ? [] : extensions.map(ext => ext.id)
    )
  }

  const handlePreferences = (id: string) => {
    console.log(`Open preferences for extension with id: ${id}`)
    router.push(`/dashboard/accounts/extensions/${id}/settings`)

  }

  const handleToggleEnable = (id: string) => {
    console.log(`Toggle enable for extension with id: ${id}`)
    // Implement toggle enable logic here
  }

  const handleDeleteSingle = async (id: string) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/extensions', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete extension');
      }
  
      const result = await response.json();
  
      if (result.success) {
        setExtensions(prevExtensions => prevExtensions.filter(ext => ext.id !== id));
        setSelectedExtensions(prevSelected => prevSelected.filter(extId => extId !== id));
        toast({
          title: "Extension deleted",
          description: "The extension has been successfully deleted.",
        });
      } else {
        throw new Error('Failed to delete extension');
      }
    } catch (error) {
      console.error('Error deleting extension:', error);
      toast({
        title: "Error",
        description: "Failed to delete the extension. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <ExtensionSkeleton />
  }


  return (
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
              {extensions.map((extension) => (
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
                ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
  )
}