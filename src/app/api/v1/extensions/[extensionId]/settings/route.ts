import { NextRequest,NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'
import { prisma as prismaImport} from '@/lib/prisma';

const prisma = prismaImport as PrismaClient

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ extensionId: string }> }
) {
  const { extensionId } = await context.params;

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
    //const response = {
    //  ...extension,
    //};

    return NextResponse.json(extension);
  } catch (error) {
    console.error('Error fetching Extension:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}