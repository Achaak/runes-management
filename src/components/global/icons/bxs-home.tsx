import { Path, SVG, ContainerIcon } from './styles'
import type { SVGComponentIcon } from './types'
import { getInnerShadow } from './utils'

export const BxsHome: React.FC<SVGComponentIcon> = ({
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
        {innerShadow && getInnerShadow({ ...innerShadow, id: 'shadow-BxsHome' })}

        <Path
          filter={innerShadow ? 'url(#shadow-BxsHome)' : undefined}
          d="M21.743 12.331l-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 00-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 001 1h3a1 1 0 001-1v-4h4v4a1 1 0 001 1h3a1 1 0 001-1v-7h2a.998.998 0 00.743-1.669z"
        />
      </SVG>
    </ContainerIcon>
  )
}

/* SVG
<svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"></path></svg>
*/
