import { Path, SVG, ContainerIcon } from './styles'
import type { SVGComponentIcon } from './types'
import { getInnerShadow } from './utils'

export const BxCircleTreeQuarter: React.FC<SVGComponentIcon> = ({
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
        viewBox="0 0 45 45"
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
          d="M22.502 45c-3.037 0-5.986-.593-8.759-1.767a22.428 22.428 0 01-7.15-4.825 22.424 22.424 0 01-4.826-7.15A22.355 22.355 0 010 22.5a1.581 1.581 0 113.164 0A19.307 19.307 0 008.83 36.176a19.237 19.237 0 006.149 4.144 19.227 19.227 0 007.524 1.516c2.61 0 5.142-.51 7.529-1.52a19.309 19.309 0 006.148-4.145 19.235 19.235 0 004.145-6.148A19.223 19.223 0 0041.84 22.5c0-2.61-.51-5.142-1.52-7.528a19.356 19.356 0 00-4.145-6.148 19.236 19.236 0 00-6.149-4.144 19.228 19.228 0 00-7.524-1.516 1.581 1.581 0 110-3.164c3.037 0 5.986.593 8.76 1.767a22.428 22.428 0 017.15 4.825 22.46 22.46 0 014.821 7.15A22.355 22.355 0 0145 22.5c0 3.037-.593 5.985-1.767 8.758a22.34 22.34 0 01-4.821 7.15 22.465 22.465 0 01-7.15 4.821A22.288 22.288 0 0122.501 45z"
        />
      </SVG>
    </ContainerIcon>
  )
}

/* SVG
<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_560:2176)">
<path d="M22.5022 45C19.4653 45 16.5163 44.4067 13.743 43.2334C11.0621 42.0996 8.65807 40.4736 6.59244 38.4082C4.52681 36.3428 2.90067 33.939 1.76677 31.2583C0.59332 28.4854 0 25.5366 0 22.5C0 21.6255 0.707589 20.918 1.58219 20.918C2.45678 20.918 3.16437 21.6255 3.16437 22.5C3.16437 25.1104 3.67419 27.6416 4.68503 30.0278C5.66071 32.3306 7.05391 34.4004 8.82948 36.1758C10.605 37.9512 12.6751 39.3486 14.978 40.3198C17.3601 41.3262 19.8916 41.8359 22.5022 41.8359C25.1128 41.8359 27.6443 41.3262 30.0308 40.3154C32.3337 39.3398 34.4038 37.9468 36.1793 36.1714C37.9549 34.396 39.3525 32.3262 40.3238 30.0234C41.3302 27.6416 41.84 25.1104 41.84 22.5C41.84 19.8896 41.3302 17.3584 40.3194 14.9722C39.347 12.675 37.9397 10.5874 36.1749 8.82422C34.4136 7.05725 32.3253 5.64976 30.0264 4.68018C27.6443 3.67383 25.1128 3.16406 22.5022 3.16406C21.6276 3.16406 20.92 2.45654 20.92 1.58203C20.92 0.70752 21.6276 0 22.5022 0C25.5391 0 28.4881 0.593262 31.2614 1.7666C33.9423 2.90039 36.3463 4.52637 38.412 6.5918C40.4776 8.65723 42.0993 11.0654 43.2332 13.7417C44.4067 16.5146 45 19.4634 45 22.5C45 25.5366 44.4067 28.4854 43.2332 31.2583C42.1037 33.939 40.4776 36.3428 38.412 38.4082C36.3463 40.4736 33.9379 42.0952 31.2614 43.229C28.4881 44.4067 25.5391 45 22.5022 45V45Z" fill="#52A2FF"/>
</g>
<defs>
<filter id="filter0_i_560:2176" x="0" y="0" width="45" height="46" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_560:2176"/>
</filter>
</defs>
</svg>
*/
