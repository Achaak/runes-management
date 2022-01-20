import type { SetId, StatId } from './rune'

export interface RuneUtility {
  id: string
  sets?: SetId[]
  primary?: {
    2?: {
      hight_value?: StatId[]
      medium_value?: StatId[]
      low_value?: StatId[]
    }
    4?: {
      hight_value?: StatId[]
      medium_value?: StatId[]
      low_value?: StatId[]
    }
    6?: {
      hight_value?: StatId[]
      medium_value?: StatId[]
      low_value?: StatId[]
    }
  }
  secondary?: {
    hight_value?: StatId[]
    medium_value?: StatId[]
    low_value?: StatId[]
  }
}
