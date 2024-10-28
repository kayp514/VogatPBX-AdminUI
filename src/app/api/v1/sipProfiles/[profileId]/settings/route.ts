import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'
import { prisma as prismaImport} from '@/lib/prisma';

const prisma = prismaImport as PrismaClient

export async function GET(
  request: Request,
  { params }: { params: { profileId: string } }
) {
  const { profileId } = params;

  if (!profileId) {
    return NextResponse.json({ error: 'Profile ID is required' }, { status: 400 });
  }

  try {
    const settings = await prisma.pbx_sip_profile_settings.findMany({
      where: { sip_profile_id: profileId }
    });

    return NextResponse.json(settings);
  } catch (error) {
    console.error('Error fetching SIP profile settings:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}