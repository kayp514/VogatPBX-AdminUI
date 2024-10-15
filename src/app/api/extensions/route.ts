import { NextResponse } from 'next/server'
import { fetchExtensions } from '@/lib/extensionService'

export async function GET() {
  try {
    const extensions = await fetchExtensions()
    return NextResponse.json(extensions)
  } catch (error) {
    console.error('Error in GET /api/extensions:', error)
    return NextResponse.json(
      { error: 'An error occurred while fetching extensions' },
      { status: 500 }
    )
  }
}