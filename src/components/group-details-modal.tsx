"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { PlusCircle, MinusCircle } from 'lucide-react'

type PermissionType = 'read' | 'write' | 'delete'

type Permission = {
  id: string;
  type: PermissionType;
  service: string;
  subService: string;
  description: string;
}

type GroupDetailsModalProps = {
  groupName: string;
}

const mockPermissions: Permission[] = [
  { id: "1", type: "read", service: "Accounts", subService: "Users", description: "Can view user information" },
  { id: "2", type: "write", service: "Accounts", subService: "Users", description: "Can modify user information" },
  { id: "3", type: "delete", service: "Accounts", subService: "Users", description: "Can delete users" },
  { id: "4", type: "read", service: "Accounts", subService: "Bridge", description: "Can view bridge information" },
  { id: "5", type: "write", service: "Accounts", subService: "Bridge", description: "Can modify bridge settings" },
  { id: "6", type: "read", service: "Authorization", subService: "Groups", description: "Can view group information" },
  { id: "7", type: "write", service: "Authorization", subService: "Groups", description: "Can modify group settings" },
  { id: "8", type: "delete", service: "Authorization", subService: "Groups", description: "Can delete groups" },
]

export function GroupDetailsModal({ groupName }: GroupDetailsModalProps) {
  const [grantedPermissions, setGrantedPermissions] = useState<string[]>([])

  const togglePermission = (id: string) => {
    setGrantedPermissions(prev =>
      prev.includes(id) ? prev.filter(permId => permId !== id) : [...prev, id]
    )
  }

  const groupedPermissions = mockPermissions.reduce((acc, permission) => {
    if (!acc[permission.service]) {
      acc[permission.service] = []
    }
    acc[permission.service].push(permission)
    return acc
  }, {} as Record<string, Permission[]>)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">View</Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>{groupName} - Permissions</DialogTitle>
        </DialogHeader>
        <div className="flex flex-1 mt-4 overflow-hidden">
          <div className="w-1/2 pr-4 border-r">
            <h3 className="mb-4 font-medium">Available Permissions</h3>
            <ScrollArea className="h-full pr-4">
              <Accordion type="multiple" className="w-full">
                {Object.entries(groupedPermissions).map(([service, permissions]) => (
                  <AccordionItem value={service} key={service}>
                    <AccordionTrigger className="text-lg font-semibold">{service}</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {permissions.map((permission) => (
                          <div key={permission.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                            <div className="flex-1">
                              <p className="text-sm font-medium">
                                <span className="font-bold text-blue-600">[{permission.type}]</span> {permission.subService}
                              </p>
                              <p className="text-xs text-gray-500">{permission.description}</p>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => togglePermission(permission.id)}
                              disabled={grantedPermissions.includes(permission.id)}
                              className="ml-2"
                            >
                              <PlusCircle className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollArea>
          </div>
          <div className="w-1/2 pl-4">
            <h3 className="mb-4 font-medium">Granted Permissions</h3>
            <ScrollArea className="h-full">
              <div className="space-y-2">
                {grantedPermissions.map((id) => {
                  const permission = mockPermissions.find(p => p.id === id)
                  if (!permission) return null
                  return (
                    <div key={id} className="flex items-center justify-between p-2 rounded-lg bg-green-50 hover:bg-green-100 transition-colors duration-200">
                      <div className="flex-1">
                        <p className="text-sm font-medium">
                          <span className="font-bold text-blue-600">[{permission.type}]</span> {permission.service} - {permission.subService}
                        </p>
                        <p className="text-xs text-gray-500">{permission.description}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => togglePermission(id)}
                        className="ml-2 text-red-500 hover:text-red-700"
                      >
                        <MinusCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  )
                })}
              </div>
            </ScrollArea>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}