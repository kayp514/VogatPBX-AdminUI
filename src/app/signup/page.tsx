'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2 } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from '@/hooks/use-toast'
import { Toaster } from "@/components/ui/toaster"

const AUTH_APP_URL = process.env.NEXT_PUBLIC_AUTH_APP_URL || 'https://firebase-auth-data.vercel.app'
const APP_ID = process.env.NEXT_PUBLIC_APP_ID

export default function SignupPage() {
  const [companyName, setCompanyName] = useState('')
  const [hasWebsite, setHasWebsite] = useState<boolean | null>(null)
  const [companyWebsite, setCompanyWebsite] = useState('')
  const [domainUrl, setDomainUrl] = useState('')
  const [step, setStep] = useState(1)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [signupComplete, setSignupComplete] = useState(false)
  const [signupMessage, setSignupMessage] = useState('')
  const router = useRouter()
  const { toast } = useToast()
  const [authWindow, setAuthWindow] = useState<Window | null>(null)

  
  const generateDomainUrl = (name: string, website: string | null): string => {
    if (website) {
      const hostname = new URL(website).hostname
      const domainName = hostname.split('.')[0] // Get the part before the first dot
      return `${domainName}.vogat.com`
    } else {
      return `${name.toLowerCase().replace(/[^a-z0-9]/g, '')}.vgtpbx.dev`
    }
  }

  const handleCompanySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!companyName || hasWebsite === null) {
      setError("Please fill in all required fields")
      return
    }

    if (hasWebsite && !companyWebsite) {
      setError("Please enter your company website")
      return
    }

    try {
      const generatedDomainUrl = generateDomainUrl(companyName, hasWebsite ? companyWebsite : null)
      setDomainUrl(generatedDomainUrl)
      setStep(2)
    } catch (error) {
      setError("Invalid website URL. Please enter a valid URL including http:// or https://")
    }
  }

  const handleCreateUser = useCallback(() => {
    setIsLoading(true)
    setError(null)
    const redirectUrl = `${window.location.origin}/signup`
    const params = new URLSearchParams({
      appId: APP_ID || '',
      redirectUrl,
    })
    const authUrl = `${AUTH_APP_URL}/external-auth/signup?${params.toString()}`

    const newAuthWindow = window.open(authUrl, 'AuthWindow', 'width=500,height=600')

    if (newAuthWindow) {
      setAuthWindow(newAuthWindow)
      
      const checkWindow = setInterval(() => {
        if (newAuthWindow.closed) {
          clearInterval(checkWindow)
          setIsLoading(false)
          setAuthWindow(null)
          // The window was closed without receiving a message
          setError("Authentication window was closed. Please try again.")
        }
      }, 500)

      return () => {
        clearInterval(checkWindow)
      }
    } else {
      setError("Unable to open authentication window. Please ensure pop-ups are allowed.")
      setIsLoading(false)
      toast({
        title: 'Error',
        description: 'Unable to open authentication window. Please ensure pop-ups are allowed.',
        variant: 'destructive',
      })
    }
  }, [toast])

  const handleMessage = useCallback(async (event: MessageEvent) => {
    if (event.origin !== AUTH_APP_URL) return
    console.log('Received message:', event.data)
    
    if (event.data.type === 'SIGNUP_SUCCESS') {
      console.log('Signup successful, creating account...')
      setIsLoading(true)

      try {

        console.log('Full event.data:', event.data)

        const { email, userUuid, role } = event.data.data

        console.log('Extracted data:', { email, role, userUuid, companyName, domainUrl })
        
        if (!email || !companyName || !userUuid || !domainUrl || !role) {
          console.error('Missing required fields:', { email, companyName, userUuid, domainUrl, role })
          throw new Error('Missing required fields')
        }

        const response = await fetch('/api/v1/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            userUuid,
            companyName,
            role,
            domainUrl,
          }),
        })

        console.log('Response status:', response.status)
        const rawResponseText = await response.text()
        console.log('Raw response:', rawResponseText)
  
        let data
        try {
          data = JSON.parse(rawResponseText)
        } catch (parseError) {
          console.error('Error parsing JSON:', parseError)
          throw new Error('Invalid response from server')
        }

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || 'Response not Json')
        }

        //const data = await response.json()

        if (data.success) {
          console.log('Account created successfully')
          setSignupComplete(true)
          setSignupMessage('Your account has been successfully created!')
        } else {
          throw new Error(data.error || 'Failed to create account')
        }
      } catch (error) {
        console.error('Error creating account:', error)
        setError('Failed to create account. Please try again.')
        toast({
          title: 'Error',
          description: 'Failed to create your account. Please try again.',
          variant: 'destructive',
        })
      } finally {
        setIsLoading(false)
      }
    } else if (event.data.type === 'SIGNUP_ERROR') {
      setError(event.data.message || 'Authentication failed')
      setSignupMessage('Failed to create your account')
      setIsLoading(false)
      toast({
        title: 'Error',
        description: 'Failed to create your account. Please try again.',
        variant: 'destructive',
      })
    }
    
    if (authWindow) {
      authWindow.close()
    }
    setAuthWindow(null)
  }, [companyName, toast, domainUrl])

  useEffect(() => {
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [handleMessage])

  console.log('Current state:', { signupComplete, signupMessage, error, isLoading })

  if (signupComplete) {
    console.log('Rendering signup complete view')
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Signup Complete</CardTitle>
          </CardHeader>
          <CardContent>
            <Alert>
              <AlertDescription>{signupMessage}</AlertDescription>
            </Alert>
            <p className="mt-4 text-center">
              Your domain: <strong>{domainUrl}</strong>
            </p>
            <Button className="w-full mt-4" onClick={() => router.push(`https://${domainUrl}/login`)}>
              Go to Login
            </Button>
          </CardContent>
        </Card>
        <Toaster />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex justify-center">
            <Image
              src="/logoPBX.png?height=64&width=64"
              alt="VogatPBX Logo"
              width={64}
              height={64}
              className="mb-4"
            />
          </div>
          <CardTitle className="text-2xl font-bold text-center">Create an Account</CardTitle>
          <CardDescription className="text-center">
            {step === 1 ? "Enter your company details" : "Create your user account"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {step === 1 ? (
            <form onSubmit={handleCompanySubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  type="text"
                  placeholder="Your Company"
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Do you have a company website?</Label>
                <RadioGroup
                  onValueChange={(value) => setHasWebsite(value === 'yes')}
                  className="flex flex-col space-y-1"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no">No</Label>
                  </div>
                </RadioGroup>
              </div>
              {hasWebsite && (
                <div className="space-y-2">
                  <Label htmlFor="companyWebsite">Company Website</Label>
                  <Input
                    id="companyWebsite"
                    type="url"
                    placeholder="https://yourcompany.com"
                    value={companyWebsite}
                    onChange={(e) => setCompanyWebsite(e.target.value)}
                  />
                </div>
              )}
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <Button type="submit" className="w-full">
                Continue
              </Button>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="text-center">
                <p><strong>Company Name:</strong> {companyName}</p>
                <p><strong>Domain URL:</strong> {domainUrl}</p>
              </div>
              <Button onClick={handleCreateUser} className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating account...
                  </>
                ) : (
                  'Create User Account'
                )}
              </Button>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <p className="text-center text-sm text-gray-600 mt-2 w-full">
            Already have an account?{' '}
            <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
      <Toaster />
    </div>
  )
}