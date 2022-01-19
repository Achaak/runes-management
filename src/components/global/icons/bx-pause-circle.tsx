import { Path, SVG, ContainerIcon } from './styles'
import type { SVGComponentIcon } from './types'
import { getInnerShadow } from './utils'

export const BxPauseCircle: React.FC<SVGComponentIcon> = ({
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
        {innerShadow && getInnerShadow({ ...innerShadow, id: 'shadow-BxCircleTreeQuater' })}

        <Path
          filter={innerShadow ? 'url(#shadow-BxCircleTreeQuater)' : undefined}
          d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
        />
        <Path
          filter={innerShadow ? 'url(#shadow-BxCircleTreeQuater)' : undefined}
          d="M13 9h2v6h-2zM9 9h2v6H9z"
        />
      </SVG>
    </ContainerIcon>
  )
}

/* SVG
<svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M13 9h2v6h-2zM9 9h2v6H9z"></path></svg>
*/
