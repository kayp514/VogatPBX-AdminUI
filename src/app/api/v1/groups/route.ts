import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const groups = await prisma.auth_group.findMany();
    return NextResponse.json(groups);
  } catch (error) {
    console.error('Error fetching domains:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}