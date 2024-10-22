'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function addExtension(formData: FormData) {
  const extension = formData.get('extension') as string
  const password = formData.get('password') as string
  const domain_uuid = formData.get('domain_uuid') as string
  const user_context = formData.get('user_context') as string

  try {
    const newExtension = await prisma.pbx_extensions.create({
      data: {
        id: crypto.randomUUID(),
        extension,
        password,
        domain_uuid,
        user_context,
        created: new Date(),
        updated: new Date(),
        updated_by: 'system',
        enabled: 'true',
        directory_visible: 'true',
        directory_exten_visible: 'true',
        call_screen_enabled: 'false',
        do_not_disturb: 'false',
        forward_all_enabled: 'false',
        forward_busy_enabled: 'false',
        forward_no_answer_enabled: 'false',
        forward_user_not_registered_enabled: 'false',
        follow_me_enabled: 'false',
        force_ping: 'false',
      },
    })

    revalidatePath('/dashboard/accounts/extensions')
    return { success: true, data: newExtension }
  } catch (error) {
    console.error('Error adding extension:', error)
    return { success: false, error: 'Failed to add extension' }
  }
}