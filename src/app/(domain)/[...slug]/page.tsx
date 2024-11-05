import { notFound } from 'next/navigation'
import { getDomain } from '@/lib/domains'

interface PageProps {
  params: Promise<{
    slug: string[]
  }>
}

export default async function DomainPage({ params }: PageProps) {
  // Await the params
  const resolvedParams = await params
  const [domainId, ...path] = resolvedParams.slug
  
  try {
    const domainInfo = await getDomain(domainId)

    if (!domainInfo) {
      notFound()
    }

    return (
      <div className="container mx-auto py-10">
        <h1 className="text-2xl font-bold mb-4">Domain Details</h1>
        <div className="space-y-4">
          <p>Domain ID: {domainId}</p>
          <p>Current Path: /{path.join('/')}</p>
          <pre className="bg-gray-100 p-4 rounded">
            {JSON.stringify(domainInfo, null, 2)}
          </pre>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error loading domain:', error)
    notFound()
  }
}