import type { StatUtility } from '@/types/statUtility'
import { Stat } from '@/utils/rune'

type StatUtilityKey = 'speed nuker'

export const StatsUtilities: Record<StatUtilityKey, StatUtility> = {
  'speed nuker': {
    id: 'speed_nuker',
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
}
