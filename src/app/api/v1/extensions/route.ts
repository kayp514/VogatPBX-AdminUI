import { NextRequest, NextResponse } from 'next/server'
import { listExtensions, createExtension, updateExtension, deleteExtension } from '@/lib/db/queries'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  try {
    const extensions = await listExtensions();
    return NextResponse.json(extensions)
  } catch (error) {
    console.error('Error fetching Extensions:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' }, 
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const newExtension = await createExtension(data);
    return NextResponse.json(newExtension, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' }, 
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
  ) {
  try {
    const data = await request.json()
    const updatedExtension = await updateExtension(params.id, {
      ...data,
      updated: new Date(),
      updated_by: 'system',
    })
    return NextResponse.json(updatedExtension)
  } catch (error) {
    console.error('Error updating extension:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await deleteExtension(params.id)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting extension:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' }, 
      { status: 500 }
    );
  }
}