import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  try {
    const extensions = await prisma.pbx_extensions.findMany({
      orderBy: {
        created: 'asc',
      },
    })
    return NextResponse.json(extensions)
  } catch (error) {
    console.error('Error fetching extensions:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const newExtension = await prisma.pbx_extensions.create({
      data: {
        ...data,
        id: crypto.randomUUID(),
        created: new Date(),
        updated: new Date(),
        updated_by: 'system',
        enabled: 'true',
        directory_visible: 'true',
        directory_exten_visible: 'true',
        call_screen_enabled: 'false',
        do_not_disturb: 'false',
        forward_all_enabled: 'false',
        forward_busy_enabled: 'false',
        forward_no_answer_enabled: 'false',
        forward_user_not_registered_enabled: 'false',
        follow_me_enabled: 'false',
        force_ping: 'false',
      },
    })
    return NextResponse.json(newExtension, { status: 201 })
  } catch (error) {
    console.error('Error creating extension:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  try {
    const { id, ...data } = await request.json()
    const updatedExtension = await prisma.pbx_extensions.update({
      where: { id },
      data: {
        ...data,
        updated: new Date(),
      },
    })
    return NextResponse.json(updatedExtension)
  } catch (error) {
    console.error('Error updating extension:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json()
    await prisma.pbx_extensions.delete({
      where: { id },
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting extension:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}