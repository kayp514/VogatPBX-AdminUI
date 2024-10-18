import { Skeleton } from "@/components/ui/skeleton"
import { TableCell, TableRow } from "@/components/ui/table"

export function BridgeSkeleton() {
  return (
    <TableRow>
      <TableCell><Skeleton className="h-4 w-4" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[200px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[250px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[60px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[200px]" /></TableCell>
      <TableCell><Skeleton className="h-8 w-[60px]" /></TableCell>
    </TableRow>
  )
}

export function ExtensionSkeleton() {
  return (
    <TableRow>
      <TableCell><Skeleton className="h-4 w-4" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[150px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[150px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[60px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[200px]" /></TableCell>
    </TableRow>
  )
}

export function GatewaySkeleton() {
  return (
    <TableRow>
      <TableCell><Skeleton className="h-4 w-4" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[150px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[150px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[60px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[200px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[200px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[200px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[200px]" /></TableCell>
    </TableRow>
  )
}

export function DomainSkeleton() {
  return (
    <TableRow>
      <TableCell><Skeleton className="h-4 w-4" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[200px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[250px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[60px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[200px]" /></TableCell>
      <TableCell><Skeleton className="h-8 w-[60px]" /></TableCell>
    </TableRow>
  )
}

export function DeviceSkeleton() {
  return (
    <TableRow>
      <TableCell><Skeleton className="h-4 w-4" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[150px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[150px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[60px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[150px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[200px]" /></TableCell>
    </TableRow>
  )
}

export function GroupsSkeleton() {
  return (
    <TableRow>
      <TableCell><Skeleton className="h-4 w-4" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[200px]" /></TableCell>
      <TableCell><Skeleton className="h-8 w-[60px]" /></TableCell>
    </TableRow>
  )
}

export function UserSkeleton() {
  return (
    <TableRow>
      <TableCell><Skeleton className="h-4 w-4" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[150px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[200px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[60px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[60px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[60px]" /></TableCell>
    </TableRow>
  )
}

export function SipProfilesSkeleton() {
  return (
    <TableRow>
      <TableCell><Skeleton className="h-4 w-4" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[150px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[200px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
    </TableRow>
  )
}

export function SipDomainSkeleton() {
  return(
  <TableRow>
    <TableCell className="py-2 w-1/4"><Skeleton className="h-7 w-full" /></TableCell>
    <TableCell className="py-2"><Skeleton className="h-6 w-10" /></TableCell>
    <TableCell className="py-2"><Skeleton className="h-6 w-10" /></TableCell>
    <TableCell className="py-2"><Skeleton className="h-7 w-7" /></TableCell>
  </TableRow>
  )
}

export function SipSettingSkeleton (){
  return(
  <TableRow>
    <TableCell className="py-2 w-1/4"><Skeleton className="h-7 w-full" /></TableCell>
    <TableCell className="py-2"><Skeleton className="h-7 w-full" /></TableCell>
    <TableCell className="py-2"><Skeleton className="h-6 w-10" /></TableCell>
    <TableCell className="py-2"><Skeleton className="h-7 w-full" /></TableCell>
    <TableCell className="py-2"><Skeleton className="h-7 w-7" /></TableCell>
  </TableRow>

  )
}