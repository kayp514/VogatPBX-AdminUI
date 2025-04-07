import { NextResponse } from 'next/server'
import { getDomain, updateDomain, deleteDomain } from '@/lib/db/queries'

export async function GET(
  request: Request,
  {params}: { params: Promise<{ domainId: string }> }
) {
  try {
    const domainId  = (await params).domainId;
    
    if (!domainId) {
      return NextResponse.json(
        { error: 'Domain ID is required' }, 
        { status: 400 }
      );
    }

    const domain = await getDomain(domainId);

    if (!domain) {
      return NextResponse.json(
        { error: 'Domain not found' }, 
        { status: 404 }
      );
    }

    const response = {
      ...domain,
      settings: domain.domain_settings.map(setting => ({
        id: setting.id,
        category: setting.category,
        subcategory: setting.subcategory,
        value_type: setting.value_type,
        value: setting.value,
        sequence: setting.sequence,
        enabled: setting.enabled,
        description: setting.description
      }))
    };

    return NextResponse.json(response);

  } catch (error) {
    console.error('Error fetching domain:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' }, 
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { domainId: string } }
) {
  try {
    const data = await request.json();
    
    const domain = await updateDomain(params.domainId, data);
    
    return NextResponse.json(domain);

  } catch (error) {
    console.error('Error updating domain:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' }, 
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { domainId: string } }
) {
  try {
    await deleteDomain(params.domainId);
    
    return NextResponse.json(
      { message: 'Domain deleted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error deleting domain:', error);
    

    return NextResponse.json(
      { error: 'Internal Server Error' }, 
      { status: 500 }
    );
  }
}