import { Path, SVG, ContainerIcon } from './styles'
import type { SVGComponentIcon } from './types'
import { getInnerShadow } from './utils'

export const BxPause: React.FC<SVGComponentIcon> = ({
  styles,
  color,
  colorName,
  size,
  innerShadow,
  className,
  onClick,
}) => {
  return (
    <ContainerIcon
      className={className}
      onClick={onClick}
      css={{
        // TODO
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...(styles?.container as any),
      }}
    >
      <SVG
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        css={{
          fill: color || `$${colorName}`,

          // TODO
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ...(styles?.svg as any),
        }}
      >
        {innerShadow && getInnerShadow({ ...innerShadow, id: 'shadow-BxPause' })}

        <Path
          filter={innerShadow ? 'url(#shadow-BxPause)' : undefined}
          d="M8 7h3v10H8zm5 0h3v10h-3z"
        />
      </SVG>
    </ContainerIcon>
  )
}

/* SVG
<svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M8 7h3v10H8zm5 0h3v10h-3z"></path></svg>
*/
