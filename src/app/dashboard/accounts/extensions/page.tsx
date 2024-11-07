
import { Suspense} from "react"
import { ExtensionSkeleton } from "@/app/ui/skeleton"
import dynamic from 'next/dynamic'
import ExtensionTable from "@/app/ui/AllExtensionsTable"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000' || 'https://vgtpbx.dev'

//const AddExtensionButton = dynamic(() => import('@/app/ui/buttons').then(mod => mod.AddExtensionButton), { ssr: false })
//const DeleteExtensionButton = dynamic(() => import('@/app/ui/buttons').then(mod => mod.DeleteExtensionButton), { ssr: false })


async function getExtensions() {
  const res = await fetch(`${API_BASE_URL}/api/v1/extensions/`, { 
    cache: 'no-store' 
  })
  if (!res.ok) {
    throw new Error('Failed to fetch extensions')
  }
  return res.json()
}


export default async function ExtensionPage() {
  const extensions = await getExtensions()

  return (
        <div className="container mx-auto py-10">
        <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Extensions</h1>
        <div className="space-x-2">

        </div>
        </div>
        <Suspense fallback={<ExtensionSkeleton />}>
        <ExtensionTable initialExtensions={extensions} />
        </Suspense>
      </div>
  )
}