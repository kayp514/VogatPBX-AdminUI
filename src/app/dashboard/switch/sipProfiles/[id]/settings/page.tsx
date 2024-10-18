'use client'

import { useState, useEffect, useRef } from "react"
import { useParams } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Trash2, Plus, Save, RotateCcw } from "lucide-react"
import { cn } from "@/lib/utils"
import { SipDomainSkeleton, SipSettingSkeleton } from "@/app/ui/skeleton"
import { Skeleton } from "@/components/ui/skeleton"

type Setting = {
  id: string
  name: string
  value: string
  enabled: boolean
  description: string
  created: string
  updated: string
  synchronised: string | null
  updated_by: string
  sip_profile_id: string
}

type Domain = {
  id: string
  name: string
  alias: boolean
  parse: boolean
  created: string
  updated: string
  synchronised: string | null
  updated_by: string
  sip_profile_id: string
}

type ProfileData = {
  id: string
  name: string
  hostname: string | null
  enabled: string
  description: string
  created: string
  updated: string
  synchronised: string | null
  updated_by: string
  domains: Domain[]
  settings: Setting[]
}

const SaveButton = ({ onClick }: { onClick: () => void }) => (
  <Button onClick={onClick} size="sm">
    <Save className="mr-2 h-4 w-4" />
    Save
  </Button>
)

const EditableInput = ({ value, onChange, onSave, onReset, className, ...props }: {
  value: string
  onChange: (value: string) => void
  onSave: () => void
  onReset: () => void
  className?: string
  [key: string]: any
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(value)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isEditing && inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setIsEditing(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isEditing])

  const handleSave = () => {
    onChange(editValue)
    onSave()
    setIsEditing(false)
  }

  const handleReset = () => {
    setEditValue(value)
    onReset()
    setIsEditing(false)
  }

  return (
    <div className="relative group w-full">
      {isEditing ? (
        <div className="flex items-center w-full">
          <Input
            ref={inputRef}
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className={cn(
              "text-sm h-7 transition-all duration-100 ease-in-out pr-16",
              "focus:border focus:ring-2 focus:ring-ring focus:ring-offset-2",
              "border-transparent bg-transparent",
              className
            )}
            {...props}
          />
          <div className="absolute right-0 top-0 h-full flex items-center space-x-1 px-1 bg-background">
            <Button size="icon" variant="ghost" onClick={handleSave} className="h-5 w-5">
              <Save className="h-3 w-3" />
            </Button>
            <Button size="icon" variant="ghost" onClick={handleReset} className="h-5 w-5">
              <RotateCcw className="h-3 w-3" />
            </Button>
          </div>
        </div>
      ) : (
        <div
          className={cn(
            "text-sm h-7 px-3 py-1 cursor-text w-full overflow-hidden text-ellipsis whitespace-nowrap",
            "hover:bg-accent hover:text-accent-foreground",
            className
          )}
          onClick={() => setIsEditing(true)}
        >
          {value}
        </div>
      )}
    </div>
  )
}

