import { NextResponse } from 'next/server';
import { 
  listTenants, 
  createTenant, 
  updateTenant, 
  deleteTenant,
  getTenant 
} from '@/lib/db/queries';

export async function GET() {
    try{
        const tenants = await listTenants();
        return NextResponse.json(tenants);
    } catch (error) {
        console.error('Error fetching tenants:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' }, 
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        if (!body.id || !body.name || !body.domain) {
            return NextResponse.json(
              { error: 'Missing required fields: id, name, and domain are required' },
              { status: 400 }
            );
        }

        const existingTenant = await getTenant(body.id);
        if (existingTenant) {
          return NextResponse.json(
            { error: 'Tenant with this ID already exists' },
            { status: 409 }
          );
        }
        
        const tenant = await createTenant(body);
        return NextResponse.json(
            tenant,
            { status: 201 }
        );

    } catch (error) {
        console.error('Error creating tenant:', error);
        
        if (error instanceof Error) {
          if (error.message.includes('Unique constraint')) {
            return NextResponse.json(
              { error: 'Tenant with this name or domain already exists' },
              { status: 409 }
            );
          }
        }
    
        return NextResponse.json(
          { error: 'Internal Server Error' },
          { status: 500 }
        );
      }
    }


export async function PATCH(request: Request) {
    try {
        const body = await request.json();
        const { id, ...updateData } = body;

        if (!id) {
            return NextResponse.json(
              { error: 'Tenant ID is required' },
              { status: 400 }
            );
          
        }

        const existingTenant = await getTenant(id);
        if (!existingTenant) {
          return NextResponse.json(
            { error: 'Tenant not found' },
            { status: 404 }
          );
        }

        const updatedTenant = await updateTenant(id, updateData);
        return NextResponse.json(updatedTenant);

  } catch (error) {
    console.error('Error updating tenant:', error);
    
    if (error instanceof Error) {
      if (error.message.includes('Unique constraint')) {
        return NextResponse.json(
          { error: 'Tenant with this name or domain already exists' },
          { status: 409 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}


export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Tenant ID is required' },
        { status: 400 }
      );
    }

    const existingTenant = await getTenant(id);
    if (!existingTenant) {
      return NextResponse.json(
        { error: 'Tenant not found' },
        { status: 404 }
      );
    }

    await deleteTenant(id);
    
    return NextResponse.json(
      { message: 'Tenant deleted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error deleting tenant:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}