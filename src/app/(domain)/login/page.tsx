import { Suspense } from 'react'
import LoginFormDomain from './login-form'
import LoadingSpinner from '../../../components/ui/loading-spinner'

export default function Page() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <LoginFormDomain />
    </Suspense>
  )
}