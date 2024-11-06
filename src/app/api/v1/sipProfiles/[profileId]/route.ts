import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'
import { prisma as prismaImport} from '@/lib/prisma';

const prisma = prismaImport as PrismaClient

export async function GET(
  request: Request,
  context:{ params: Promise<{ profileId: string }> }
) {
  const { profileId } = await context.params;

  if (!profileId) {
    return NextResponse.json({ error: 'Profile ID is required' }, { status: 400 });
  }

  try {
    // Fetch the SIP profile
    const profile = await prisma.pbx_sip_profiles.findUnique({
      where: { id: profileId }
    });

    if (!profile) {
      return NextResponse.json({ error: 'SIP profile not found' }, { status: 404 });
    }

    // Fetch the domains for this profile
    const domains = await prisma.pbx_sip_profile_domains.findMany({
      where: { sip_profile_id: profileId }
    });

    // Combine profile and domains data
    const response = {
      ...profile,
      domains: domains
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error fetching SIP profile and domains:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}