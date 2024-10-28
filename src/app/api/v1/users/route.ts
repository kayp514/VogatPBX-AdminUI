import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const users = await prisma.pbx_users.findMany({
      include: {
        auth_user: {
          select: {
            id: true,
            is_superuser: true,
            first_name: true,
            last_name: true,
            email: true,
            is_staff: true,
            is_active: true,
            last_login: true,
            date_joined: true,
          },
        },
      },
    });

    const serializedUsers = users.map(user => ({
      user_uuid: user.user_uuid,
      username: user.username,
      email: user.email || user.auth_user.email,
      first_name: user.auth_user.first_name,
      last_name: user.auth_user.last_name,
      status: user.status,
      enabled: user.enabled,
      is_staff: user.auth_user.is_staff,
      is_active: user.auth_user.is_active,
      is_superuser: user.auth_user.is_superuser,
      last_login: user.auth_user.last_login ? user.auth_user.last_login.toISOString() : null,
      date_joined: user.auth_user.date_joined.toISOString(),
      created: user.created ? user.created.toISOString() : null,
      updated: user.updated ? user.updated.toISOString() : null,
      synchronised: user.synchronised ? user.synchronised.toISOString() : null,
      updated_by: user.updated_by,
    }));

    return NextResponse.json(serializedUsers);
  } catch (error) {
    console.error('Error fetching PBX users:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}