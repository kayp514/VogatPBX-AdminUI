"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { ChevronRight, PanelLeft, PanelRightClose, SwitchCamera } from "lucide-react"
import {
  Sidebar,
  SidebarContent as SidebarContentPrimitive,
  SidebarFooter,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { navigation } from "@/lib/navigation"
import { useAuth } from "@/lib/mock-auth"
import { cn } from "@/lib/utils"

import { SidebarUserFooter } from "@/components/sidebarfooter"


export function SidebarContent() {
    const pathname = usePathname()
    const { user } = useAuth()
    const { state: sidebarState, toggleSidebar } = useSidebar()
    const isCollapsed = sidebarState === "collapsed"
  
    const [expandedSections, setExpandedSections] = React.useState<Record<string, boolean>>({
      overview: true,
      pbx: true,
      switch: true,
      system: true,
    })
  
    const toggleSection = (section: string) => {
      setExpandedSections((prev) => ({
        ...prev,
        [section]: !prev[section],
      }))
    }
  
  
  
    // Group navigation items by section
    const overviewItems = navigation.filter((item) => item.section === "overview")
    const pbxItems = navigation.filter((item) => item.section === "pbx")
    const switchItems = navigation.filter((item) => item.section === "switch")
    const systemItems = navigation.filter((item) => item.section === "system")
    const tenantsItems = navigation.filter((item) => item.section === "tenants")
  
    // Check if a path is active
    const isActive = (href: string) => pathname === href
  
    // Check if a section is active (any of its items is active)
    const isActiveSection = (href: string) => {
      if (href === "/dashboard") {
        return pathname === "/dashboard"
      }
      return pathname.startsWith(href)
    }
  
    const renderSection = (sectionItems: typeof navigation, sectionKey: string) => {
      if (sectionItems.length === 0) return null
  
      const sectionData = sectionItems[0]
      const isExpanded = expandedSections[sectionKey]
  
      const hasActiveItem = sectionItems.some((item) =>
        item.submenu?.some((subItem) => subItem.href && isActiveSection(subItem.href)),
      )
  
      return (
        <div
          key={sectionKey}
          className={cn(
            "mb-1",
            isCollapsed ? "px-0.5" : "px-1",
          )}
        >
          <Button
            onClick={() => toggleSection(sectionKey)}
            variant="ghost"
            size="sm"
            className={cn(
              "w-full flex items-center justify-between py-1.5 px-2 h-auto",
              "hover:bg-muted/50 rounded-md transition-colors duration-200",
              hasActiveItem && "text-primary font-medium",
              isCollapsed && "justify-center px-0",
            )}
          >
            <div className={cn("flex items-center gap-2", isCollapsed && "justify-center w-full")}>
              <div
                className={cn(
                  "flex items-center justify-center",
                  hasActiveItem ? "text-primary" : "text-muted-foreground/80",
                )}
              >
                <sectionData.icon className="h-4 w-4" />
              </div>
              {!isCollapsed && <span className="text-sm font-medium">{sectionData.name}</span>}
            </div>
            {!isCollapsed && (
              <motion.div
                animate={{ rotate: isExpanded ? 90 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-muted-foreground/70"
              >
                <ChevronRight className="h-4 w-4" />
              </motion.div>
            )}
          </Button>
  
          {/* Section Content */}
          <motion.div
            initial={false}
            animate={{
              height: isExpanded || isCollapsed ? "auto" : 0,
              opacity: isExpanded || isCollapsed ? 1 : 0,
            }}
            transition={{ duration: 0.2 }}
            className={cn(
              "overflow-hidden",
              !isCollapsed && isExpanded && "mt-1 ml-3",
              !isCollapsed && isExpanded && "border-l border-muted-foreground/10",
            )}
          >
            <div
              className={cn(
                "flex flex-col gap-0.5", 
                !isCollapsed && "pl-2 pr-1",
              )}
            >
              {sectionItems.flatMap((item) =>
                item.submenu?.map((subItem) => (
                  <TooltipProvider key={subItem.name} delayDuration={300}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href={subItem.href || "#"}
                          className={cn(
                            "flex items-center gap-2 px-2 py-1.5 rounded-md text-sm",
                            "transition-colors duration-200",
                            "hover:bg-muted/50",
                            isActive(subItem.href || "") && "bg-primary/10 text-primary font-medium",
                            isCollapsed && "justify-center p-1.5", 
                          )}
                        >
                          <subItem.icon
                            className={cn(
                              "h-4 w-4",
                              isActive(subItem.href || "") ? "text-primary" : "text-muted-foreground",
                            )}
                          />
                          {!isCollapsed && <span>{subItem.name}</span>}
                        </Link>
                      </TooltipTrigger>
                      {isCollapsed && <TooltipContent side="right">{subItem.name}</TooltipContent>}
                    </Tooltip>
                  </TooltipProvider>
                )),
              )}
            </div>
          </motion.div>
        </div>
      )
    }
  
    return (
      <Sidebar className="border-r shadow-sm bg-gradient-to-b from-background to-muted/20 h-screen transition-all duration-300 ease-in-out">
        <SidebarHeader className="border-b border-border/60">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-sm ring-1 ring-primary/20">
                <SwitchCamera className="h-5 w-5" />
              </div>
              {!isCollapsed && (
                <div className="flex flex-col">
                  <span className="text-sm font-bold tracking-tight">VogatPBX</span>
                  <span className="text-xs text-muted-foreground">Cloud PBX</span>
                </div>
              )}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full hover:bg-muted/50"
              onClick={toggleSidebar}
              aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {isCollapsed ? <PanelLeft className="h-4 w-4" /> : <PanelRightClose className="h-4 w-4" />}
            </Button>
          </div>
        </SidebarHeader>
  
        <SidebarContentPrimitive
          className={cn(
            "py-3 overflow-y-auto overflow-x-hidden",
            "scrollbar-thin scrollbar-thumb-muted-foreground/20 scrollbar-track-transparent",
            "transition-all duration-200 ease-in-out",
            isCollapsed ? "px-1" : "px-2", 
          )}
        >
          {/* Add a small visual separator at the top */}
          <div className="mb-2 px-2">
            <div className="h-px bg-border/40 w-full" />
          </div>
  
          {/* Render each section with consistent spacing */}
          <div className="space-y-2">
            {" "}
            {/* Consistent spacing between section groups */}
            {renderSection(overviewItems, "overview")}
            {renderSection(pbxItems, "pbx")}
            {renderSection(switchItems, "switch")}
            {renderSection(systemItems, "system")}
            {renderSection(tenantsItems, "tenants")}
          </div>
        </SidebarContentPrimitive>
  
        <SidebarFooter className="border-t bg-gradient-to-b from-muted/10 to-muted/30">
          {user && (
            <SidebarUserFooter
              user={{
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
              }}
              onLogout={() => {
                console.log("Logging out")
                window.location.href = "/login"
              }}
            />
          )}
        </SidebarFooter>
      </Sidebar>
    )
  }