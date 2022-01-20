import type { Context } from '..'
import type { Rune } from '@/types/rune'

export const setRune = async ({ state }: Context, rune: Rune): Promise<void> => {
  state.rune.runes = [...state.rune.runes, rune]
}

export const setRunes = async ({ state }: Context, runes: Rune[]): Promise<void> => {
  state.rune.runes = [...state.rune.runes, ...runes]
}

export const clearRunes = async ({ state }: Context): Promise<void> => {
  state.rune.runes = []
}

export const deleteRune = async ({ state }: Context, id: number): Promise<void> => {
  state.rune.runes = state.rune.runes.filter((r) => r.rune_id !== id)
}

export const deleteRunes = async ({ state }: Context, ids: number[]): Promise<void> => {
  state.rune.runes = state.rune.runes.filter((r) => !ids.includes(r.rune_id))
}

export const updateRune = async ({ state }: Context, rune: Rune): Promise<void> => {
  state.rune.runes = state.rune.runes.map((r) => (r.rune_id === rune.rune_id ? rune : r))
}

export const updateRunes = async ({ state }: Context, runes: Rune[]): Promise<void> => {
  state.rune.runes = state.rune.runes.map((r) => runes.find((r2) => r2.rune_id === r.rune_id) || r)
}

export const setRunesFromJson = async ({ state }: Context, json: string): Promise<void> => {
  state.rune.runes = JSON.parse(json)
}

export const setRunesFromJsonFile = async ({ state }: Context, file: File): Promise<void> => {
  const reader = new FileReader()
  reader.readAsText(file)
  reader.onload = (): void => {
    state.rune.runes = JSON.parse(reader.result as string)
  }
}
