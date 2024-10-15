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

const formSchema = z.object({
  // General
  extension: z.string().min(2).max(7),
  numberAlias: z.string().optional(),
  domain: z.string(),
  password: z.string().min(6),
  accountCode: z.string().optional(),
  enabled: z.boolean(),
  description: z.string().optional(),

  // Caller ID
  effectiveCallerIdName: z.string(),
  effectiveCallerIdNumber: z.string(),
  outboundCallerIdName: z.string(),
  outboundCallerIdNumber: z.string(),
  emergencyCallerIdName: z.string(),
  emergencyCallerIdNumber: z.string(),
  directoryFirstName: z.string(),
  directoryFamilyName: z.string(),
  directoryVisible: z.boolean(),
  directoryExtensionVisible: z.boolean(),

  // Call Routing
  forwardAll: z.string().optional(),
  forwardTo: z.string().optional(),
  forward1: z.string().optional(),
  forward2: z.string().optional(),
  forward5: z.string().optional(),
  forward6: z.string().optional(),

  // Additional
  limitMax: z.string().optional(),
  limitDestination: z.string().optional(),
  missedCall: z.string().optional(),
  tollAllow: z.string().optional(),
  callTimeout: z.string(),
  callGroup: z.string().optional(),
  callScreen: z.boolean(),
  record: z.enum(['local', 'inbound', 'outbound', 'all', 'none']),
  holdMusic: z.string().optional(),
  context: z.string().optional(),

  // Advanced
  authAcl: z.string().optional(),
  cidr: z.string().optional(),
  sipForceContact: z.string().optional(),
  sipForceExpires: z.string().optional(),
  mwiAccount: z.string().optional(),
  sipBypassMedia: z.string().optional(),
  absoluteCodecString: z.string().optional(),
  forcePing: z.string().optional(),
  dialString: z.string().optional(),
})

type Extension = {
  id: string;
  extension: string;
}

export default function ExtensionSettingsPage() {
  const params = useParams()
  const [extension, setExtension] = useState<string>(params.id as string)
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState('general')

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // Add default values here
      enabled: true,
      directoryVisible: true,
      directoryExtensionVisible: true,
      callScreen: false,
      record: 'none',
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
    <div className="container mx-auto py-10">
      <h1 className="text-sm font-semibold mb-6">{extension} - Extension Settings</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex">
            <nav className="w-64 pr-8">
              <ul className="space-y-2">
                {['General', 'Caller ID', 'Call Routing', 'Additional', 'Advanced'].map((tab) => (
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
                <Card className="h-[600px] overflow-auto">
                  <CardContent>
                    <Tabs value={activeTab} className="w-full text-gray-600">
                    <TabsContent value="general">
                      <div className="space-y-4">
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
                          name="numberAlias"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Number Alias</FormLabel>
                              <FormControl>
                               <Input {...field} className="col-span-3" />
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
                          name="accountCode"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Account Code</FormLabel>
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
                    <TabsContent value="callerid">
                      <div className="space-y-4">
                        <FormField
                          control={form.control}
                          name="effectiveCallerIdName"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Effective Caller ID Name</FormLabel>
                              <FormControl>
                                <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="effectiveCallerIdNumber"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="mb-2">Effective Caller ID Number</FormLabel>
                              <FormControl>
                                <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="outboundCallerIdName"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Outbound Caller ID Name</FormLabel>
                              <FormControl>
                                <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="outboundCallerIdNumber"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Outbound Caller ID Number</FormLabel>
                              <FormControl>
                                <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="emergencyCallerIdName"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Emergency Caller ID Name</FormLabel>
                              <FormControl>
                                <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="emergencyCallerIdNumber"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Emergency Caller ID Number</FormLabel>
                              <FormControl>
                                <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="directoryFirstName"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Directory First Name</FormLabel>
                              <FormControl>
                                <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="directoryFamilyName"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Directory Family Name</FormLabel>
                              <FormControl>
                                <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="directoryVisible"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Directory Visible</FormLabel>
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
                          name="directoryExtensionVisible"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Directory Extension Visible</FormLabel>
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
                    <TabsContent value="callrouting">
                      <div className="space-y-4">
                        <FormField
                          control={form.control}
                          name="forwardAll"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Forward All</FormLabel>
                              <FormControl>
                                <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="forwardTo"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Forward To</FormLabel>
                              <FormControl>
                                <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="forward1"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Forward 1</FormLabel>
                              <FormControl>
                                <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="forward2"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Forward 2</FormLabel>
                              <FormControl>
                                <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="forward5"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Forward 5</FormLabel>
                              <FormControl>
                                <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="forward6"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Forward 6</FormLabel>
                              <FormControl>
                                <Input {...field} className="col-span-3" />
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
                          name="limitMax"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Limit Max</FormLabel>
                              <FormControl>
                                <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="limitDestination"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Limit Destination</FormLabel>
                              <FormControl>
                                <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="missedCall"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Missed Call</FormLabel>
                              <FormControl>
                                <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="tollAllow"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Toll Allow</FormLabel>
                              <FormControl>
                                <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="callTimeout"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Call Timeout</FormLabel>
                              <FormControl>
                                <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="callGroup"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Call Group</FormLabel>
                              <FormControl>
                                <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="callScreen"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Call Screen</FormLabel>
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
                          name="record"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Record</FormLabel>
                              <FormControl>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select recording option" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="local">Local</SelectItem>
                                    <SelectItem value="inbound">Inbound</SelectItem>
                                    <SelectItem value="outbound">Outbound</SelectItem>
                                    <SelectItem value="all">All</SelectItem>
                                    <SelectItem value="none">None</SelectItem>
                                  </SelectContent>
                                </Select>
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="holdMusic"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Hold Music</FormLabel>
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
                      </div>
                    </TabsContent>
                    <TabsContent value="advanced">
                      <div className="space-y-4">
                        <FormField
                          control={form.control}
                          name="authAcl"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Auth ACL</FormLabel>
                              <FormControl>
                                <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="cidr"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">CIDR</FormLabel>
                              <FormControl>
                                <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="sipForceContact"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">SIP Force Contact</FormLabel>
                              <FormControl>
                                <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="sipForceExpires"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">SIP Force Expires</FormLabel>
                              <FormControl>
                                <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="mwiAccount"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">MWI Account</FormLabel>
                              <FormControl>
                                <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="sipBypassMedia"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">SIP Bypass Media</FormLabel>
                              <FormControl>
                                <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="absoluteCodecString"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Absolute Codec String</FormLabel>
                              <FormControl>
                                <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="forcePing"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Force Ping</FormLabel>
                              <FormControl>
                                <Input {...field} className="col-span-3" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="dialString"
                          render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="">Dial String</FormLabel>
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
                </Card>
              </div>
            </div>
          <div className="flex justify-end space-x-4 pt-6">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Saving...' : 'Save Changes'}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}