import { NextResponse } from 'next/server';
import { listAccessControls } from '@/lib/db/queries';

export async function GET() {
  try {
    const accessControls = await listAccessControls();
    return NextResponse.json(accessControls);
  } catch (error) {
    console.error('Error fetching SIP profiles:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' }, 
      { status: 500 }
    );
  }
}