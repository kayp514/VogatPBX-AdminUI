import { notFound } from 'next/navigation'
import { getDomain } from '@/lib/domains'

interface PageProps {
  params: Promise<{
    slug: string[]
  }>
}

export default async function DomainPage({ params }: PageProps) {
  // Await the params object
  const { slug } = await params

  // Get the last segment as the domainId since the URL structure will be /domain/hp/login
  const domainId = slug[1] // This will get 'hp' from the path
  const path = slug.slice(2) // This will get remaining segments after 'hp'

  console.log('Domain ID:', domainId)
  console.log('Path:', path)
  
  if (!domainId) {
    notFound()
  }

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