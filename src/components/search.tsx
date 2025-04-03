"use client"

import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface ExtensionsSearchProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
}

interface GatewaySearchProps {
    searchQuery: string
    setSearchQuery: (query: string) => void
}

interface SipProfilesSearchProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
}

export function ExtensionsSearch({ searchQuery, setSearchQuery }: ExtensionsSearchProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search extensions..."
          className="pl-8 w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  )
}


export function GatewaySearch({ searchQuery, setSearchQuery }: GatewaySearchProps) {
    return (
      <div className="flex items-center gap-2">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search gateways..."
            className="pl-8 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
    )
  }


  export function SipProfilesSearch({ searchQuery, setSearchQuery }: SipProfilesSearchProps) {
    return (
      <div className="flex items-center gap-2">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search SIP profiles..."
            className="pl-8 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
    )
  }

