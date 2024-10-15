'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { ChevronRight } from 'lucide-react'

// Add this helper function to check if a segment has its own page
const hasOwnPage = (segment: string) => {
  // Add segments that don't have their own pages
  const segmentsWithoutPages = ['settings', 'accounts']
  return !segmentsWithoutPages.includes(segment)
}

export function Breadcrumbtop() {
  const pathname = usePathname()
  const router = useRouter()
  const pathSegments = pathname.split('/').filter(segment => segment !== '')

  return (
    <nav aria-label="Breadcrumb" className="mb-2">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link href="/dashboard" className="text-gray-500 hover:text-gray-700">
            Dashboard
          </Link>
        </li>
        {pathSegments.slice(1).map((segment, index) => {
          const href = `/dashboard/${pathSegments.slice(1, index + 2).join('/')}`
          const isLast = index === pathSegments.length - 2
          
          const handleClick = (e: React.MouseEvent) => {
            if (!hasOwnPage(segment)) {
              e.preventDefault()
              // You can add custom behavior here, like opening a modal or showing a tooltip
              console.log(`${segment} doesn't have its own page`)
            }
          }

          return (
            <li key={href} className="flex items-center">
              <ChevronRight className="h-4 w-4 text-gray-400" />
              {isLast ? (
                <span className="ml-2 text-gray-900 font-medium">{segment}</span>
              ) : (
                hasOwnPage(segment) ? (
                  <Link href={href} className="ml-2 text-gray-500 hover:text-gray-700">
                    {segment}
                  </Link>
                ) : (
                  <span
                    className="ml-2 text-gray-500 cursor-default"
                    onClick={handleClick}
                  >
                    {segment}
                  </span>
                )
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}