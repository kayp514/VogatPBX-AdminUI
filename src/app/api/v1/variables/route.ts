import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'
import { prisma as prismaImport } from '@/lib/prisma';

const prisma = prismaImport as PrismaClient

export async function GET() {
  try {
    const modules = await prisma.pbx_vars.findMany();

    if (modules.length === 0) {
      return NextResponse.json({ message: 'No modules found' }, { status: 404 });
    }

    return NextResponse.json(modules);
  } catch (error) {
    console.error('Error fetching modules:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}