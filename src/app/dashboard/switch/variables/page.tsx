'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { toast } from '@/hooks/use-toast'
import { Card, CardContent } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Check, X, AlertCircle } from 'lucide-react'
import { VariablesPageSkeleton } from '@/app/ui/skeleton'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

type Variable = {
  id: string;
  name: string;
  value: string;
  hostname: string;
  enabled: string;
  description: string;
  category: string;
}

export default function VariablesPage() {
  const [variables, setVariables] = useState<Variable[]>([])
  const [activeCategory, setActiveCategory] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchVariables() {
      setIsLoading(true)
      setError(null)
      try {
        const response = await fetch('/api/variables')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setVariables(data)
        if (data.length > 0) {
          setActiveCategory(data[0].category)
        }
      } catch (error) {
        console.error('Error fetching variables:', error)
        setError('Failed to load variables. Please try again.')
        toast({
          title: 'Error',
          description: 'Failed to load variables. Please try again.',
          variant: 'destructive',
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchVariables()
  }, [])

  const categories = Array.from(new Set(variables.map(variable => variable.category)))

  const filteredVariables = activeCategory
    ? variables.filter(variable => variable.category === activeCategory)
    : variables

  const handleToggleEnabled = async (id: string) => {
    setVariables(prevVariables =>
      prevVariables.map(variable =>
        variable.id === id ? { ...variable, enabled: variable.enabled === 'true' ? 'false' : 'true' } : variable
      )
    )
    console.log(`Toggled variable with id: ${id}`)
    toast({
      title: 'Variable Action',
      description: `Toggled enabled state for variable with id: ${id}`,
    })
    // In a real application, you would make an API call here to update the server
  }

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
      <h1 className="text-2xl font-semibold mb-6">Variables</h1>
      <div className="flex">
        <nav className="w-64 pr-8">
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category}>
                <button
                  className={`w-full text-left py-2 px-4 rounded-md transition-colors ${
                    activeCategory === category
                      ? 'bg-primary text-primary-foreground font-medium'
                      : 'text-muted-foreground hover:bg-accent'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex-1">
          <Card>
            <CardContent className="p-6">
              <ScrollArea className="h-[600px]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Value</TableHead>
                      <TableHead>Hostname</TableHead>
                      <TableHead>Enabled</TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredVariables.map((variable) => (
                      <TableRow key={variable.id}>
                        <TableCell>{variable.name}</TableCell>
                        <TableCell>{variable.value}</TableCell>
                        <TableCell>{variable.hostname}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Switch
                              checked={variable.enabled === 'true'}
                              onCheckedChange={() => handleToggleEnabled(variable.id)}
                            />
                            {variable.enabled === 'true' ? (
                              <Check className="h-4 w-4 text-green-500" />
                            ) : (
                              <X className="h-4 w-4 text-red-500" />
                            )}
                          </div>
                        </TableCell>
                        <TableCell>{variable.description}</TableCell>
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