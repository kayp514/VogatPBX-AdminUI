"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/dashboard-header"
import { usePathname } from "next/navigation"

interface AppLayoutProps {
  children: ReactNode
  className?: string
}

export function DashboardLayout({ children, className }: AppLayoutProps) {
  const pathname = usePathname()

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto bg-gray-50 dark:bg-gray-900">
          <div className={cn("container mx-auto py-6 px-4 md:px-6 lg:px-8 max-w-7xl", className)}>{children}</div>
        </main>
      </div>
    </div>
  )
}

