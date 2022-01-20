export interface Artifact {
  rid: number
  wizard_id: number
  occupied_id: number
  slot: ArtifactSlot
  type: 1
  attribute: 1
  unit_style: 0
  natural_rank: 4
  rank: 4
  level: 9
  pri_effect: number[]
  sec_effects: Array<number[]>
  locked: number
  source: number
  extra: []
  date_add: Date
  date_mod: Date
}

export interface ArtifactFormated extends Artifact {
  efficiency: {
    actual: number
    max: number
  }
  score: number
}

export type ArtifactSlot = 1 | 2
