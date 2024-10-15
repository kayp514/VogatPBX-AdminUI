import { PrismaClient, Extension } from '@prisma/client'

const prisma = new PrismaClient()

export async function fetchExtensions() {
  try {
    const extensions = await prisma.extension.findMany({
      select: {
        id: true,
        extension: true,
        effective_caller_id_name: true,
        effective_caller_id_number: true,
        call_group: true,
        user_context: true,
        enabled: true,
      },
      orderBy: {
        extension: 'asc',
      },
    })

    return extensions.map((ext: {
      id: string;
      extension: string;
      effective_caller_id_name: string | null;
      effective_caller_id_number: string | null;
      call_group: string | null;
      user_context: string | null;
      enabled: string;
    }) => ({
      id: ext.id,
      extension: ext.extension,
      effective_caller_id_name: ext.effective_caller_id_name,
      effective_caller_id_number: ext.effective_caller_id_number,
      call_group: ext.call_group,
      user_context: ext.user_context,
      status: ext.enabled.toLowerCase() === 'true' ? 'Enabled' : 'Disabled',
    }))
  } catch (error) {
    console.error('Error fetching extensions:', error)
    throw error
  }
}