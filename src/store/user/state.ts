import type { User } from '@/types/user'

export type State = {
  users: User[] | null
}

export const state: State = {
  users: null,
}
