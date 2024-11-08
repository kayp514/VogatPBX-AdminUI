import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'
import { prisma as prismaImport} from '@/lib/prisma';

const prisma = prismaImport as PrismaClient

export async function GET(
  request: NextRequest,
  context: { params: { domainId: string } }
) {
  const { domainId } = await context.params;
  console.log('Domain ID from Route:', domainId)

  if (!domainId) {
    return NextResponse.json({ error: 'Domain ID is required' }, { status: 400 });
  }

  try {
    // Fetch the domain
    let domain = await prisma.pbx_domains.findFirst({
      where: { name: domainId }
    });

    // If not found by name, try to fetch by ID
    if (!domain) {
      domain = await prisma.pbx_domains.findUnique({
        where: { id: domainId }
      });
    }

    if (!domain) {
      return NextResponse.json({ error: 'Domain not found' }, { status: 404 });
    }

    const response = {
      ...domain,
      };

    // Return the domain data
    return NextResponse.json(response);
  } catch (error) {
    console.error('Error fetching Domain:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}