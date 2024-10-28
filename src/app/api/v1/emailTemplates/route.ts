import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';


export async function GET() {
  try {
    const emailTemplates = await prisma.pbx_email_templates.findMany();
    return NextResponse.json(emailTemplates);
  } catch (error) {
    console.error('Error fetching email templates:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}