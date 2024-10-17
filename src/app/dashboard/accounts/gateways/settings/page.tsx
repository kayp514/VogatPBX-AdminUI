'use client'

import { useState, useEffect } from 'react'
import { useParams } from "next/navigation"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { toast } from '@/hooks/use-toast'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import MediaCodecTable from '@/app/ui/media-codec-options'

const formSchema = z.object({
  // General
  gateway: z.string().min(2).max(7),
  username: z.string().optional(),
  domain: z.string(),
  password: z.string().min(6),
  fromuser: z.string().optional(),
  fromdomain: z.string().optional(),
  description: z.string().optional(),

  // Additional
  proxy: z.string().optional(),
  realm: z.string().optional(),
  expseconds: z.string().optional(),
  retryseconds: z.string(),
  register: z.boolean(),
  context: z.string().optional(),
  profile: z.string().optional(),
  enabled: z.boolean(),

  // Advanced
  distinct: z.enum(['True', 'False']),
  authUser: z.string().optional(),
  extension: z.string().optional(),
  registerTransport: z.enum(['udp', 'tcp', 'tls']),
  registerProxy: z.string().optional(),
  outboundProxy: z.string().optional(),
  callerIdFrom: z.enum(['True', 'False']),
  supressCNG: z.enum(['True', 'False']),
  sipCIDType: z.string().optional(),
  codecPreference: z.string().optional(),
  extensionInContact: z.enum(['True', 'False']),
  ping: z.string().optional(),
  channels: z.string().optional(),
  hostname: z.string().optional(),
})

type Extension = {
  id: string;
  extension: string;
}

export default function GatewaySettingsPage() {
  const params = useParams()
  const [extension, setExtension] = useState<string>(params.id as string)
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState('general')

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // Add default values here
      enabled: true,
    },
  })

  useEffect(() => {
    async function fetchExtensionName() {
      setIsLoading(true)
      try {
        const response = await fetch('/api/extensions')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const extensions: Extension[] = await response.json()
        const currentExtension = extensions.find(ext => ext.id === params.id)
        if (currentExtension) {
          setExtension(currentExtension.extension)
        }
      } catch (error) {
        console.error('Error fetching extensions:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchExtensionName()
  }, [params.id])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    try {
      // Implement your API call here
      console.log(values)
      toast({
        title: 'Extension settings updated successfully',
        description: 'The extension settings have been updated in the system.',
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update extension settings. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-sm font-semibold mb-6">lifesprint.com - Gateway Settings</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex">
            <nav className="w-64 pr-8">
              <ul className="space-y-2">
                {['General', 'Additional', 'MediaCodecOptions', 'Advanced'].map((tab) => (
                  <li key={tab}>
                    <button
                      className={`w-full text-left py-2 px-4 rounded-md transition-colors ${
                        activeTab === tab.toLowerCase().replace(' ', '')
                          ? 'bg-blue-100 text-blue-600 font-medium'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                      onClick={() => setActiveTab(tab.toLowerCase().replace(' ', ''))}
                    >
                      {tab}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
              <div className="flex-1">
                
                <Card className="h-[600px]">
                <ScrollArea className='h-[600px]'>
                  <CardContent>
                    <Tabs value={activeTab} className="w-full text-gray-600">
                    <TabsContent value="general">
                      <div className="space-y-4">
                        <FormField
                          control={form.control}
                          name="gateway"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Gateway</FormLabel>
                              <FormControl>
                               <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="username"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Username</FormLabel>
                              <FormControl>
                               <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="password"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Password</FormLabel>
                              <FormControl>
                                <Input type="password" {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="domain"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Domain</FormLabel>
                              <FormControl>
                              <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="fromuser"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">From User</FormLabel>
                              <FormControl>
                              <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                                                <FormField
                          control={form.control}
                          name="fromdomain"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">From Domain</FormLabel>
                              <FormControl>
                              <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="description"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Description</FormLabel>
                              <FormControl>
                                <Textarea {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                    </TabsContent>
                    <TabsContent value="additional">
                      <div className="space-y-4">
                        <FormField
                          control={form.control}
                          name="proxy"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Proxy</FormLabel>
                              <FormControl>
                                <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="realm"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Realm</FormLabel>
                              <FormControl>
                                <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="expseconds"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Expire Seconds</FormLabel>
                              <FormControl>
                                <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                                                <FormField
                          control={form.control}
                          name="register"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Register</FormLabel>
                              <FormControl>
                                <Switch
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="retryseconds"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Retry Seconds</FormLabel>
                              <FormControl>
                                <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="context"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Context</FormLabel>
                              <FormControl>
                                <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="profile"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Profile</FormLabel>
                              <FormControl>
                                <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                                                <FormField
                          control={form.control}
                          name="enabled"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Enabled</FormLabel>
                              <FormControl>
                                <Switch
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                    </TabsContent>
                    <TabsContent value="mediacodecoptions">
                     <div className="space-y-4">
                      <MediaCodecTable />
                       </div>
                    </TabsContent>
                    <TabsContent value="advanced">
                      <div className="space-y-4">
                      <FormField
                          control={form.control}
                          name="distinct"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Distinct To</FormLabel>
                              <FormControl>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select recording option" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="true">True</SelectItem>
                                    <SelectItem value="false">False</SelectItem>
                                  </SelectContent>
                                </Select>
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="authUser"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Auth Username</FormLabel>
                              <FormControl>
                                <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="extension"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Extension</FormLabel>
                              <FormControl>
                                <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="registerTransport"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Register Transport</FormLabel>
                              <FormControl>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select recording option" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="udp">udp</SelectItem>
                                    <SelectItem value="tcp">tcp</SelectItem>
                                    <SelectItem value="tls">tls</SelectItem>
                                  </SelectContent>
                                </Select>
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="registerProxy"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Register Proxy</FormLabel>
                              <FormControl>
                                <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="outboundProxy"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Outbound Proxy</FormLabel>
                              <FormControl>
                                <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="callerIdFrom"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Caller ID In From</FormLabel>
                              <FormControl>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select recording option" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="true">True</SelectItem>
                                    <SelectItem value="false">False</SelectItem>
                                  </SelectContent>
                                </Select>
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="supressCNG"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Supress CNG</FormLabel>
                              <FormControl>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select recording option" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="true">True</SelectItem>
                                    <SelectItem value="false">False</SelectItem>
                                  </SelectContent>
                                </Select>
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="sipCIDType"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">SIP CID Type</FormLabel>
                              <FormControl>
                                <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="extensionInContact"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Extension In Contact</FormLabel>
                              <FormControl>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select recording option" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="true">True</SelectItem>
                                    <SelectItem value="false">False</SelectItem>
                                  </SelectContent>
                                </Select>
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="ping"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Ping</FormLabel>
                              <FormControl>
                                <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="channels"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Channels</FormLabel>
                              <FormControl>
                                <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="hostname"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Hostname</FormLabel>
                              <FormControl>
                                <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                    </TabsContent>
                    </Tabs>
                  </CardContent>
                  </ScrollArea>
                </Card>
              </div>
            </div>
        </form>
      </Form>
    </div>
  )
}