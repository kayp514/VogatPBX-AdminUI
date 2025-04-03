import type React from "react"
import {
  Activity,
  BarChart3,
  Calendar,
  Cog,
  FileText,
  Headphones,
  Home,
  Layers,
  LayoutGrid,
  Lock,
  MessageSquare,
  Network,
  Phone,
  PhoneCall,
  PhoneForwarded,
  PhoneIncoming,
  PhoneOff,
  Settings,
  Shield,
  SplitIcon,
  SwitchCamera,
  Terminal,
  Users,
  Variable,
  Headset,
  LayoutDashboard,
  Smartphone,
} from "lucide-react"
import type { UserRole } from "@/lib/auth-context"

export type NavItem = {
  name: string
  href?: string
  icon: React.ElementType
  hasSubmenu?: boolean
  submenu?: NavItem[]
  section?: "pbx" | "freeswitch" | "system"
  roles?: UserRole[]
  permission?: string
}

export const navigation: NavItem[] = [
  // Dashboard - Available to all roles
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: Home,
    section: "pbx",
    roles: ["admin", "superuser", "member"],
  },

  // PBX Functionalities - Grouped together
  {
    name: "PBX",
    icon: Phone,
    hasSubmenu: true,
    section: "pbx",
    roles: ["admin", "superuser", "member"],
    submenu: [
      // Dashboard item removed from here since it's already a standalone item
      {
        name: "Extensions",
        href: "/dashboard/pbx/extensions",
        icon: PhoneCall,
        roles: ["admin", "superuser", "member"],
        permission: "extensions.view",
      },
      {
        name: "Ring Groups",
        href: "/dashboard/pbx/ring-groups",
        icon: Users,
        roles: ["admin", "superuser", "member"],
        permission: "ring_groups.view",
      },
      {
        name: "Call Routing",
        href: "/dashboard/pbx/call-routing",
        icon: PhoneForwarded,
        roles: ["admin", "superuser"],
        permission: "call_routing.view",
      },
      {
        name: "Voicemail",
        href: "/dashboard/pbx/voicemail",
        icon: MessageSquare,
        roles: ["admin", "superuser", "member"],
        permission: "voicemail.view",
      },
      {
        name: "Conference Rooms",
        href: "/dashboard/pbx/conference-rooms",
        icon: Headphones,
        roles: ["admin", "superuser", "member"],
        permission: "conference.view",
      },
      {
        name: "Time Conditions",
        href: "/dashboard/pbx/time-conditions",
        icon: Calendar,
        roles: ["admin", "superuser"],
        permission: "time_conditions.view",
      },
      {
        name: "Call Centre",
        href: "/dashboard/pbx/call-centre",
        icon: Headset,
        roles: ["admin", "superuser", "member"],
        permission: "call_centre.view",
      },
      {
        name: "Devices",
        href: "/dashboard/pbx/devices",
        icon: Smartphone,
        roles: ["admin", "superuser", "member"],
        permission: "devices.view",
      },
    ],
  },

  // Call Reports - Available to all roles
  {
    name: "Call Reports",
    icon: BarChart3,
    hasSubmenu: true,
    section: "pbx",
    roles: ["admin", "superuser", "member"],
    submenu: [
      {
        name: "Call History",
        href: "/dashboard/reports/call-history",
        icon: PhoneIncoming,
        roles: ["admin", "superuser", "member"],
        permission: "call_history.view",
      },
      {
        name: "Missed Calls",
        href: "/dashboard/reports/missed-calls",
        icon: PhoneOff,
        roles: ["admin", "superuser", "member"],
        permission: "call_history.view",
      },
      {
        name: "Call Analytics",
        href: "/dashboard/reports/call-analytics",
        icon: Activity,
        roles: ["admin", "superuser"],
        permission: "call_analytics.view",
      },
    ],
  },

  // FreeSWITCH Functionalities - Grouped together
  {
    name: "FreeSWITCH",
    icon: SwitchCamera,
    hasSubmenu: true,
    section: "freeswitch",
    roles: ["admin", "superuser"],
    permission: "freeswitch.view",
    submenu: [
      {
        name: "SIP Profiles",
        href: "/dashboard/freeswitch/sip-profiles",
        icon: LayoutGrid,
        roles: ["admin", "superuser"],
        permission: "sip_profiles.view",
      },
      {
        name: "Modules",
        href: "/dashboard/freeswitch/modules",
        icon: Layers,
        roles: ["admin"],
        permission: "modules.view",
      },
      {
        name: "Access Controls",
        href: "/dashboard/freeswitch/access-controls",
        icon: Shield,
        roles: ["admin", "superuser"],
        permission: "access_controls.view",
      },
      {
        name: "Variables",
        href: "/dashboard/freeswitch/variables",
        icon: Variable,
        roles: ["admin"],
        permission: "variables.view",
      },
      {
        name: "Gateways",
        href: "/dashboard/freeswitch/gateways",
        icon: Network,
        roles: ["admin", "superuser"],
        permission: "gateways.view",
      },
      {
        name: "Bridge",
        href: "/dashboard/freeswitch/bridge",
        icon: Network,
        roles: ["admin", "superuser"],
        permission: "bridge.view",
      },
      {
        name: "Dialplans",
        href: "/dashboard/freeswitch/dialplans",
        icon: FileText,
        roles: ["admin"],
        permission: "dialplans.view",
      },
      {
        name: "Console",
        href: "/dashboard/freeswitch/console",
        icon: Terminal,
        roles: ["admin"],
        permission: "console.view",
      },
    ],
  },

  // System Administration - Mostly admin only
  {
    name: "System",
    icon: Cog,
    hasSubmenu: true,
    section: "system",
    roles: ["admin", "superuser"],
    submenu: [
      {
        name: "Tenants",
        href: "/dashboard/system/tenants",
        icon: SplitIcon,
        roles: ["admin"],
        permission: "tenants.view",
      },
      {
        name: "Users",
        href: "/dashboard/system/users",
        icon: Users,
        roles: ["admin", "superuser"],
        permission: "users.view",
      },
      {
        name: "Portal",
        href: "/dashboard/system/portal",
        icon: LayoutDashboard,
        roles: ["admin", "superuser"],
        permission: "portal.view",
      },
      {
        name: "Permissions",
        href: "/dashboard/system/permissions",
        icon: Lock,
        roles: ["admin"],
        permission: "permissions.view",
      },
      {
        name: "Settings",
        href: "/dashboard/system/settings",
        icon: Settings,
        roles: ["admin", "superuser"],
        permission: "settings.view",
      },
      {
        name: "Monitoring",
        href: "/dashboard/system/monitoring",
        icon: Activity,
        roles: ["admin", "superuser"],
        permission: "monitoring.view",
      },
      {
        name: "Logs",
        href: "/dashboard/system/logs",
        icon: FileText,
        roles: ["admin", "superuser"],
        permission: "logs.view",
      },
    ],
  },
]

