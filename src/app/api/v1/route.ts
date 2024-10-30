import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  const apiDirectory = path.join(process.cwd(), 'src', 'app', 'api', 'v1')
  
  try {
    const files = fs.readdirSync(apiDirectory)
    const apiEndpoints = files
      .filter(file => file !== 'route.ts') // Exclude this file
      .map(file => ({
        endpoint: path.parse(file).name,
        description: `API endpoint for ${path.parse(file).name}`
      }))

    return NextResponse.json(apiEndpoints)
  } catch (error) {
    console.error('Error reading API directory:', error)
    return NextResponse.json({ error: 'Failed to fetch API endpoints' }, { status: 500 })
  }
}