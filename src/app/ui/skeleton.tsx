import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"

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

export function VariablesPageSkeleton() {
  return (
    <div className="container mx-auto py-6">
      <Skeleton className="h-8 w-64 mb-6" />
      <div className="flex">
        <nav className="w-64 pr-8">
          <ul className="space-y-2">
            {[...Array(5)].map((_, i) => (
              <li key={i}>
                <Skeleton className="h-10 w-full" />
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex-1">
          <Card>
            <CardContent className="p-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    {['Name', 'Value', 'Hostname', 'Enabled', 'Description'].map((header) => (
                      <TableHead key={header}>
                        <Skeleton className="h-6 w-full" />
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[...Array(5)].map((_, i) => (
                    <TableRow key={i}>
                      {[...Array(5)].map((_, j) => (
                        <TableCell key={j}>
                          <Skeleton className="h-6 w-full" />
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}