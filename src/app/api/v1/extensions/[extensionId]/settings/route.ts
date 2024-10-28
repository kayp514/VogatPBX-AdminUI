import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'
import { prisma as prismaImport} from '@/lib/prisma';

const prisma = prismaImport as PrismaClient

export async function GET(
  request: Request,
  { params }: { params: { extensionId: string } }
) {
  const { extensionId } = params;

  if (!extensionId) {
    return NextResponse.json({ error: 'Extension ID is required' }, { status: 400 });
  }

  try {
    // Fetch the SIP profile
    const extension = await prisma.pbx_extensions.findUnique({
      where: { id: extensionId }
    });

    if (!extension) {
      return NextResponse.json({ error: 'Extension not found' }, { status: 404 });
    }

    // Combine profile and domains data
    const response = {
      ...extension,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error fetching Extension:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}