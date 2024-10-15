"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Home,
  Users,
  SwitchCamera,
  Settings,
  Activity,
  ChevronDown,
  ChevronRight,
  Shield,
  Bell,
  Sun,
  Moon
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"

type NavItem = {
  name: string;
  href?: string;
  icon: React.ElementType;
  hasSubmenu?: boolean;
  submenu?: { name: string; href: string }[];
}

const navigation: NavItem[] = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { 
    name: 'Accounts', 
    icon: Users, 
    hasSubmenu: true,
    submenu: [
      { name: 'Bridge', href: '/dashboard/accounts/bridge' },
      { name: 'Extensions', href: '/dashboard/accounts/extensions' },
      { name: 'Gateway', href: '/dashboard/accounts/gateways' },
    ]
  },
  { 
    name: 'Switch', 
    icon: SwitchCamera, 
    hasSubmenu: true,
    submenu: [
      { name: 'Calls', href: '/dashboard/switch/calls' },
      { name: 'Voicemail', href: '/dashboard/switch/voicemail' },
    ]
  },
  { 
    name: 'Settings', 
    icon: Settings, 
    hasSubmenu: true,
    submenu: [
      { name: 'Domain', href: '/dashboard/settings/domains' },
      { name: 'Devices', href: '/dashboard/settings/devices' },
    ]
  },
  {
    name: 'Users and Authorization',
    icon: Shield,
    hasSubmenu: true,
    submenu: [
      { name: 'Permissions', href: '/dashboard/users-and-auth/permissions' },
      { name: 'Groups', href: '/dashboard/users-and-auth/groups' },
      { name: 'Users', href: '/dashboard/users-and-auth/users' },
    ]
  },
  { name: 'Monitoring', href: '/dashboard/monitoring', icon: Activity },
]

export default function Sidebar() {
  const [expandedItems, setExpandedItems] = React.useState<string[]>([])
  const [isDarkMode, setIsDarkMode] = React.useState(false)
  const pathname = usePathname()

  const toggleExpand = (name: string) => {
    setExpandedItems(prev =>
      prev.includes(name) ? prev.filter(item => item !== name) : [...prev, name]
    )
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    // Implement actual dark mode toggle logic here
  }

  return (
    <div className="flex flex-col h-screen">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-gray-800 shadow-sm z-10 flex items-center justify-between px-4">
        <h1 className="text-xl font-bold">Vogat PBX</h1>
        <div className="flex items-center space-x-4">
          <Switch
            checked={isDarkMode}
            onCheckedChange={toggleDarkMode}
            className="data-[state=checked]:bg-primary"
          />
          {isDarkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          <Bell className="h-5 w-5 cursor-pointer" />
          <div className="flex items-center space-x-2 cursor-pointer">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
              <AvatarFallback>TC</AvatarFallback>
            </Avatar>
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div className="flex h-screen pt-16">
        <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 text-gray-600">
          <nav className="flex-1 space-y-1 px-2 py-4">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.hasSubmenu ? (
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-between text-left font-normal",
                      expandedItems.includes(item.name) && "bg-gray-100 dark:bg-gray-700 font-medium"
                    )}
                    onClick={() => toggleExpand(item.name)}
                  >
                    <span className="flex items-center">
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.name}
                    </span>
                    {expandedItems.includes(item.name) ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </Button>
                ) : item.href ? (
                  <Link href={item.href} passHref>
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        pathname === item.href && "bg-gray-100 dark:bg-gray-700 font-medium"
                      )}
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.name}
                    </Button>
                  </Link>
                ) : null}
                {item.hasSubmenu && expandedItems.includes(item.name) && (
                  <div className="ml-4 mt-2 space-y-1">
                    {item.submenu?.map((subItem) => (
                      <Link key={subItem.name} href={subItem.href} passHref>
                        <Button
                          variant="ghost"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            pathname === subItem.href && "bg-gray-100 dark:bg-gray-700 font-medium"
                          )}
                        >
                          {subItem.name}
                        </Button>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}