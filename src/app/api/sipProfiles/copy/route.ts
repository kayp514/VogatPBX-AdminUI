// File: app/api/sipProfiles/copy/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const { originalProfileId, newProfileName } = await request.json()

    if (!originalProfileId || !newProfileName) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 })
    }

    // Start a transaction
    const result = await prisma.$transaction(async (prisma) => {
      // 1. Get the original profile
      const originalProfile = await prisma.pbx_sip_profiles.findUnique({
        where: { id: originalProfileId },
      })

      if (!originalProfile) {
        throw new Error('Original profile not found')
      }

      // 2. Create a new profile
      const newProfileId = uuidv4()
      const newProfile = await prisma.pbx_sip_profiles.create({
        data: {
          id: newProfileId,
          name: newProfileName,
          hostname: originalProfile.hostname,
          enabled: originalProfile.enabled,
          description: `Copy of ${originalProfile.name}`,
          created: new Date(),
          updated: new Date(),
          synchronised: null,
          updated_by: 'system', // You might want to pass the user who initiated the copy
        },
      })

      // 3. Copy profile settings
      const originalSettings = await prisma.pbx_sip_profile_settings.findMany({
        where: { sip_profile_id: originalProfileId },
      })

      await Promise.all(
        originalSettings.map((setting) =>
          prisma.pbx_sip_profile_settings.create({
            data: {
              id: uuidv4(),
              name: setting.name,
              value: setting.value,
              enabled: setting.enabled,
              description: setting.description,
              created: new Date(),
              updated: new Date(),
              synchronised: null,
              updated_by: 'system', // You might want to pass the user who initiated the copy
              sip_profile_id: newProfileId,
            },
          })
        )
      )

      // 4. Copy profile domains
      const originalDomains = await prisma.pbx_sip_profile_domains.findMany({
        where: { sip_profile_id: originalProfileId },
      })

      await Promise.all(
        originalDomains.map((domain) =>
          prisma.pbx_sip_profile_domains.create({
            data: {
              id: uuidv4(),
              name: domain.name,
              alias: domain.alias,
              parse: domain.parse,
              created: new Date(),
              updated: new Date(),
              synchronised: null,
              updated_by: 'system', // You might want to pass the user who initiated the copy
              sip_profile_id: newProfileId,
            },
          })
        )
      )

      return newProfile
    })

    return NextResponse.json({ message: 'Profile copied successfully', newProfile: result }, { status: 200 })
  } catch (error: any) {
    console.error('Error copying SIP profile:', error)
    return NextResponse.json({ message: 'Error copying SIP profile', error: error.message }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}