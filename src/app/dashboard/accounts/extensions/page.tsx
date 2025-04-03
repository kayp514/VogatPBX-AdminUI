import { Extensions } from "@/components/extensions"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'

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

  return <Extensions initialExtensions={extensions} />
  
}