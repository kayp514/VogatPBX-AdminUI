import { NextResponse } from 'next/server';
import { listEmailTemplates } from '@/lib/db/queries';


export async function GET() {
  try {
    const emailTemplates = await listEmailTemplates();
    return NextResponse.json(emailTemplates);
  } catch (error) {
    console.error('Error fetching email templates:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' }, 
      { status: 500 }
    );
  }
}