"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { PageWrapper } from "@/components/page-wrapper"
import { ExtensionsHeader } from "@/components/headers"
import { ExtensionsSearch } from "@/components/search"
import { ExtensionsTable } from "@/components/table-extensions"
import type { Extension } from "@/lib/db/types"
import { toast } from '@/hooks/use-toast'

interface ExtensionsProps {
  initialExtensions: Extension[]
}

export function Extensions({ initialExtensions }: ExtensionsProps) {
  const router = useRouter()
  const [selectedExtensions, setSelectedExtensions] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [extensions, setExtensions] = useState<Extension[]>(initialExtensions)
  const [isLoading, setIsLoading] = useState<Record<string, boolean>>({})

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
  }

  const handleDeleteSingle = async (id: string) => {
    setIsLoading(prev => ({ ...prev, [id]: true }))
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
      setIsLoading(prev => ({ ...prev, [id]: false }))
    }
  };

  const filteredExtensions = initialExtensions.filter(
    (ext) =>
      ext.extension.includes(searchQuery) ||
      ext.effective_caller_id_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ext.user_context.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <PageWrapper>
      <ExtensionsHeader selectedCount={selectedExtensions.length} />
      <ExtensionsSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ExtensionsTable
        extensions={filteredExtensions}
        selectedExtensions={selectedExtensions}
        toggleExtension={toggleExtension}
        toggleAll={toggleAll}
        isLoading={isLoading}
        onPreferences={handlePreferences}
        onToggleEnable={handleToggleEnable}
        onDelete={handleDeleteSingle}
      />
    </PageWrapper>
  )
}

