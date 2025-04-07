import { NextResponse } from 'next/server'
import { 
  createUserWithPbx,
  listPbxUsers,
  getPbxUser,
  PbxupdateUser,
  PbxdeleteUser,
  verifyAuthUser
} from '@/lib/db/queries'

export async function GET() {
  try {
    const pbxUsers = await listPbxUsers();
    return NextResponse.json(pbxUsers);
  } catch (error) {
    console.error('Error fetching PBX users:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' }, 
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { authUserData, pbxUserData } = body;

    if (!authUserData?.email || authUserData?.uid || authUserData?.tenantId)  {
      return NextResponse.json(
        { error: 'Missing required auth user fields' }, 
        { status: 400 }
      );
    }

    const verifyResult = await verifyAuthUser(authUserData.uid, authUserData.tenantId);
    if (verifyResult.exists) {
      return NextResponse.json(
        { error: 'User already exists' }, 
        { status: 400 }
      );
    }

    const { authUser, pbxUser } = await createUserWithPbx(
      authUserData,
      pbxUserData
    );

    return NextResponse.json(
      { authUser, pbxUser },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('Error creating user:', error);
    
    if (error instanceof Error) {
      if (error.message.includes('Unique constraint')) {
        return NextResponse.json(
          { error: 'User with this email or username already exists' },
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

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, ...updateData } = body;

    if (!id) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    const existingUser = await getPbxUser(BigInt(id));
    if (!existingUser) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    const updatedUser = await PbxupdateUser(BigInt(id), updateData);
    return NextResponse.json(updatedUser);

  } catch (error) {
    console.error('Error updating user:', error);
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
        { error: 'User ID is required' },
        { status: 400 }
      );
    }


    const existingUser = await getPbxUser(BigInt(id));
    if (!existingUser) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    await PbxdeleteUser(BigInt(id));
    
    return NextResponse.json(
      { message: 'User deleted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error deleting user:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}