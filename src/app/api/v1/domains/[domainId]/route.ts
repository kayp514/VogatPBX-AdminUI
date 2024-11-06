import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'
import { prisma as prismaImport} from '@/lib/prisma';

const prisma = prismaImport as PrismaClient

export async function GET(
  request: Request,
  { params }: { params: { domainId: string } }
) {
  const { domainId } = params;

  if (!domainId) {
    return NextResponse.json({ error: 'Domain ID is required' }, { status: 400 });
  }

  try {
    // Fetch the SIP profile
    const domain = await prisma.pbx_domains.findUnique({
      where: { id: domainId }
    });

    if (!domain) {
      return NextResponse.json({ error: 'Domain not found' }, { status: 404 });
    }

    // Combine profile and domains data
   // const response = {
   //   ...domain,
   // };

    return NextResponse.json(domain);
  } catch (error) {
    console.error('Error fetching Domain:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}