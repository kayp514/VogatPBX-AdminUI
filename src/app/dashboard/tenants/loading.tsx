import { Skeleton } from "@/components/ui/skeleton"
import { PageWrapper } from "@/components/page-wrapper"
import { PageHeader } from "@/components/page-header"

export default function Loading() {
  return (
    <PageWrapper>
      <PageHeader 
        title="Tenants Management" 
        description="Manage your VogatPBX tenants and organizations"
      />
      <div className="space-y-4">
        <Skeleton className="h-[200px] w-full" />
        <Skeleton className="h-[300px] w-full" />
      </div>
    </PageWrapper>
  )
}
