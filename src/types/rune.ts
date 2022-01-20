import type { Class } from './common'

export interface Rune {
  rune_id: number
  wizard_id: number
  occupied_type: number
  occupied_id: number
  slot_no: RuneSlot
  rank: Rank
  class: Class
  set_id: SetId
  upgrade_limit: Upgrade
  upgrade_curr: Upgrade
  base_value: number
  sell_value: number
  pri_eff: [StatId, number]
  prefix_eff: [StatId, number]
  sec_eff: [StatId, number, 0 | 1, number][]
  extra: number
}

export interface RuneFormated extends Rune {
  efficiency: {
    actual: number
    max: number
  }
}

export type Rank = 1 | 2 | 3 | 4 | 5
export type RuneSlot = 1 | 2 | 3 | 4 | 5 | 6
export type StatId = 1 | 2 | 3 | 4 | 5 | 6 | 8 | 9 | 10 | 11 | 12
export type Upgrade = 1 | 2 | 3 | 4 | 5 | 6 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15
export type SetId =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 10
  | 11
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
