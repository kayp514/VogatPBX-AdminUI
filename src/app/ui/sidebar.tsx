"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Activity,
  Bell,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Home,
  LogOut,
  Moon,
  Settings,
  Shield,
  Sun,
  SwitchCamera,
  Users,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Switch } from "@/components/ui/switch"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type NavItem = {
  name: string
  href?: string
  icon: React.ElementType
  hasSubmenu?: boolean
  submenu?: { name: string; href: string }[]
}

const navigation: NavItem[] = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  {
    name: "Accounts",
    icon: Users,
    hasSubmenu: true,
    submenu: [
      { name: "Bridge", href: "/dashboard/accounts/bridge" },
      { name: "Extensions", href: "/dashboard/accounts/extensions" },
      { name: "Gateway", href: "/dashboard/accounts/gateways" },
    ],
  },
  {
    name: "Switch",
    icon: SwitchCamera,
    hasSubmenu: true,
    submenu: [
      { name: "Access Controls", href: "/dashboard/switch/accesscontrols" },
      { name: "Email Templates", href: "/dashboard/switch/emailtemplates" },
      { name: "Modules", href: "/dashboard/switch/modules" },
      { name: "Sip Profiles", href: "/dashboard/switch/sipProfiles" },
      { name: "Variables", href: "/dashboard/switch/variables" },
    ],
  },
  {
    name: "Settings",
    icon: Settings,
    hasSubmenu: true,
    submenu: [
      { name: "Domain", href: "/dashboard/settings/domains" },
      { name: "Devices", href: "/dashboard/settings/devices" },
      { name: "Menu manage", href: "/dashboard/settings/menus" },
    ],
  },
  {
    name: "Authentication",
    icon: Shield,
    hasSubmenu: true,
    submenu: [
      { name: "Permissions", href: "/dashboard/users-and-auth/permissions" },
      { name: "Groups", href: "/dashboard/users-and-auth/groups" },
      { name: "Users", href: "/dashboard/users-and-auth/users" },
    ],
  },
  { name: "Monitoring", href: "/dashboard/monitoring", icon: Activity },
]

export function SidebarComponent() {
  const [isDarkMode, setIsDarkMode] = React.useState(false)
  const [isCollapsed, setIsCollapsed] = React.useState(false)
  const pathname = usePathname()

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    // Implement actual dark mode toggle logic here
  }

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
  <TooltipProvider>
    <div className={cn(
      "flex flex-col h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700",
      isCollapsed ? "w-16" : "w-64"
    )}>
      <div className="flex items-center h-16 px-4 border-b border-gray-200 dark:border-gray-700">
        {!isCollapsed && <h1 className="text-xl font-bold">Vogat PBX</h1>}
        <Button variant="ghost" size="icon" onClick={toggleSidebar} className={cn("ml-auto", isCollapsed && "mx-auto")}>
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
          <span className="sr-only">Toggle sidebar</span>
        </Button>
      </div>
      <nav className="flex-1 overflow-y-auto">
          <ul className="p-2 space-y-1">
            {navigation.map((item) => (
              <li key={item.name}>
                {item.hasSubmenu ? (
                  isCollapsed ? (
                    <DropdownMenu>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              className="w-full justify-center px-2"
                            >
                              <item.icon className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                          {item.name}
                        </TooltipContent>
                      </Tooltip>
                      <DropdownMenuContent side="right">
                        <DropdownMenuLabel>{item.name}</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {item.submenu?.map((subItem) => (
                          <DropdownMenuItem key={subItem.name} asChild>
                            <Link href={subItem.href}>{subItem.name}</Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Collapsible>
                      <CollapsibleTrigger asChild>
                        <Button
                          variant="ghost"
                          className="w-full justify-between text-left font-normal"
                        >
                          <span className="flex items-center">
                            <item.icon className="mr-2 h-4 w-4" />
                            {item.name}
                          </span>
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <ul className="pl-6 mt-1 space-y-1">
                          {item.submenu?.map((subItem) => (
                            <li key={subItem.name}>
                              <Link
                                href={subItem.href}
                                className={cn(
                                  "block py-2 px-3 rounded-md text-sm",
                                  pathname === subItem.href
                                    ? "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-gray-100"
                                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100"
                                )}
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </CollapsibleContent>
                    </Collapsible>
                  )
                ) : (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={item.href || "#"}
                        className={cn(
                          "flex items-center py-2 px-3 rounded-md",
                          pathname === item.href
                            ? "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-gray-100"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100",
                          isCollapsed && "justify-center px-2"
                        )}
                      >
                        <item.icon className={cn("h-4 w-4", !isCollapsed && "mr-2")} />
                        {!isCollapsed && <span>{item.name}</span>}
                      </Link>
                    </TooltipTrigger>
                    {isCollapsed && (
                      <TooltipContent side="right">
                        {item.name}
                      </TooltipContent>
                    )}
                  </Tooltip>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <Switch
            checked={isDarkMode}
            onCheckedChange={toggleDarkMode}
            className="data-[state=checked]:bg-primary"
          />
          {isDarkMode ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </div>
      </div>
    </TooltipProvider>
  )
}