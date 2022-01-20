import type { Rune, RuneFormated } from '@/types/rune'
import { calcEfficiency, calcScore } from '@/utils/rune'
import { derived } from 'overmind'

export type State = {
  runes: Rune[]
  runeFormated: RuneFormated[]
}

export const state: State = {
  runes: [],
  runeFormated: derived((state: State) => {
    return state.runes.map((rune) => {
      const efficiency = calcEfficiency({
        level: rune.upgrade_curr,
        stats: [
          {
            id: rune.prefix_eff[0],
            value: rune.prefix_eff[1],
          },
          ...rune.sec_eff.map((eff) => ({
            id: eff[0],
            value: eff[1] + eff[3],
          })),
        ],
      })

      return {
        ...rune,
        efficiency: efficiency,
        score: calcScore({ efficiency }),
      }
    })
  }),
}
