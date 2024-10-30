'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { toast } from '@/hooks/use-toast'
import { Card, CardContent } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CheckCircle2, XCircle, Check, X, AlertCircle } from 'lucide-react'
import { VariablesPageSkeleton } from '@/app/ui/skeleton'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Permission = {
  id: number;
  name: string;
  content_type_id: number;
  codename: string;
  model: string;
  main_label: string;
}

export default function PermissionsPage() {
  const [permissions, setPermissions] = useState<Permission[]>([])
  const [activeCategory, setActiveCategory] = useState('')
  const [activeModel, setActiveModel] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPermissions() {
      setIsLoading(true)
      setError(null)
      try {
        const response = await fetch('/api/v1/permissions')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setPermissions(data)
        if (data.length > 0) {
          setActiveCategory(data[0].main_label)
          setActiveModel(data[0].model)
        }
      } catch (error) {
        console.error('Error fetching permissions:', error)
        setError('Failed to load permissions. Please try again.')
        toast({
          title: 'Error',
          description: 'Failed to load permissions. Please try again.',
          variant: 'destructive',
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchPermissions()
  }, [])

  const categories = Array.from(new Set(permissions.map(permission => permission.main_label)))
  const models = Array.from(new Set(permissions.filter(permission => permission.main_label === activeCategory).map(permission => permission.model)))

  const filteredPermissions = permissions.filter(permission => 
    permission.main_label === activeCategory && permission.model === activeModel
  )

  if (isLoading) {
    return <VariablesPageSkeleton />
  }

  if (error) {
    return (
      <div className="container mx-auto py-6">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
        <Button 
          className="mt-4" 
          onClick={() => window.location.reload()}
        >
          Retry
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-semibold mb-6">Permissions</h1>
      <div className="flex h-[calc(100vh-200px)]">
        <nav className="w-64 pr-8 flex flex-col">
          <ScrollArea className="flex-1">
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <button
                    className={`w-full text-left py-2 px-4 rounded-md transition-colors ${
                      activeCategory === category
                        ? 'bg-primary text-primary-foreground font-medium'
                        : 'text-muted-foreground hover:bg-accent'
                    }`}
                    onClick={() => {
                      setActiveCategory(category)
                      setActiveModel(models[0])
                    }}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </ScrollArea>
        </nav>
        <div className="flex-1 flex flex-col">
          <Tabs value={activeModel} onValueChange={setActiveModel} className="mb-4">
            <TabsList>
              {models.map((model) => (
                <TabsTrigger key={model} value={model}>
                  {model}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          <Card className="flex-1">
            <CardContent className="p-6 h-full">
              <ScrollArea className="h-full">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[50px]"></TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPermissions.map((permission) => (
                      <TableRow key={permission.id}>
                        <TableCell>
                          <Checkbox />
                        </TableCell>
                        <TableCell>{permission.codename}</TableCell>
                        <TableCell>{permission.name}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}