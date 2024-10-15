'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PhoneIcon, LockIcon, GlobeIcon } from 'lucide-react'

const formSchema = z.object({
  extension: z.string().min(2, { message: 'Extension must be at least 2 characters' }).max(7, { message: 'Extension must be at most 7 characters' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
  domain: z.string().min(1, { message: 'Domain is required' }),
})

export default function AddExtensionPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      extension: '',
      password: '',
      domain: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    try {
      // Implement your API call here
      console.log(values)
      toast({
        title: 'Extension added successfully',
        description: 'The new extension has been added to the system.',
      })
      router.push('/dashboard/accounts/extensions')
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="extension"
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
                name="domain"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center space-x-2">
                      <GlobeIcon className="w-4 h-4" />
                      <span>Domain</span>
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="text-lg">
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="domain1.com">domain1.com</SelectItem>
                        <SelectItem value="domain2.com">domain2.com</SelectItem>
                        <SelectItem value="domain3.com">domain3.com</SelectItem>
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
    </div>
  )
}