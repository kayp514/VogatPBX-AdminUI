'use client'

import { useState, useEffect, useRef } from 'react'
import { useParams } from "next/navigation"
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { VariablesPageSkeleton } from '@/app/ui/skeleton'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from "@/lib/utils"
import { Save, RotateCcw } from "lucide-react"
import { Label } from "@/components/ui/label"


type ExtensionData = {
  id: string;
  extension: string;
  number_alias: string | null;
  password: string;
  accountcode: string | null;
  effective_caller_id_name: string,
  effective_caller_id_number: string,
  outbound_caller_id_name: string,
  outbound_caller_id_number: string,
  emergency_caller_id_name: string,
  emergency_caller_id_number: string,
  directory_first_name: string,
  directory_last_name: string,
  directory_visible: string,
  directory_exten_visible: string,
  limit_max: string,
  limit_destination: string,
  missed_call_app: string | null,
  missed_call_data: string | null,
  user_context: string,
  toll_allow: string | null,
  call_timeout: string,
  call_group: string | null,
  call_screen_enabled: string,
  user_record: string | null,
  hold_music: string | null,
  auth_acl: string | null,
  cidr: string | null,
  sip_force_contact: string | null,
  nibble_account: string | null,
  sip_force_expires: string | null,
  mwi_account: string | null,
  sip_bypass_media: string | null,
  unique_id: string | null,
  dial_string: string,
  dial_user: string | null,
  dial_domain: string | null,
  do_not_disturb: string,
  forward_all_destination: string | null,
  forward_all_enabled: string,
  forward_busy_destination: string | null,
  forward_busy_enabled: string,
  forward_no_answer_destination: string | null,
  forward_no_answer_enabled: string,
  forward_user_not_registered_destination: string | null,
  forward_user_not_registered_enabled: string,
  follow_me_uuid: string | null,
  forward_caller_id: string | null,
  follow_me_enabled: string,
  follow_me_destinations: string | null,
  enabled: string,
  description: string | null,
  absolute_codec_string: string | null,
  force_ping: string,
  created: string,
  updated: string,
  synchronised: string | null,
  updated_by: string,
  domain_uuid: string
}

