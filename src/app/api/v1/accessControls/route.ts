import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const accessControls = await prisma.pbx_access_controls.findMany({});
    return NextResponse.json(accessControls);
  } catch (error) {
    console.error('Error fetching SIP profiles:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}