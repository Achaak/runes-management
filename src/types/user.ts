import { Prisma } from '@prisma/client'

export type User = Prisma.UserGetPayload<{
  select: {
    id: true
    email: true
    image: true
    name: true
  }
}>
