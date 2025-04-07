import { NextResponse } from 'next/server'
import { listDomains } from '@/lib/db/queries'

export async function GET() {
  try {
    const domains = await listDomains();
    return NextResponse.json(domains);
  } catch (error) {
    console.error('Error fetching domains:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' }, 
      { status: 500 }
    );
  }
}