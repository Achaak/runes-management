import type { SetLabel, StatLabel } from '@/types/common'
import type { StatId, SetId } from '@/types/rune'
import type { SetUtility } from '@/types/setUtility'

export const Stat: Record<StatLabel, StatId> = {
  hp_flat: 1,
  hp_percent: 2,
  atk_flat: 3,
  atk_percent: 4,
  def_flat: 5,
  def_percent: 6,
  spd: 8,
  crate: 9,
  cdmg: 10,
  res: 11,
  acc: 12,
}

export const Set: Record<SetLabel, SetId> = {
  energy: 1,
  guard: 2,
  swift: 3,
  blade: 4,
  rage: 5,
  focus: 6,
  endure: 7,
  fatal: 8,
  despair: 10,
  vampire: 11,
  violent: 13,
  nemesis: 14,
  will: 15,
  shield: 16,
  revenge: 17,
  destroy: 18,
  fight: 19,
  determination: 20,
  enhance: 21,
  accuracy: 22,
  tolerance: 23,
}

export const getStatType = (id: StatId): string => {
  switch (id) {
    case 1:
      return 'HP flat'
    case 2:
      return 'HP%'
    case 3:
      return 'ATK flat'
    case 4:
      return 'ATK%'
    case 5:
      return 'DEF flat'
    case 6:
      return 'DEF%'
    case 8:
      return 'SPD'
    case 9:
      return 'CRate'
    case 10:
      return 'CDmg'
    case 11:
      return 'RES'
    case 12:
      return 'ACC'
  }
}

export const getSet = (idSet: SetId): string => {
  switch (idSet) {
    case 1:
      return 'Energy'
    case 2:
      return 'Guard'
    case 3:
      return 'Swift'
    case 4:
      return 'Blade'
    case 5:
      return 'Rage'
    case 6:
      return 'Focus'
    case 7:
      return 'Endure'
    case 8:
      return 'Fatal'
    case 10:
      return 'Despair'
    case 11:
      return 'Vampire'
    case 13:
      return 'Violent'
    case 14:
      return 'Nemesis'
    case 15:
      return 'Will'
    case 16:
      return 'Shield'
    case 17:
      return 'Revenge'
    case 18:
      return 'Destroy'
    case 19:
      return 'Fight'
    case 20:
      return 'Determination'
    case 21:
      return 'Enhance'
    case 22:
      return 'Accuracy'
    case 23:
      return 'Tolerance'
  }
}

export const getMaxStat = (id: StatId): number => {
  switch (id) {
    case 1:
      return 1875
    case 2:
      return 40
    case 3:
      return 100
    case 4:
      return 40
    case 5:
      return 100
    case 6:
      return 40
    case 8:
      return 30
    case 9:
      return 30
    case 10:
      return 35
    case 11:
      return 40
    case 12:
      return 40
  }
}

export const getUtilities = ({
  innerStat,
  primaryStat,
  secondaryStat,
  set,
}: {
  set: SetId
  primaryStat: StatId
  secondaryStat: StatId
  innerStat: StatId
}): SetUtility[] => {
  console.log(innerStat, primaryStat, secondaryStat, set)
  return []
}

export const calcEfficiency = ({
  level,
  stats,
}: {
  level: number
  stats: {
    id: StatId
    value: number
  }[]
}): {
  actual: number
  max: number
} => {
  let actual = 0
  let max = 0

  // Stats
  for (const { id, value } of stats) {
    actual += value / getMaxStat(id)
  }

  // Actual stat
  actual = (actual + 1) / 2.8

  // max stat
  const runeLevel = level > 12 ? 12 : level
  max = (actual * 2.8 + Math.ceil((12 - runeLevel) / 3) * 0.2) / 2.8

  return { actual, max }
}

export const calcScore = ({
  efficiency,
}: {
  efficiency: {
    actual: number
    max: number
  }
}): {
  actual: number
  max: number
} => {
  let scoreActual = 0
  let scoreMax = 0

  scoreActual *= efficiency.actual
  scoreMax *= efficiency.max

  return { actual: scoreActual, max: scoreMax }
}
