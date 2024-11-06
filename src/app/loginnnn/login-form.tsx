'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { LogIn, AlertCircle } from "lucide-react"

const AUTH_APP_URL = process.env.NEXT_PUBLIC_AUTH_APP_URL || 'https://firebase-auth-data.vercel.app'

const errorMessages = {
  'no_token': 'Authentication failed. Please try again.',
  'auth_failed': 'Unable to verify your credentials.',
  'default': 'An error occurred during sign in.'
}

export default function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const errorCode = searchParams.get('error')
    if (errorCode) {
      setError(errorMessages[errorCode as keyof typeof errorMessages] || errorMessages.default)
    }
  }, [searchParams])

  const handleLogin = () => {
    const redirectUrl = searchParams.get('redirect') || '/dashboard'
    
    // Use window.location for client-side URL construction
    const protocol = window.location.protocol
    const host = window.location.host
    
    // Construct the callback URL with the final redirect destination
    const callbackUrl = `${protocol}//${host}/auth/callback`
    const encodedCallback = encodeURIComponent(callbackUrl)
    
    // Construct the login URL
    const encodedRedirect = encodeURIComponent(redirectUrl)
    const loginUrl = `${AUTH_APP_URL}/api/auth/login?callback=${encodedCallback}&redirect=${encodedRedirect}`
    
    // Use window.location.href for full page navigation
    window.location.href = loginUrl
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Image
              src="/logoPBX.png?height=64&width=64"
              alt="VogatPBX Logo"
              width={64}
              height={64}
              className="rounded-lg"
            />
          </div>
          <CardTitle className="text-2xl font-bold">Welcome to VogatPBX</CardTitle>
          <CardDescription>
            Sign in to access your PBX dashboard
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <Button 
            onClick={handleLogin} 
            className="w-full flex items-center justify-center gap-2"
            size="lg"
          >
            <LogIn className="w-5 h-5" />
            Sign in to your account
          </Button>
          <p className="text-center text-sm text-muted-foreground">
            You will be redirected to our secure authentication service
          </p>
        </CardContent>
      </Card>
      
      <footer className="mt-8 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} VogatPBX. All rights reserved.</p>
      </footer>
    </div>
  )
}