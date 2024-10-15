import { NextResponse } from 'next/server'
import { createDomain, fetchDomains } from '@/lib/domainService'
import { DomainInput } from '@/lib/domainService'

export async function POST(request: Request) {
  try {
    const body: DomainInput = await request.json()

    // Basic validation
    if (!body.name || !body.portal_name || !body.home_switch) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const newDomain = await createDomain(body)

    return NextResponse.json(newDomain, { status: 201 })
  } catch (error) {
    console.error('Error creating domain:', error)
    return NextResponse.json(
      { error: 'An error occurred while creating the domain' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const domains = await fetchDomains()
    console.log('Domains being sent to client:', JSON.stringify(domains, null, 2))
    return NextResponse.json(domains)
  } catch (error) {
    console.error('Error fetching domains:', error)
    return NextResponse.json(
      { error: 'An error occurred while fetching domains' },
      { status: 500 }
    )
  }
}