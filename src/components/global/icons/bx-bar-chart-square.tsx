import { Path, SVG, ContainerIcon } from './styles'
import type { SVGComponentIcon } from './types'

export const BxBarChartSquare: React.FC<SVGComponentIcon> = ({
  styles,
  color,
  colorName,
  size,
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
        <Path d="M3 5v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2zm16.001 14H5V5h14l.001 14z" />
        <Path d="M11 7h2v10h-2zm4 3h2v7h-2zm-8 2h2v5H7z" />
      </SVG>
    </ContainerIcon>
  )
}

/* SVG
<svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M3 5v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2zm16.001 14H5V5h14l.001 14z"></path><path d="M11 7h2v10h-2zm4 3h2v7h-2zm-8 2h2v5H7z"></path></svg>
*/
