export interface FirebaseAuthUser {
    uid: string
    email: string
    displayName?: string | null
    photoURL?: string | null
    tenantId: string
    emailVerified: boolean
    disabled: boolean
    phoneNumber: string | null
    metadata: {
        creationTime: string | undefined
        lastSignInTime: string | undefined
      }
    }

  
export interface DatabaseUserInput {
  uid: string
  email: string
  name: string | null
  avatar: string | null
  tenantId: string
  isAdmin: boolean
  disabled: boolean
  phoneNumber: string | null
  emailVerified: boolean
  CreatedAt: Date | null
  LastSignInAt: Date | null
}
  
export interface SignUpResult {
    success: boolean
    user?: {
      uid: string
      email: string
      tenantId: string
      emailVerified: boolean
    }
    error?: {
      code: string
      message: string
    }
  }

  export interface User {
    uid: string
    name: string
    email: string
    avatar?: string
}


  