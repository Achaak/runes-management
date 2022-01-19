/**
 *
 * This is an example router, you can delete this file and then update `../pages/api/trpc/[trpc].tsx`
 */
import { createRouter } from '@/server/createRouter'
import { TRPCError } from '@trpc/server'
import { z } from 'zod'

export const userRouter = createRouter()
  // create
  .mutation('add', {
    input: z.object({
      firstname: z.string().min(1).max(32),
      lastname: z.string().uuid().optional(),
    }),
    async resolve({ ctx, input }) {
      const user = await ctx.prisma.user.create({
        data: input,
      })
      return user
    },
  })
  // read
  .query('all', {
    async resolve({ ctx }) {
      /**
       * For pagination you can have a look at this docs site
       * @link https://trpc.io/docs/useInfiniteQuery
       */

      return ctx.prisma.user.findMany({
        select: {
          id: true,
          email: true,
          image: true,
          name: true,
        },
      })
    },
  })
  .query('byId', {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ ctx, input }) {
      const { id } = input
      const user = await ctx.prisma.user.findUnique({
        where: { id },
        select: {
          id: true,
          email: true,
          image: true,
          name: true,
        },
      })
      if (!user) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: `No user with id '${id}'`,
        })
      }
      return user
    },
  })
  // update
  .mutation('edit', {
    input: z.object({
      id: z.string().uuid(),
      data: z.object({
        firstname: z.string().min(1).max(32),
        lastname: z.string().uuid().optional(),
      }),
    }),
    async resolve({ ctx, input }) {
      const { id, data } = input
      const user = await ctx.prisma.user.update({
        where: { id },
        data,
      })
      return user
    },
  })
  // delete
  .mutation('delete', {
    input: z.string().uuid(),
    async resolve({ input: id, ctx }) {
      await ctx.prisma.user.delete({ where: { id } })
      return id
    },
  })
