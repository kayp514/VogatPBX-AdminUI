import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const permissions = await prisma.auth_permission.findMany({
      select: {
        id: true,
        name: true,
        content_type_id: true,
        codename: true,
        django_content_type: {
          select: {
            id: true,
            app_label: true,
            model: true,
            main_label: true,
          },
        },
      },
    });

    const formattedPermissions = permissions.map(permission => ({
      id: permission.id,
      name: permission.name,
      content_type_id: permission.content_type_id,
      codename: permission.codename,
      model: permission.django_content_type.model,
      main_label: permission.django_content_type.main_label,
    }));

    return NextResponse.json(formattedPermissions);
  } catch (error) {
    console.error('Error fetching permissions:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}