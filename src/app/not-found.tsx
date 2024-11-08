import Link from 'next/link'
import { headers } from 'next/headers'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

const PROD_ROOT_DOMAIN = 'vgtpbx.dev';
const DEV_ROOT_DOMAIN = 'localhost:3000';
const ROOT_DOMAIN = process.env.NODE_ENV === 'development' ? DEV_ROOT_DOMAIN : PROD_ROOT_DOMAIN;
 
export default async function NotFound() {
  const headersList = await headers()
  const domain = headersList.get('host')?.split(':')[0]
   const protocol = process.env.NODE_ENV === 'development' ? 'http://' : 'https://'
   const rootUrl = `${protocol}${ROOT_DOMAIN}`
  //const data = await getDomainData(domain)

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
          <CardTitle className="text-2xl font-bold">404 - Not Found</CardTitle>
          <CardDescription>
            {domain ? `Domain: ${domain}` : 'Unknown Domain'}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-red-600">The requested resource could not be found.</p>
          <Button asChild className="w-full">
            <Link href={rootUrl}>Return to Homepage</Link>
          </Button>
        </CardContent>
      </Card>
      
      <footer className="mt-8 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} VogatPBX. All rights reserved.</p>
      </footer>
    </div>
  )
}