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
  displayName: string | null
  firstName: string | null
  lastName: string | null
  avatar: string | null
  tenantId: string
  isSuperuser: boolean
  isAdmin: boolean
  isStaff: boolean
  disabled: boolean
  phoneNumber: string | null
  emailVerified: boolean
  createdAt: Date | null
  lastSignInAt: Date | null
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

export interface Extension {
  id: string;
  extension: string;
  effective_caller_id_name: string;
  effective_caller_id_number: string;
  call_group: string;
  user_context: string;
  enabled: string;
}


export interface Gateway {
  id: string;
  gateway: string;
  proxy: string;
  context: string;
  status: string;
  action: string;
  state: string;
  description: string;
  enabled: string;
}

export interface Bridge {
  id: string;
  name: string;
  destination: string;
  enabled: boolean;
}

export interface SipProfile {
  id: string;
  name: string;
  hostname: string;
  enabled: string;
  description: string;
}

  