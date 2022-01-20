import type { RuneUtility } from '@/types/runeUtility'
import { Set, Stat } from '@/utils/rune'

export const StatsUtilities: RuneUtility[] = [
  {
    id: 'speed_nuker',
    sets: [Set.blade, Set.rage, Set.fatal, Set.violent, Set.fight, Set.will],
    primary: {
      2: {
        hight_value: [Stat.atk_percent, Stat.spd],
      },
      4: {
        hight_value: [Stat.cdmg],
        medium_value: [Stat.crate],
      },
      6: {
        hight_value: [Stat.atk_percent],
      },
    },
    secondary: {
      hight_value: [Stat.atk_percent, Stat.crate, Stat.cdmg, Stat.spd],
      medium_value: [Stat.atk_flat],
    },
  },
]
