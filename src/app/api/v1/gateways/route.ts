import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const gateways = await prisma.pbx_gateways.findMany();
    return NextResponse.json(gateways);
  } catch (error) {
    console.error('Error fetching gateways:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}