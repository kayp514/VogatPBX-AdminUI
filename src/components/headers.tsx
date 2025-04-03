"use client"

import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { Filter, Download, Plus, RefreshCw, Trash2 } from "lucide-react"

interface ExtensionsHeaderProps {
  selectedCount?: number
}

interface GatewayHeaderProps {
  selectedCount?: number
}

interface SipProfilesHeaderProps {
  selectedCount?: number
}

export function ExtensionsHeader({ selectedCount = 0 }: ExtensionsHeaderProps) {
  return (
    <PageHeader
      title="Extensions"
      description="Manage your PBX extensions, configure settings and control access."
      actions={
        <>
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Add Extension
          </Button>
        </>
      }
    />
  )
}


export function GatewayHeader({ selectedCount = 0 }: GatewayHeaderProps) {
  return (
    <PageHeader
      title="Gateways"
      description="Manage your FreeSWITCH SIP gateways and connections"
      actions={
        <>
          {selectedCount > 0 ? (
            <>
              <Button variant="outline" size="sm" className="text-red-600">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete Selected ({selectedCount})
              </Button>
              <Button variant="outline" size="sm">
                <RefreshCw className="mr-2 h-4 w-4" />
                Refresh Selected
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
              <Button size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Add Gateway
              </Button>
            </>
          )}
        </>
      }
    />
  )
}


export function SipProfilesHeader({ selectedCount = 0 }: SipProfilesHeaderProps) {
  return (
    <PageHeader
      title="SIP Profiles"
      description="Manage your FreeSWITCH SIP profiles for internal and external communications"
      actions={
        <>
          {selectedCount > 0 ? (
            <>
              <Button variant="outline" size="sm" className="text-red-600">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete Selected ({selectedCount})
              </Button>
              <Button variant="outline" size="sm">
                <RefreshCw className="mr-2 h-4 w-4" />
                Refresh Selected
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
              <Button size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Add SIP Profile
              </Button>
            </>
          )}
        </>
      }
    />
  )
}

