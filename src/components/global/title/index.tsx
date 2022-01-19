import type { CSS } from '@/styles'
import { styled } from '@/styles'

const TitleStyle = styled('h1', {
  color: '$BLACK',
  whiteSpace: 'pre-line',
  textTransform: 'capitalize',

  variants: {
    variant: {
      h1: {},
      h2: {},
      h3: {
        fontSize: '$EM-X-LARGE',
        fontWeight: 'bold',
      },
      h4: {
        fontSize: '$EM-LARGE',
        fontWeight: 'bold',
      },
      h5: {},

      app_h1: {},
      app_h2: {},
      app_h3: {
        fontSize: '$EM-LARGE',
        letterSpacing: 3,
        fontWeight: 'bold',
      },
      app_h4: {},
      app_h5: {},
    },
    uppercase: {
      true: {
        textTransform: 'uppercase',
      },
    },
  },
})

type ComponentType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5'

export interface TitleProps {
  component: ComponentType
  variant?: ComponentType | 'app_h1' | 'app_h2' | 'app_h3' | 'app_h4' | 'app_h5'
  uppercase?: boolean
  whiteSpace?: 'nowrap' | 'normal'
  dangerouslySetInnerHTML?: {
    __html: string
  }
  style?: CSS
  id?: string
  children?: React.ReactNode
}

export const Title: React.FC<TitleProps> = ({
  children,
  id,
  component,
  variant,
  uppercase,
  whiteSpace,
  dangerouslySetInnerHTML,
  style,
}) => {
  return (
    <TitleStyle
      id={id}
      as={component}
      variant={variant || component}
      uppercase={uppercase}
      css={{
        whiteSpace: whiteSpace,
        textAlign: 'center',

        // TODO
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...(style as any),
      }}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    >
      {children}
    </TitleStyle>
  )
}
