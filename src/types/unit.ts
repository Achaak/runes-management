import type { Artifact } from './artifact'
import type { Class } from './common'
import type { Rune } from './rune'

export type Skill = Array<number>

export interface Unit {
  unit_id: number
  wizard_id: number
  island_id: number
  pos_x: number
  pos_y: number
  building_id: number
  unit_master_id: number
  unit_level: number
  class: Class
  con: number
  atk: number
  def: number
  spd: number
  resist: number
  accuracy: number
  critical_rate: number
  critical_damage: number
  experience: number
  exp_gained: number
  exp_gain_rate: number
  skills: Skill[]
  runes: Rune[]
  artifacts: Artifact[]
  costume_master_id: number
  trans_items: []
  attribute: number
  create_time: Date
  source: number
  homunculus: 0 | 1
  homunculus_name: string
  awakening_info: []
}
