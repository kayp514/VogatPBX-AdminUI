import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const extensions = await prisma.pbx_extensions.findMany();
    return NextResponse.json(extensions);
  } catch (error) {
    console.error('Error fetching extensions:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}