import type { Unit } from './Unit'
import type { Artifact } from './artifact'
import type { Rune } from './rune'

export interface JsonFile {
  runes: Rune[]
  unit_list: Unit[]
  artifacts: Artifact[]
}
