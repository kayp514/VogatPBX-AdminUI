'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { toast } from '@/hooks/use-toast'
import { Toaster } from "@/components/ui/toaster"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PhoneIcon, LockIcon, GlobeIcon } from 'lucide-react'
import { addExtension } from '@/app/actions'

interface FormValues {
  extension: string
  password: string
  domain_uuid: string
  user_context: string
}

interface Domain {
  id: string
  name: string
}


export default function AddExtensionPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [domains, setDomains] = useState<Domain[]>([])

  const form = useForm<FormValues>({
    defaultValues: {
      extension: '',
      password: '',
      domain_uuid: '',
      user_context: '',
    },
  })

  useEffect(() => {
    async function fetchDomains() {
      try {
        const response = await fetch('/api/v1/domains')
        if (!response.ok) {
          throw new Error('Failed to fetch domains')
        }
        const data = await response.json()
        setDomains(data)
      } catch (error) {
        console.error('Error fetching domains:', error)
        toast({
          title: 'Error',
          description: 'Failed to fetch domains. Please try again.',
          variant: 'destructive',
        })
      }
    }
    fetchDomains()
  }, [])


  async function onSubmit(formData: FormData) {
    setIsLoading(true)
    try {
      const values = form.getValues()
      const selectedDomain = domains.find(domain => domain.id === values.domain_uuid)
      if (!selectedDomain) {
        throw new Error('Selected domain not found')
      }

      const formDataToSend = new FormData()
      formDataToSend.append('extension', values.extension)
      formDataToSend.append('password', values.password)
      formDataToSend.append('domain_uuid', values.domain_uuid)
      formDataToSend.append('user_context', selectedDomain.name)

      const result = await addExtension(formDataToSend)
      if (result.success) {
        toast({
          title: 'Extension added successfully',
          description: 'The new extension has been added to the system.',
        })
        router.push('/dashboard/accounts/extensions')
      } else {
        throw new Error(result.error)
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to add extension. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-md mx-auto">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Add New Extension</CardTitle>
          <CardDescription>
            Enter the details for the new extension in the VogatPBX system.
          </CardDescription>
        </CardHeader>
        <CardContent>
        <Form {...form}>
          <form action={onSubmit} className="space-y-6">
<FormField
                control={form.control}
                name="extension"
                rules={{ required: "Extension is required", minLength: { value: 2, message: "Extension must be at least 2 characters" }, maxLength: { value: 7, message: "Extension must be at most 7 characters" } }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center space-x-2">
                      <PhoneIcon className="w-4 h-4" />
                      <span>Extension</span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} className="text-lg" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                rules={{ required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center space-x-2">
                      <LockIcon className="w-4 h-4" />
                      <span>Password</span>
                    </FormLabel>
                    <FormControl>
                      <Input type="password" {...field} className="text-lg" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="domain_uuid"
                rules={{ required: "Domain is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center space-x-2">
                      <GlobeIcon className="w-4 h-4" />
                      <span>Domain</span>
                    </FormLabel>
                    <Select onValueChange={(value) => {
                      field.onChange(value)
                      const selectedDomain = domains.find(domain => domain.id === value)
                      if (selectedDomain) {
                        form.setValue('user_context', selectedDomain.name)
                      }
                    }}>
                      <FormControl>
                        <SelectTrigger className="text-lg">
                          <SelectValue placeholder="Select a domain" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {domains.map((domain) => (
                          <SelectItem key={domain.id} value={domain.id}>
                            {domain.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end space-x-4 pt-4">
              <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push('/dashboard/accounts/extensions')}
                  className="w-full sm:w-auto"
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
                  {isLoading ? 'Adding...' : 'Add Extension'}
                </Button>
              </div>
            </form>
            </Form>
        </CardContent>
      </Card>
     <Toaster />
    </div>
  )
}