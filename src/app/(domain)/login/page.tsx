import { Suspense } from 'react'
import LoginFormDomain from './login-form'
import LoadingSpinner from '../../../components/ui/loading-spinner'

const isDevelopment = process.env.NODE_ENV === 'development'

const API_BASE_URL = isDevelopment 
  ? 'http://localhost:3000' 
  : process.env.NEXT_PUBLIC_API_URL || 'https://vgtpbx.dev'

  export default async function Page() {

  return (
    <Suspense fallback={<LoadingSpinner />}>
       <LoginFormDomain />
    </Suspense>
  )
}