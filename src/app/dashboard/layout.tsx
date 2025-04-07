'use client'
import { DashboardLayout } from "@/components/dashboard-layout"
import { AuthProvider } from "@/lib/mock-auth"
import { ThemeProvider } from "@/components/theme-provider"

export default function Layout({ children }: { children: React.ReactNode }) {


  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
    <AuthProvider>
      <DashboardLayout>
        {children}
      </DashboardLayout>
    </AuthProvider>
    </ThemeProvider>
  )
}