'use client'

import { useState, useEffect } from 'react'
import { useParams } from "next/navigation"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { toast } from '@/hooks/use-toast'
import { Card, CardContent } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Check, X, AlertCircle } from 'lucide-react'
import { VariablesPageSkeleton } from '@/app/ui/skeleton'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

type EmailTemplate = {
  id: string;
  language: string;
  category: string;
  subcategory: string;
  subject: string;
  type: 'html' | 'text';
  enabled: boolean;
  description: string;
}

export default function EmailTemplatePage() {
  const [templates, setTemplates] = useState<EmailTemplate[]>([])
  const [activeLanguage, setActiveLanguage] = useState('en-us')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchTemplates() {
      setIsLoading(true)
      setError(null)
      try {
        const response = await fetch('/api/v1/emailTemplates')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setTemplates(data)
      } catch (error) {
        console.error('Error fetching templates:', error)
        setError('Failed to load email templates. Please try again.')
        toast({
          title: 'Error',
          description: 'Failed to load email templates. Please try again.',
          variant: 'destructive',
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchTemplates()
  }, [])

  const languages = Array.from(new Set(templates.map(template => template.language)))

  const filteredTemplates = templates.filter(template => template.language === activeLanguage)

  const handleToggleEnabled = (id: string) => {
    setTemplates(prevTemplates =>
      prevTemplates.map(template =>
        template.id === id ? { ...template, enabled: !template.enabled } : template
      )
    )
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
      <h1 className="text-2xl font-semibold mb-6">Email Templates</h1>
      <div className="flex">
        <nav className="w-64 pr-8">
          <ul className="space-y-2">
            {languages.map((language) => (
              <li key={language}>
                <button
                  className={`w-full text-left py-2 px-4 rounded-md transition-colors ${
                    activeLanguage === language.toLowerCase()
                      ? 'bg-blue-100 text-blue-600 font-medium'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveLanguage(language)}
                >
                  {language.toUpperCase()}
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
                      <TableHead>Language</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Subcategory</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Enabled</TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredTemplates.map((template) => (
                      <TableRow key={template.id}>
                        <TableCell>{template.language}</TableCell>
                        <TableCell>{template.category}</TableCell>
                        <TableCell>{template.subcategory}</TableCell>
                        <TableCell>{template.subject}</TableCell>
                        <TableCell>{template.type}</TableCell>
                        <TableCell>
                          <Switch
                            checked={template.enabled}
                            onCheckedChange={() => handleToggleEnabled(template.id)}
                          />
                        </TableCell>
                        <TableCell>{template.description}</TableCell>
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