const EditableInput = ({ value, onChange, onSave, onReset, className, ...props }: {
  value: string
  onChange: (value: string) => void
  onSave: () => void
  onReset: () => void
  className?: string
  [key: string]: any
}) => {
  const [isActive, setIsActive] = useState(false)
  const [editValue, setEditValue] = useState(value)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setIsActive(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleSave = () => {
    onChange(editValue)
    onSave()
  }

  const handleReset = () => {
    setEditValue(value)
    onReset()
  }

  return (
    <div className="relative group w-full">
      <Input
        ref={inputRef}
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
        onFocus={() => setIsActive(true)}
        className={cn(
          "text-sm h-9 transition-all duration-100 ease-in-out",
          "border-input",
          "bg-background",
          isActive ? "pr-16" : "",
          className
        )}
        {...props}
      />
      {isActive && (
        <div className="absolute right-0 top-0 h-full flex items-center space-x-1 px-1 bg-background">
          <Button size="icon" variant="ghost" onClick={handleSave} className="h-7 w-7">
            <Save className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="ghost" onClick={handleReset} className="h-7 w-7">
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}

export default function ExtensionSettingsPage() {
  const params = useParams()
  const extensionId = params.id as string

  const [extensionData, setExtensionData] = useState<ExtensionData | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState('general')

  const inputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({})

  useEffect(() => {
    const fetchProfileData = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const [extensionResponse] = await Promise.all([
          fetch(`/api/v1/extensions/${extensionId}/settings`)
        ])

        if (!extensionResponse.ok) {
          throw new Error('Failed to fetch profile data')
        }

        const extensionData = await extensionResponse.json()

        setExtensionData({
          ...extensionData,
        })
      } catch (error) {
        console.error('Error fetching Extension data:', error)
        setError('Failed to load Extension data. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchProfileData()
  }, [extensionId])

  const handleExtensionChange = (field: keyof ExtensionData, value: string) => {
    setExtensionData(prev => prev ? { ...prev, [field]: value } : null)
  }

  const handleSave = async (field: keyof ExtensionData) => {
    if (!extensionData) return
    try {
      const response = await fetch(`/api/extensions/${extensionId}/settings`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ [field]: extensionData[field] }),
      })
      if (!response.ok) throw new Error('Failed to update setting')
      console.log(`${field} updated successfully`)
    } catch (error) {
      console.error(`Error updating ${field}:`, error)
    }
  }


  const handleReset = (field: keyof ExtensionData) => {
    if (extensionData) {
      setExtensionData({ ...extensionData, [field]: '' })
      if (inputRefs.current[field]) {
        inputRefs.current[field]!.value = ''
      }
    }
  }


  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-semibold mb-6">
        {isLoading ? <Skeleton className="h-8 w-48" /> : `${extensionData?.extension}@${extensionData?.user_context || 'Unknown'} Extension Settings`}
      </h1>
      <div className="flex space-x-6">
        <nav className="w-48">
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
          <Card>
            <ScrollArea className="h-[500px]">
              <CardContent className="p-6">
                <Tabs value={activeTab} className="w-full text-gray-600">
                  <TabsContent value="general">
                    <div className="space-y-4">
                      {[
                        { name: "extension", label: "Extension" },
                        { name: "number_alias", label: "Number Alias" },
                        { name: "user_context", label: "Domain" },
                        { name: "password", label: "Password", type: "password" },
                        { name: "accountCode", label: "Account Code" },
                      ].map(({ name, label, type }) => (
                        <div key={name} className="grid grid-cols-4 items-center gap-4">
                          <Label className="">{label}</Label>
                          <div className="col-span-3">
                            <EditableInput
                              value={extensionData?.[name as keyof ExtensionData] as string || ''}
                              onChange={(value) => handleExtensionChange(name as keyof ExtensionData, value)}
                              onSave={() => handleSave(name as keyof ExtensionData)}
                              onReset={() => handleReset(name as keyof ExtensionData)}
                              type={type}
                            />
                          </div>
                        </div>
                      ))}
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="">Enabled</Label>
                        <div className="col-span-3">
                          <Switch
                            checked={extensionData?.enabled === 'true'}
                            onCheckedChange={(checked) => handleExtensionChange('enabled', checked ? 'true' : 'false')}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-4 items-start gap-4">
                        <Label className="">Description</Label>
                        <div className="col-span-3">
                          <Textarea
                            value={extensionData?.description || ''}
                            onChange={(e) => handleExtensionChange('description', e.target.value)}
                            rows={3}
                          />
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="callerid">
                    <div className="space-y-4">
                      {[
                        { name: "effective_caller_id_name", label: "Effective Caller ID Name" },
                        { name: "effective_caller_id_number", label: "Effective Caller ID Number" },
                        { name: "outbound_caller_id_name", label: "Outbound Caller ID Name" },
                        { name: "outbound_caller_id_number", label: "Outbound Caller ID Number" },
                        { name: "emergency_caller_id_name", label: "Emergency Caller ID Name" },
                        { name: "emergency_caller_id_number", label: "Emergency Caller ID Number" },
                        { name: "directory_first_name", label: "Directory First Name" },
                        { name: "directory_last_name", label: "Directory Family Name" },
                      ].map(({ name, label }) => (
                        <div key={name} className="grid grid-cols-4 items-center gap-4">
                          <Label className="">{label}</Label>
                          <div className="col-span-3">
                            <EditableInput
                              value={extensionData?.[name as keyof ExtensionData] as string || ''}
                              onChange={(value) => handleExtensionChange(name as keyof ExtensionData, value)}
                              onSave={() => handleSave(name as keyof ExtensionData)}
                              onReset={() => handleReset(name as keyof ExtensionData)}
                            />
                          </div>
                        </div>
                      ))}
                      {[
                        { name: "directory_visible", label: "Directory Visible" },
                        { name: "directory_exten_visible", label: "Directory Extension Visible" },
                      ].map(({ name, label }) => (
                        <div key={name} className="grid grid-cols-4 items-center gap-4">
                          <Label className="">{label}</Label>
                          <div className="col-span-3">
                            <Switch
                              checked={extensionData?.enabled === 'true'}
                              onCheckedChange={(checked) => handleExtensionChange('enabled', checked ? 'true' : 'false')}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="callrouting">
                    <div className="space-y-4">
                    {[
                        { enabled: "forward_all_enabled", destination: "forward_all_destination", label: "Forward All" },
                        { enabled: "forward_busy_enabled", destination: "forward_busy_destination", label: "Forward Busy" },
                        { enabled: "forward_no_answer_enabled", destination: "forward_no_answer_destination", label: "Forward No Answer" },
                        { enabled: "forward_user_not_registered_enabled", destination: "forward_user_not_registered_destination", label: "Forward Not Registered" },
                      ].map(({ enabled, destination, label }) => (
                        <div key={enabled} className="grid grid-cols-4 items-center gap-4">
                          <Label className="">{label}</Label>
                          <div className="col-span-2">
                            <Switch
                              checked={extensionData?.[enabled as keyof ExtensionData] === 'true'}
                              onCheckedChange={(checked) => handleExtensionChange(enabled as keyof ExtensionData, checked ? 'true' : 'false')}
                            />
                          </div>
                          <div className="">
                            <EditableInput
                              value={extensionData?.[destination as keyof ExtensionData] as string || ''}
                              onChange={(value) => handleExtensionChange(destination as keyof ExtensionData, value)}
                              onSave={() => handleSave(destination as keyof ExtensionData)}
                              onReset={() => handleReset(destination as keyof ExtensionData)}
                              placeholder="Destination"
                            />
                          </div>
                        </div>
                      ))}
                      {[
                        { enabled: "follow_me_enabled", label: "Follow Me" },
                        { enabled: "do_not_disturb", label: "Do Not Disturb" },
                      ].map(({ enabled, label }) => (
                        <div key={enabled} className="grid grid-cols-4 items-center gap-4">
                        <Label className="">{label}</Label>
                        <div className="col-span-3">
                          <Switch
                            checked={extensionData?.[enabled as keyof ExtensionData] === 'true'}
                            onCheckedChange={(checked) => handleExtensionChange(enabled as keyof ExtensionData, checked ? 'true' : 'false')}
                          />
                        </div>
                      </div>
                    ))}
                        <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="">Caller ID Number</Label>
                        <div className="col-span-2">
                          <EditableInput
                            value={extensionData?.forward_caller_id as string || ''}
                            onChange={(value) => handleExtensionChange('forward_caller_id', value)}
                            onSave={() => handleSave('forward_caller_id')}
                            onReset={() => handleReset('forward_caller_id')}
                          />
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="additional">
                    <div className="space-y-4">
                      {[
                        { name: "limit_max", label: "Limit Max" },
                        { name: "limit_destination", label: "Limit Destination" },
                        { name: "missed_call_app", label: "Missed Call" },
                        { name: "toll_allow", label: "Toll Allow" },
                        { name: "call_timeout", label: "Call Timeout" },
                        { name: "call_group", label: "Call Group" },
                        { name: "hold_music", label: "Hold Music" },
                        { name: "user_context", label: "Context" },
                      ].map(({ name, label }) => (
                        <div key={name} className="grid grid-cols-4 items-center gap-4">
                          <Label className="">{label}</Label>
                          <div className="col-span-3">
                            <EditableInput
                              value={extensionData?.[name as keyof ExtensionData] as string || ''}
                              onChange={(value) => handleExtensionChange(name as keyof ExtensionData, value)}
                              onSave={() => handleSave(name as keyof ExtensionData)}
                              onReset={() => handleReset(name as keyof ExtensionData)}
                            />
                          </div>
                        </div>
                      ))}
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="">Call Screen</Label>
                        <div className="col-span-3">
                          <Switch
                            checked={extensionData?.enabled === 'true'}
                            onCheckedChange={(checked) => handleExtensionChange('call_screen_enabled', checked ? 'true' : 'false')}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label  className="">Record</Label>
                        <div className="col-span-3">
                          <Select
                            value={extensionData?.user_record as string}
                            onValueChange={(value) => handleExtensionChange('user_record', value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="disabled">Disabled</SelectItem>
                              <SelectItem value="local">Local</SelectItem>
                              <SelectItem value="inbound">Inbound</SelectItem>
                              <SelectItem value="outbound">Outbound</SelectItem>
                              <SelectItem value="all">All</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="advanced">
                    <div className="space-y-4">
                      {[
                        { name: "auth_acl", label: "Auth ACL" },
                        { name: "cidr", label: "CIDR" },
                        { name: "sip_force_expires", label: "SIP Force Expires" },
                        { name: "mwi_account", label: "MWI Account" },
                        { name: "absolute_codec_string", label: "Absolute Codec String" },
                        { name: "dial_string", label: "Dial String" },
                      ].map(({ name, label }) => (
                        <div key={name} className="grid grid-cols-4 items-center gap-4">
                          <Label className="">{label}</Label>
                          <div className="col-span-3">
                            <EditableInput
                              value={extensionData?.[name as keyof ExtensionData] as string || ''}
                              onChange={(value) => handleExtensionChange(name as keyof ExtensionData, value)}
                              onSave={() => handleSave(name as keyof ExtensionData)}
                              onReset={() => handleReset(name as keyof ExtensionData)}
                            />
                          </div>
                        </div>
                      ))}
                    
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="">SIP Force Contact</Label>
                        <div className="col-span-3">
                          <Select
                            value={extensionData?.sip_force_contact || ''}
                            onValueChange={(value) => handleExtensionChange('sip_force_contact', value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value=" "></SelectItem>
                              <SelectItem value="REWRITE_CONTACT_IP_AND_PORT">Rewrite Contact IP and Port</SelectItem>
                              <SelectItem value="REWRITE_CONTACT_IP_AND_PORT_2">Rewrite Contact IP and Port 2.0</SelectItem>
                              <SelectItem value="REWRITE_TLS_CONTACT_PORT">Rewrite TLS Contact Port</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="">SIP Bypass Media</Label>
                        <div className="col-span-3">
                          <Select
                            value={extensionData?.sip_bypass_media || ''}
                            onValueChange={(value) => handleExtensionChange('sip_bypass_media', value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value=" "></SelectItem>
                              <SelectItem value="bypass-media">Bypass Media</SelectItem>
                              <SelectItem value="bypass-media-after-bridge">Bypass Media After Bridge</SelectItem>
                              <SelectItem value="proxy-media">Proxy Media</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="">Force Ping</Label>
                        <div className="col-span-3">
                          <Switch
                            checked={extensionData?.force_ping === 'true'}
                            onCheckedChange={(checked) => handleExtensionChange('force_ping', checked ? 'true' : 'false')}
                          />
                        </div>
                      </div>
                      </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </ScrollArea>
          </Card>
        </div>
      </div>
    </div>
  )
}