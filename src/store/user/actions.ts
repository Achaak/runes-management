import type { Context } from '..'
import { trpcClient } from '@/utils/trpc'

export const getUser = async ({ state }: Context): Promise<void> => {
  try {
    const res = await trpcClient.query('user.all')

    state.user.users = res
  } catch (e) {
    console.log(e)
  }
}

export const onInitializeOvermind = async ({ state }: Context): Promise<void> => {
  console.log(state.user.users)
}
