import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const { email, companyName, userUuid, domainUrl, role } = await request.json()

    // Validate required fields
    if (!email || !companyName || !userUuid || !domainUrl || !role) {
      console.error('Missing required fields:', { email, companyName, userUuid, domainUrl, role })
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Create a new domain
    const domain = await prisma.pbx_domains.create({
      data: {
        id: uuidv4(), // Generate a UUID for the domain
        name: domainUrl,
        enabled: 'true', // Set as string 'true' as per the model
        description: `Domain for ${companyName}`,
        updated_by: 'system', // Set a default value
        home_switch: 'default', // Set a default value
        portal_name: companyName,
        created: new Date(),
        updated: new Date()
      },
    })
    console.log('Domain created:', domain)

    // Create a new user
    const user = await prisma.auth_user.create({
      data: {
        password: 'placeholder', // We'll update this later with a hashed value
        is_superuser: false,
        username: email,
        first_name: '',
        last_name: '',
        email: email,
        is_staff: false,
        is_active: true,
        date_joined: new Date(),
        external_uuid: userUuid,
      },
    })
    console.log('User created:', user)

    console.log('creating PBX user...')
    // Create PBX user
    const pbxUser = await prisma.pbx_users.create({
      data: {
        id: user.id,
        user_uuid: uuidv4(), // Generate a UUID for the user
        username: email,
        email: email,
        status: '',
        enabled: 'true', // Set as string 'true' as per the model
        updated_by: 'system',
        domain_id_id: domain.id,
        user_id: user.id,
        created: new Date(),
        updated: new Date()
      },
    })
    console.log('PBX user created:', pbxUser)

    // Create auth token
    // We'll store the external auth ID as the key
    await prisma.authtoken_token.create({
      data: {
        key: userUuid,
        created: new Date(),
        user_id: user.id,
      },
    })
    console.log('Auth token created')

    console.log('Preparing response...')

    const response = {
      userId: user.id,
      domainId: domain.id,
      pbxUserId: user.id,
      externalUuid: userUuid,
    }
    console.log('Response:', response)

    return NextResponse.json(response)
  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json({ error: 'Failed to create account', details: error instanceof Error ? error.message : String(error) }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}