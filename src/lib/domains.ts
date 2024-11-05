import type { pbx_domains } from '@prisma/client'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'

export async function getDomains(): Promise<pbx_domains[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/domains`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store'
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error('Error fetching domains:', error)
    throw error
  }
}

export async function getDomain(domainId: string): Promise<pbx_domains | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/domains/${domainId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store'
    })

    if (!response.ok) {
      if (response.status === 404) {
        return null
      }
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error('Error fetching domain:', error)
    throw error
  }
}