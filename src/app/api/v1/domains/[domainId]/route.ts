import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'
import { prisma as prismaImport} from '@/lib/prisma';

const prisma = prismaImport as PrismaClient

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ domainId: string }> }
) {
  const { domainId } = await context.params;
  const isSubdomain = request.nextUrl.searchParams.get('isSubdomain') === 'true';

  if (!domainId) {
    return NextResponse.json({ error: 'Domain ID is required' }, { status: 400 });
  }

  try {
    // Fetch the domain
    const domain = await prisma.pbx_domains.findFirst({
      where: isSubdomain
        ? { name: domainId }
        : { OR: [{ id: domainId }, { name: domainId }] }
    });

    if (!domain) {
      return NextResponse.json({ error: 'Domain not found' }, { status: 404 });
    }

    // Return the domain data
    const response = {
    ...domain,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error fetching Domain:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}