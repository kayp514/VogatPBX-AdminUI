import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, ArrowLeft, SwitchCamera } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <Card className="max-w-md w-full shadow-lg border-muted">
        <CardHeader className="text-center pb-2">
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 rounded-lg bg-primary flex items-center justify-center">
              <SwitchCamera className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Page Not Found</CardTitle>
          <CardDescription className="text-base">
            The page you're looking for doesn't exist or has been moved.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center pb-2">
          <p className="text-muted-foreground">
            Check the URL or navigate back to a known page using the buttons below.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-2 justify-center pt-2">
          <Button variant="outline" asChild>
            <Link href="/dashboard" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              Dashboard Home
            </Link>
          </Button>
          <Button asChild>
            <Link href="javascript:history.back()" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

