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

type Module = {
  id: string;
  label: string;
  category: string;
  enabled: string;
  description: string;
  status?: 'running' | 'stopped';  // Added status field
}

export default function ModulesPage() {
  const [modules, setModules] = useState<Module[]>([])
  const [activeCategory, setActiveCategory] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchModules() {
      setIsLoading(true)
      setError(null)
      try {
        const response = await fetch('/api/modules')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        // Simulate status for each module
        const modulesWithStatus = data.map((module: Module) => ({
          ...module,
          status: Math.random() > 0.5 ? 'running' : 'stopped'
        }))
        setModules(modulesWithStatus)
        if (modulesWithStatus.length > 0) {
          setActiveCategory(modulesWithStatus[0].category)
        }
      } catch (error) {
        console.error('Error fetching modules:', error)
        setError('Failed to load modules. Please try again.')
        toast({
          title: 'Error',
          description: 'Failed to load modules. Please try again.',
          variant: 'destructive',
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchModules()
  }, [])

  const categories = Array.from(new Set(modules.map(module => module.category)))

  const filteredModules = activeCategory
    ? modules.filter(module => module.category === activeCategory)
    : modules

  const handleStartModule = async (id: string) => {
    setModules(prevModules =>
      prevModules.map(module =>
        module.id === id ? { ...module, status: 'running' } : module
      )
    )
    console.log(`Starting module with id: ${id}`)
    toast({
      title: 'Module Action',
      description: `Started module with id: ${id}`,
    })
  }

  const handleStopModule = async (id: string) => {
    setModules(prevModules =>
      prevModules.map(module =>
        module.id === id ? { ...module, status: 'stopped' } : module
      )
    )
    console.log(`Stopping module with id: ${id}`)
    toast({
      title: 'Module Action',
      description: `Stopped module with id: ${id}`,
    })
  }

  const handleToggleEnabled = async (id: string) => {
    setModules(prevModules =>
      prevModules.map(module =>
        module.id === id ? { ...module, enabled: module.enabled === 'true' ? 'false' : 'true' } : module
      )
    )
    console.log(`Toggled module with id: ${id}`)
    toast({
      title: 'Module Action',
      description: `Toggled enabled state for module with id: ${id}`,
    })
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
      <h1 className="text-2xl font-semibold mb-6">Modules</h1>
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
                      <TableHead>Label</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Action</TableHead>
                      <TableHead>Enabled</TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredModules.map((module) => (
                      <TableRow key={module.id}>
                        <TableCell>{module.label}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <span className={`w-2 h-2 rounded-full mr-2 ${module.status === 'running' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                            <span className={module.status === 'running' ? 'text-gray-500' : 'text-gray-500'}>
                              {module.status === 'running' ? 'Running' : 'Stopped'}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => module.status === 'running' ? handleStopModule(module.id) : handleStartModule(module.id)}
                          >
                            {module.status === 'running' ? 'Stop' : 'Start'}
                          </Button>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Switch
                              checked={module.enabled === 'true'}
                              onCheckedChange={() => handleToggleEnabled(module.id)}
                            />
                            {module.enabled === 'true' ? (
                              <CheckCircle2 className="text-green-500 h-4 w-4" />
                            ) : (
                              <XCircle className="text-red-500 h-4 w-4"/>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>{module.description}</TableCell>
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