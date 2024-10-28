import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'
import { prisma as prismaImport} from '@/lib/prisma';

const prisma = prismaImport as PrismaClient

export async function GET(
  request: Request,
  { params }: { params: { gatewayId: string } }
) {
  const { gatewayId } = params;

  if (!gatewayId) {
    return NextResponse.json({ error: 'Gateway ID is required' }, { status: 400 });
  }

  try {
    // Fetch the SIP profile
    const gateway = await prisma.pbx_gateways.findUnique({
      where: { id: gatewayId }
    });

    if (!gateway) {
      return NextResponse.json({ error: 'Gateway not found' }, { status: 404 });
    }

    // Combine profile and domains data
    const response = {
      ...gateway,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error fetching Gateway:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}