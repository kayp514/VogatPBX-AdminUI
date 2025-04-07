import { NextResponse } from 'next/server';
import { getGateway } from '@/lib/db/queries';


export async function GET(
  request: Request,
  { params }: { params: { gatewayId: string } }
) {
  try {
    if (!params.gatewayId) {
      return NextResponse.json(
        { error: 'Gateway ID is required' }, 
        { status: 400 }
      );
    }

    const gateway = await getGateway(params.gatewayId);

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
