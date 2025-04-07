import { NextResponse } from 'next/server';
import { getGateway } from '@/lib/db/queries';


export async function GET(
  request: Request,
  {params}: { params: Promise<{ gatewayId: string }> }
) {
  try {
    const gatewayId  = (await params).gatewayId
    if (!gatewayId) {
      return NextResponse.json(
        { error: 'Gateway ID is required' }, 
        { status: 400 }
      );
    }

    const gateway = await getGateway(gatewayId);

    if (!gateway) {
      return NextResponse.json(
        { error: 'Gateway not found' }, 
        { status: 404 }
      );
    }

    return NextResponse.json(gateway);

  } catch (error) {
    console.error('Error fetching gateway:', error);
    

    return NextResponse.json(
      { error: 'Internal Server Error' }, 
      { status: 500 }
    );
  }
}
