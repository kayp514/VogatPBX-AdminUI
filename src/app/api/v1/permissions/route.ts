import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const permissions = await prisma.auth_permission.findMany({
      select: {
        id: true,
        name: true,
        codename: true,
      },
    });

    const formattedPermissions = permissions.map(permission => ({
      id: permission.id,
      name: permission.name,
      codename: permission.codename,
    }));

    return NextResponse.json(formattedPermissions);
  } catch (error) {
    console.error('Error fetching permissions:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}