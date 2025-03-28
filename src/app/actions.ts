'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

import { createUser } from "@/lib/db/queries"
import type { FirebaseAuthUser, DatabaseUserInput, SignUpResult } from "@/lib/db/types"
import { cacheUserData, CacheKeys , getRedisClient } from "@/lib/db/redis-sync-cache"


const DEFAULT_TENANT_ID = 'default'


export async function addExtension(formData: FormData) {
  const extension = formData.get('extension') as string
  const password = formData.get('password') as string
  const domain_uuid = formData.get('domain_uuid') as string
  const user_context = formData.get('user_context') as string

  try {
    const newExtension = await prisma.pbx_extensions.create({
      data: {
        id: crypto.randomUUID(),
        extension,
        password,
        domain_uuid,
        user_context,
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

    revalidatePath('/dashboard/accounts/extensions')
    return { success: true, data: newExtension }
  } catch (error) {
    console.error('Error adding extension:', error)
    return { success: false, error: 'Failed to add extension' }
  }
}



export async function createDatabaseUser(firebaseUser: FirebaseAuthUser): Promise<SignUpResult> {
    //console.log("1. createDatabaseUser received:", JSON.stringify(firebaseUser, null, 2))

  if (!firebaseUser || typeof firebaseUser !== "object") {
    //console.error("2. Invalid input:", firebaseUser)
    return {
      success: false,
      error: {
        code: "INVALID_INPUT",
        message: "Invalid or missing Firebase user data",
      },
    }
  }

  try {
    const existingTenant = await prisma.pbx_domains.findUnique({
        where: { id: DEFAULT_TENANT_ID },
      })
  
      if (!existingTenant) {
        console.log("Creating default tenant...")
        await prisma.pbx_domains.create({
          data: {
            id: DEFAULT_TENANT_ID,
            name: 'LifeSprint',
            domain: 'lifesprintcare.ca',
            description: 'Default organization for new users',
            plan: 'basic',
            maxUsers: 300,
            active: true,
          },
        })
      }

    const userInput: DatabaseUserInput = {
      uid: firebaseUser.uid,
      email: firebaseUser.email,
      name: firebaseUser.displayName ?? null,
      avatar: firebaseUser.photoURL ?? null,
      tenantId: firebaseUser.tenantId || 'default',
      isAdmin: true,
      disabled: firebaseUser.disabled ?? false,
      phoneNumber: firebaseUser.phoneNumber ?? null,
      emailVerified: firebaseUser.emailVerified ?? false,
      CreatedAt: firebaseUser.metadata.creationTime ? new Date(firebaseUser.metadata.creationTime) : new Date(),
      LastSignInAt: firebaseUser.metadata.lastSignInTime 
        ? new Date(firebaseUser.metadata.lastSignInTime)
        : new Date(),
    }
    //console.log("3. Transformed to DatabaseUserInput:", JSON.stringify(userInput, null, 2))

    const user = await createUser(userInput)
   // console.log("4. Database user created:", JSON.stringify(user, null, 2))

    if (!user) {
        throw new Error("No user returned from database creation")
      }

    return {
      success: true,
      user: {
        uid: user.uid,
        email: user.email,
        tenantId: user.tenantId,
        emailVerified: user.emailVerified,
      },
    }
  } catch (error) {
    console.error("5. Error in createDatabaseUser:", error)
    return {
      success: false,
      error: {
        code: "DB_ERROR",
        message: error instanceof Error ? error.message : "Failed to create user in database",
      },
    }
  }
}


export async function verifyDatabaseUser(uid: string, tenantId: string): Promise<{
  success: boolean;
  user?: {
    uid: string;
    email: string;
    name: string | null;
    avatar: string | null;
    tenantId: string;
    isAdmin: boolean;
    emailVerified: boolean;
    disabled: boolean;
    updatedAt: Date;
  };
  error?: {
    code: string;
    message: string;
  };
}> {
  try {
    const client = await getRedisClient();
    const cachedUser = await client.hGetAll(CacheKeys.USER_DATA(tenantId, uid));

    let dbUser;

    if (Object.keys(cachedUser).length > 0) {
      dbUser = {
        uid: cachedUser.uid,
        email: cachedUser.email,
        name: cachedUser.name,
        avatar: cachedUser.avatar,
        tenantId: cachedUser.tenantId,
        isAdmin: cachedUser.isAdmin === 'true',
        emailVerified: true,
        disabled: cachedUser.disabled === 'true',
        updatedAt: new Date(parseInt(cachedUser.lastActive))
      };
    } else {
      
    dbUser = await prisma.users.findUnique({
      where: { uid },
      select: {
        uid: true,
        email: true,
        name: true,
        avatar: true,
        tenantId: true,
        isAdmin: true,
        emailVerified: true,
        disabled: true,
        updatedAt: true
      }
    })

    if (dbUser) {
      // Cache the user data for next time
      await cacheUserData({
        uid: dbUser.uid,
        tenantId: dbUser.tenantId,
        name: dbUser.name || '',
        email: dbUser.email,
        avatar: dbUser.avatar || '',
        lastActive: dbUser.updatedAt.getTime(),
        status: 'online',
        isAdmin: dbUser.isAdmin,
        disabled: dbUser.disabled,
      });
    }
  }

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

