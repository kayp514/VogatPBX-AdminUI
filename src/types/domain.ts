import { Prisma } from '@prisma/client'

export type DomainInput = {
  name: string;
  portal_name: string;
  switch: string;
  enabled: boolean;
  description?: string;
}

export type Domain = {
  id: string;
  name: string;
  portal_name: string;
  switch: string;
  enabled: string;
  description: string | null;
  created: Date;
  updated: Date;
  synchronised: Date | null;
  updatedBy: string;
  homeSwitch: string;
  menuId: string | null;
}

export type DomainCreateInput = Prisma.DomainCreateInput