import { NextRequest,NextResponse } from 'next/server';
import { 
  getExtension, 
  updateExtension, 
  deleteExtension 
} from '@/lib/db/queries'


export async function GET(
  request: NextRequest,
  { params }: { params: { extensionId: string } }
) {
  try {
    if (!params.extensionId) {
      return NextResponse.json(
        { error: 'Extension ID is required' }, 
        { status: 400 }
      );
    }

    const extension = await getExtension(params.extensionId);

    if (!extension) {
      return NextResponse.json(
        { error: 'Extension not found' }, 
        { status: 404 }
      );
    }

    const response = {
      ...extension,
      users: extension.pbx_extension_users.map(user => ({
        id: user.id,
        user_id: user.user_uuid,
        extension_id: user.extension_uuid,
        created: user.created,
        updated: user.updated
      }))
    };

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' }, 
      { status: 500 });
  }
}