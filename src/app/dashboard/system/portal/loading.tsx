import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageWrapper } from "@/components/page-wrapper"
import { PageHeader } from "@/components/page-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Loading() {
  return (
    <PageWrapper>
      <PageHeader title="Portal Management" description="Configure portal access for different user roles" />

      <Tabs defaultValue="navigation">
        <TabsList className="mb-4">
          <TabsTrigger value="navigation">
            <Skeleton className="h-4 w-24" />
          </TabsTrigger>
          <TabsTrigger value="roles">
            <Skeleton className="h-4 w-24" />
          </TabsTrigger>
          <TabsTrigger value="preview">
            <Skeleton className="h-4 w-24" />
          </TabsTrigger>
        </TabsList>

        <TabsContent value="navigation">
          <Card>
            <CardHeader>
              <CardTitle>Navigation Access</CardTitle>
              <Skeleton className="h-4 w-[300px]" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Card key={i} className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <Skeleton className="h-6 w-[200px]" />
                      <Skeleton className="h-8 w-[100px]" />
                    </div>
                    <div className="space-y-3">
                      {Array.from({ length: 3 }).map((_, j) => (
                        <div key={j} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Skeleton className="h-4 w-4" />
                            <Skeleton className="h-4 w-[150px]" />
                          </div>
                          <div className="flex gap-2">
                            <Skeleton className="h-6 w-[80px]" />
                            <Skeleton className="h-6 w-[80px]" />
                            <Skeleton className="h-6 w-[80px]" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </PageWrapper>
  )
}

