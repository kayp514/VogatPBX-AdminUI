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

const mockTemplates: EmailTemplate[] = [
  {
    id: '1',
    language: 'en-us',
    category: 'Account',
    subcategory: 'Welcome',
    subject: 'Welcome to Our Service',
    type: 'html',
    enabled: true,
    description: 'Welcome email for new users'
  },
  {
    id: '2',
    language: 'en-us',
    category: 'Billing',
    subcategory: 'Invoice',
    subject: 'Your Monthly Invoice',
    type: 'text',
    enabled: true,
    description: 'Monthly invoice email'
  },
  {
    id: '3',
    language: 'en-gb',
    category: 'Support',
    subcategory: 'Ticket',
    subject: 'Your Support Ticket',
    type: 'html',
    enabled: true,
    description: 'Support ticket confirmation email'
  },
  {
    id: '4',
    language: 'en-gb',
    category: 'Marketing',
    subcategory: 'Newsletter',
    subject: 'Latest Updates from Us',
    type: 'html',
    enabled: false,
    description: 'Monthly newsletter email'
  },
]

export default function EmailTemplatePage() {
  const [templates, setTemplates] = useState<EmailTemplate[]>(mockTemplates)
  const [activeLanguage, setActiveLanguage] = useState('en-us')
  const [isLoading, setIsLoading] = useState(false)

  const languages = Array.from(new Set(mockTemplates.map(template => template.language)))

  useEffect(() => {
    async function fetchTemplates() {
      setIsLoading(true)
      try {
        // In a real application, you would fetch the templates from an API
        // For now, we'll use the mock data
        setTemplates(mockTemplates)
      } catch (error) {
        console.error('Error fetching templates:', error)
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

  const filteredTemplates = templates.filter(template => template.language === activeLanguage)

  const handleToggleEnabled = (id: string) => {
    setTemplates(prevTemplates =>
      prevTemplates.map(template =>
        template.id === id ? { ...template, enabled: !template.enabled } : template
      )
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