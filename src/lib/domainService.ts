import { PrismaClient } from '@prisma/client'
import type { Domain } from '@prisma/client'

const prisma = new PrismaClient()

export interface DomainInput {
  name: string;
  portal_name: string;
  home_switch: string;
  enabled: string;
  description?: string;
}

export async function createDomain(domainData: DomainInput): Promise<Domain> {
  const { name, portal_name, home_switch, enabled, description } = domainData

  const domain = await prisma.domain.create({
    data: {
      name,
      portal_name,
      home_switch,
      enabled,
      description,
      updated_by: 'system',
    },
  })

  return domain
}

export async function fetchDomains() {
  try {
    const domains = await prisma.domain.findMany({
      select: {
        id: true,
        name: true,
        portal_name: true,
        home_switch: true,
        description: true,
        enabled: true,
      },
      orderBy: {
        name: 'asc',
      },
    })

    console.log('Raw domains data:', JSON.stringify(domains, null, 2))

    return domains.map(domain => ({
      id: domain.id,
      name: domain.name,
      portal_name: domain.portal_name,
      home_switch: domain.home_switch,
      description: domain.description,
      status: domain.enabled,
    }))
  } catch (error) {
    console.error('Error fetching domains:', error)
    throw error
  }
}