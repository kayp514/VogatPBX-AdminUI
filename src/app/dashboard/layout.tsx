'use client'
import * as React from "react"
import { usePathname } from "next/navigation"
import { SidebarComponent } from "../ui/sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Bell, User, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useMemo } from "react"

const segmentsWithoutPages = ['settings', 'accounts', 'switch', 'monitoring', 'users-and-auth']

const hasOwnPage = (segment: string, index: number, segments: string[]) => {
  const lowerSegment = segment.toLowerCase()

  if (lowerSegment === 'dashboard') {
    return true
  }
  
  if (segmentsWithoutPages.includes(lowerSegment)) {
    return false
  }

  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
  if (uuidRegex.test(segment)) {
    return false
  }

  if (index < segments.length - 1 && segmentsWithoutPages.includes(segments[index + 1].toLowerCase())) {
    return false
  }
  return true
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [mounted, setMounted] = React.useState(false)

  const breadcrumbs = React.useMemo(() => {
    const pathSegments = pathname.split("/").filter(Boolean)
    if (pathSegments.length === 0) {
      return [{ name: "Dashboard", href: "/dashboard", hasOwnPage: true }]
    }
    return pathSegments.map((segment, index) => {
      const href = `/${pathSegments.slice(0, index + 1).join("/")}`
      return {
        name: segment.charAt(0).toUpperCase() + segment.slice(1),
        href,
        hasOwnPage: hasOwnPage(segment, index, pathSegments)
      }
    })
  }, [pathname])

  return (
    <div className="flex h-screen">
      <SidebarComponent />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-6">
        <Breadcrumb>
            <BreadcrumbList>
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={crumb.href}>
                  <BreadcrumbItem>
                    {index === breadcrumbs.length - 1 ? (
                      <BreadcrumbPage>{crumb.name}</BreadcrumbPage>
                    ) : (
                      crumb.hasOwnPage ? (
                        <BreadcrumbLink href={crumb.href}>{crumb.name}</BreadcrumbLink>
                      ) : (
                        <span className="text-muted-foreground">{crumb.name}</span>
                      )
                    )}
                  </BreadcrumbItem>
                  {index < breadcrumbs.length - 1 && (
                    <BreadcrumbSeparator>
                      <ChevronRight className="h-4 w-4" />
                    </BreadcrumbSeparator>
                  )}
                </React.Fragment>
              ))}
              {breadcrumbs.length === 1 && (
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4" />
                </BreadcrumbSeparator>
              )}
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex items-center gap-4">
            <Bell className="h-5 w-5 cursor-pointer" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                    <AvatarFallback>TC</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">John Doe</p>
                    <p className="text-xs leading-none text-muted-foreground">john@example.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Bell className="mr-2 h-4 w-4" />
                  <span>Notifications</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}