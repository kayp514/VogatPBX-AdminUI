import type { pbx_domains } from '@prisma/client'

import { prisma }from "../prisma"
import type { DatabaseUserInput } from "@/lib/db/types"

const isDevelopment = process.env.NODE_ENV === 'development'

const API_BASE_URL = isDevelopment 
  ? 'http://localhost:3000' 
  : process.env.NEXT_PUBLIC_API_URL || 'https://vgtpbx.dev'


  
export async function createUser(input: DatabaseUserInput | null) {
      console.log("user: createUser received input:", input); 
    if (!input) {
      console.error("user: Input is null in createUser");
      throw new Error("User input data is required")
    }
  
  
    try {
      // Create a sanitized version of the input data
      const sanitizedData = {
          uid: input.uid,
          email: input.email.toLowerCase(),
          name: input.name,
          avatar: input.avatar,
          tenantId: input.tenantId,
          isAdmin: input.isAdmin,
          phoneNumber: input.phoneNumber,
          emailVerified: input.emailVerified,
          CreatedAt: input.CreatedAt,
          LastSignInAt: input.LastSignInAt,
          updatedAt: new Date(),
        }
  
      console.log("user: Cleaned user data:", sanitizedData)
  
  
      const user = await prisma.users.create({
        data: sanitizedData,
        select: {
          uid: true,
          email: true,
          name: true,
          avatar: true,
          tenantId: true,
          isAdmin: true,
          phoneNumber: true,
          emailVerified: true,
          updatedAt: true,
          CreatedAt: true,
          LastSignInAt: true,
        },
      })
  
      if (!user) {
        throw new Error("Failed to create user: No user returned from database")
      }
  
      console.log("Prisma create operation returned:", user); 
  
      return user
    } catch (error) {
      console.error("Detailed error in createUser:", {
          error,
          errorMessage: error instanceof Error ? error.message : "Unknown error",
          errorStack: error instanceof Error ? error.stack : undefined,
        })
      if (error instanceof Error) {
        if (error.message.includes("Unique constraint")) {
          throw new Error("User with this email or uid already exists")
        }
        if (error.message.includes("Foreign key constraint")) {
          throw new Error("Invalid tenant ID")
        }
        throw new Error(`Failed to create user: ${error.message}`)
      }
      throw new Error("Failed to create user: Unknown error")
    }
  }
  
  
export async function verifyDatabaseUser(uid: string): Promise<{
    success: boolean;
    user?: {
      uid: string;
      email: string;
      name: string | null;
      tenantId: string;
      isAdmin: boolean;
      emailVerified: boolean;
      disabled: boolean;
    };
    error?: {
      code: string;
      message: string;
    };
  }> {
    try {
      const dbUser = await prisma.users.findUnique({
        where: { uid },
        select: {
          uid: true,
          email: true,
          name: true,
          tenantId: true,
          isAdmin: true,
          emailVerified: true,
          disabled: true,
        }
      })
  
      if (!dbUser) {
        return {
          success: false,
          error: {
            code: 'USER_NOT_FOUND',
            message: 'User not found in database'
          }
        }
      }
  
      if (dbUser.disabled) {
        return {
          success: false,
          error: {
            code: 'USER_INACTIVE',
            message: 'User account is inactive'
          }
        }
      }
  
      return {
        success: true,
        user: dbUser
      }
    } catch (error) {
      console.error('Error verifying database user:', error)
      return {
        success: false,
        error: {
          code: 'VERIFICATION_ERROR',
          message: error instanceof Error ? error.message : 'Failed to verify user'
        }
      }
    }
  }
  
  

export async function getDomains(): Promise<pbx_domains[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/domains`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store'
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error('Error fetching domains:', error)
    throw error
  }
}

export async function getDomain(domainId: string): Promise<pbx_domains | null> {
  try {
    console.log('api base from getdomain lib page', API_BASE_URL)
    const response = await fetch(`${API_BASE_URL}/api/v1/domains/${domainId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store'
    })

    if (!response.ok) {
      if (response.status === 404) {
        return null
      }
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error('Error fetching domain:', error)
    throw error
  }
}