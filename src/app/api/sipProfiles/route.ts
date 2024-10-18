import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const sipProfiles = await prisma.pbx_sip_profiles.findMany({});
    return NextResponse.json(sipProfiles);
  } catch (error) {
    console.error('Error fetching SIP profiles:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}