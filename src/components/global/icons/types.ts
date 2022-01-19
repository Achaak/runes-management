import type { GetInnerShadow } from './utils'
import type { ColorsType, CSS } from '@/styles'

export type SVGComponentIcon = {
  className?: string
  size?: number | string
  styles?: {
    container?: CSS
    svg?: CSS
  }
  color?: string
  colorName?: ColorsType
  innerShadow?: GetInnerShadow
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}