export default function SipProfileSettingsPage() {
  const params = useParams()
  const profileId = params.id as string

  const [profileData, setProfileData] = useState<ProfileData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProfileData = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const [profileResponse, settingsResponse] = await Promise.all([
          fetch(`/api/sipProfiles/${profileId}`),
          fetch(`/api/sipProfiles/${profileId}/settings`)
        ])

        if (!profileResponse.ok || !settingsResponse.ok) {
          throw new Error('Failed to fetch profile data')
        }

        const profileData = await profileResponse.json()
        const settingsData = await settingsResponse.json()

        setProfileData({
          ...profileData,
          settings: settingsData
        })
      } catch (error) {
        console.error('Error fetching profile data:', error)
        setError('Failed to load profile data. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchProfileData()
  }, [profileId])

  const handleProfileChange = (field: keyof ProfileData, value: string) => {
    setProfileData(prev => prev ? { ...prev, [field]: value } : null)
  }

  const handleDomainChange = (index: number, field: keyof Domain, value: string | boolean) => {
    setProfileData(prev => {
      if (!prev) return null
      const newDomains = [...prev.domains]
      newDomains[index] = { ...newDomains[index], [field]: value }
      return { ...prev, domains: newDomains }
    })
  }

  const addDomain = () => {
    setProfileData(prev => {
      if (!prev) return null
      const newDomain: Domain = {
        id: Date.now().toString(), // Temporary ID
        name: "",
        alias: false,
        parse: false,
        created: new Date().toISOString(),
        updated: new Date().toISOString(),
        synchronised: null,
        updated_by: "user",
        sip_profile_id: profileId
      }
      return { ...prev, domains: [...prev.domains, newDomain] }
    })
  }

  const deleteDomain = (index: number) => {
    setProfileData(prev => {
      if (!prev) return null
      return { ...prev, domains: prev.domains.filter((_, i) => i !== index) }
    })
  }

  const handleSettingChange = (index: number, field: keyof Setting, value: string | boolean) => {
    setProfileData(prev => {
      if (!prev) return null
      const newSettings = [...prev.settings]
      newSettings[index] = { ...newSettings[index], [field]: value }
      return { ...prev, settings: newSettings }
    })
  }

  const addNewRow = () => {
    setProfileData(prev => {
      if (!prev) return null
      const newSetting: Setting = {
        id: Date.now().toString(), // Temporary ID
        name: "",
        value: "",
        enabled: true,
        description: "",
        created: new Date().toISOString(),
        updated: new Date().toISOString(),
        synchronised: null,
        updated_by: "user",
        sip_profile_id: profileId
      }
      return { ...prev, settings: [...prev.settings, newSetting] }
    })
  }

  const deleteRow = (index: number) => {
    setProfileData(prev => {
      if (!prev) return null
      return { ...prev, settings: prev.settings.filter((_, i) => i !== index) }
    })
  }

  const handleSave = async () => {
    if (!profileData) return

    try {
      const response = await fetch(`/api/sipProfiles/${profileId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileData),
      })

      if (!response.ok) {
        throw new Error('Failed to save profile data')
      }

      console.log('Profile saved successfully')
      // Handle successful save (e.g., show success message to user)
    } catch (error) {
      console.error('Error saving profile data:', error)
      // Handle error (e.g., show error message to user)
    }
  }

  return (
    <div className="container mx-auto py-6">
      <div className="mb-6 flex justify-between items-center">
      <h1 className="text-2xl font-semibold">{isLoading ? <Skeleton className="h-8 w-48" /> : `${profileData?.name || 'Unknown'} Profile`}</h1>
        <div className="space-x-2">
          <SaveButton onClick={handleSave} />
        </div>
      </div>
      <Card className="overflow-hidden">
        <ScrollArea className="h-[calc(100vh-200px)] max-h-[800px]">
        <CardContent className="p-4">
            {isLoading ? (
              <>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center">
                    <Label htmlFor="name" className="w-24 text-sm font-medium">Name</Label>
                    <Skeleton className="h-7 w-full" />
                  </div>
                  <div className="flex items-center">
                    <Label htmlFor="description" className="w-24 text-sm font-medium">Description</Label>
                    <Skeleton className="h-7 w-full" />
                  </div>
                </div>
              </>
            ) : error ? (
              <div className="text-red-500">{error}</div>
            ) : profileData ? (
            <div className="space-y-3 mb-4">
              <div className="flex items-center">
                <Label htmlFor="name" className="w-24 text-sm font-medium">Name</Label>
                <EditableInput
                  id="name"
                  value={profileData.name}
                  onChange={(value) => handleProfileChange('name', value)}
                  onSave={() => console.log("Saved name")}
                  onReset={() => console.log("Reset name")}
                  className="flex-grow"
                />
              </div>
              <div className="flex items-center">
                <Label htmlFor="description" className="w-24 text-sm font-medium">Description</Label>
                <EditableInput
                  id="description"
                  value={profileData.description}
                  onChange={(value) => handleProfileChange('description', value)}
                  onSave={() => console.log("Saved description")}
                  onReset={() => console.log("Reset description")}
                  className="flex-grow"
                />
              </div>
            </div>
            ) : null}

            <Separator className="my-4" />

            <h2 className="text-lg font-semibold mb-2">Domains</h2>
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="text-xs font-medium">Name</TableHead>
                  <TableHead className="text-xs font-medium">Alias</TableHead>
                  <TableHead className="text-xs font-medium">Parse</TableHead>
                  <TableHead className="w-[60px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                    <>
                    <SipDomainSkeleton />
                    <SipDomainSkeleton />
                    </>
                ) : error ? (
                    <TableRow>
                        <TableCell colSpan={4} className="text-center text-red-500">{error}</TableCell>
                    </TableRow>
                ) :
                profileData?.domains.map((domain, index) => (
                  <TableRow key={domain.id} className="hover:bg-muted/50">
                    <TableCell className="py-2 w-1/4">
                      <EditableInput
                        value={domain.name}
                        onChange={(value) => handleDomainChange(index, 'name', value)}
                        onSave={() => console.log(`Saved domain ${index}`)}
                        onReset={() => console.log(`Reset domain ${index}`)}
                        aria-label={`Domain name ${index + 1}`}
                      />
                    </TableCell>
                    <TableCell className="py-2">
                      <Switch
                        checked={domain.alias}
                        onCheckedChange={(checked) => handleDomainChange(index, 'alias', checked)}
                        aria-label={`Toggle alias for domain ${index + 1}`}
                      />
                    </TableCell>
                    <TableCell className="py-2">
                      <Switch
                        checked={domain.parse}
                        onCheckedChange={(checked) => handleDomainChange(index, 'parse', checked)}
                        aria-label={`Toggle parse for domain ${index + 1}`}
                      />
                    </TableCell>
                    <TableCell className="py-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deleteDomain(index)}
                        aria-label={`Delete domain ${index + 1}`}
                        className="h-7 w-7"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Button 
              onClick={addDomain} 
              className="w-full mt-2 text-sm h-8"
              variant="outline"
            >
              <Plus className="mr-2 h-3 w-3" /> Add New Domain
            </Button>

            <Separator className="my-4" />

            <h2 className="text-lg font-semibold mb-2">Settings</h2>
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="text-xs font-medium">Name</TableHead>
                  <TableHead className="text-xs font-medium">Value</TableHead>
                  <TableHead className="text-xs font-medium">Enabled</TableHead>
                  <TableHead className="text-xs font-medium">Description</TableHead>
                  <TableHead className="w-[60px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                    <>
                    <SipSettingSkeleton />
                    <SipSettingSkeleton />
                    <SipSettingSkeleton />
                    <SipSettingSkeleton />
                    </>
                ) : error ? (
                    <TableRow>
                    <TableCell colSpan={5} className="text-center text-red-500">{error}</TableCell>
                  </TableRow>
                ) :
                profileData?.settings.map((setting, index) => (
                  <TableRow key={setting.id} className="hover:bg-muted/50">
                    <TableCell className="py-2 w-1/4">
                      <EditableInput
                        value={setting.name}
                        onChange={(value) => handleSettingChange(index, 'name', value)}
                        onSave={() => console.log(`Saved setting name ${index}`)}
                        onReset={() => console.log(`Reset setting name ${index}`)}
                        aria-label={`Name for setting ${index + 1}`}
                      />
                    </TableCell>
                    <TableCell className="py-2">
                      <EditableInput
                        value={setting.value}
                        onChange={(value) => handleSettingChange(index, 'value', value)}
                        onSave={() => console.log(`Saved setting value ${index}`)}
                        onReset={() => console.log(`Reset setting value ${index}`)}
                        aria-label={`Value for setting ${index + 1}`}
                      />
                    </TableCell>
                    <TableCell className="py-2">
                      <Switch
                        checked={setting.enabled}
                        onCheckedChange={(checked) => handleSettingChange(index, 'enabled', checked)}
                        aria-label={`Toggle setting ${index + 1}`}
                      />
                    </TableCell>
                    <TableCell className="py-2">
                      <EditableInput
                        value={setting.description}
                        onChange={(value) => handleSettingChange(index, 'description', value)}
                        onSave={() => console.log(`Saved setting description ${index}`)}
                        onReset={() => console.log(`Reset setting description ${index}`)}
                        aria-label={`Description for setting ${index + 1}`}
                      />
                    </TableCell>
                    <TableCell className="py-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deleteRow(index)}
                        aria-label={`Delete setting ${index + 1}`}
                        className="h-7 w-7"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Button 
              onClick={addNewRow} 
              className="w-full mt-2 text-sm h-8"
              variant="outline"
            >
              <Plus className="mr-2 h-3 w-3" /> Add New Row
            </Button>
          </CardContent>
        </ScrollArea>
      </Card>
    </div>
  )
}