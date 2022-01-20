import * as rune from './rune'
import type { IContext } from 'overmind'
import {
  createStateHook,
  createActionsHook,
  createEffectsHook,
  createReactionHook,
} from 'overmind-react'
import { namespaced } from 'overmind/config'

export const config = namespaced({
  rune,
})

export type Context = IContext<typeof config>
export type ContextState = typeof config['state']

export const useAppState = createStateHook<Context>()
export const useActions = createActionsHook<Context>()
export const useEffects = createEffectsHook<Context>()
export const useReaction = createReactionHook<Context>()
