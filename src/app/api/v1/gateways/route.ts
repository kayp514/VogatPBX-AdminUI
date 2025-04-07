import { NextResponse } from 'next/server';
import { 
  updateGateway, 
  deleteGateway, 
  listGateways 
} from '@/lib/db/queries';

export async function GET() {
  try {
    const gateways = await listGateways();
    return NextResponse.json(gateways);
  } catch (error) {
    console.error('Error fetching gateways:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' }, 
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { gatewayId: string } }
) {
  try {
    const data = await request.json();
    
    const gateway = await updateGateway(params.gatewayId, data);
    
    return NextResponse.json(gateway);

  } catch (error) {
    console.error('Error updating gateway:', error);
    

    return NextResponse.json(
      { error: 'Internal Server Error' }, 
      { status: 500 }
    );
  }
}


export async function DELETE(
  request: Request,
  { params }: { params: { gatewayId: string } }
) {
  try {
    await deleteGateway(params.gatewayId);
    
    return NextResponse.json(
      { message: 'Gateway deleted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error deleting gateway:', error);
    

    return NextResponse.json(
      { error: 'Internal Server Error' }, 
      { status: 500 }
    );
  }
}