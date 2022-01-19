import type { CSS } from '@/styles'
import { styled } from '@/styles'

const ComponentStyle = styled('p', {
  color: '$BLACK',
  display: 'block',
  textDecoration: 'none',

  variants: {
    variant: {
      span: {
        fontSize: '$EM-MEDIUM',
      },
      a: {
        fontSize: '$EM-MEDIUM',
        color: '$PRIMARY',
        cursor: 'pointer',
      },
      p: {
        fontSize: '$EM-MEDIUM',
        lineHeight: '1.3em',
        textAlign: 'justify',
        margin: '15px 0',
      },
      ul: {
        margin: '15px 0',
        paddingLeft: '25px',
      },
      li: {
        fontSize: '$EM-MEDIUM',
        margin: '10px 0',
        lineHeight: '1.3em',
        listStyle: 'inside',
        display: 'list-item',
      },
      error: {
        color: '$ERROR',
        fontSize: '$EM-XX-SMALL',
      },
      info: {
        color: '$GRAY_DARKER',
        margin: '5px 0',
        fontSize: '$EM-X-SMALL',
      },
    },
    color: {
      error: {
        color: '$ERROR',
      },
      'gray-dark': {
        color: '$GRAY_DARK',
      },
      gray: {
        color: '$GRAY',
      },
    },
    fontSize: {
      sm: {
        fontSize: '$EM-X-SMALL',
      },
      md: {
        fontSize: '$EM-MEDIUM',
      },
      xl: {
        fontSize: '$EM-X-LARGE',
      },
    },
  },
})

type ComponentType = 'span' | 'p' | 'a' | 'li' | 'ul'

export interface TextProps {
  component: ComponentType
  variant?: ComponentType | 'error' | 'info'
  color?: 'error' | 'gray-dark' | 'gray'
  fontSize?: 'sm' | 'md' | 'xl'
  style?: CSS
  href?: string
  size?: string | number
  dangerouslySetInnerHTML?: {
    __html: string
  }
  children?: React.ReactNode
}

export const Text: React.FC<TextProps> = ({
  children,
  component,
  size,
  variant,
  style,
  href,
  color,
  fontSize,
  dangerouslySetInnerHTML,
}) => {
  // A
  if (component === 'a') {
    return (
      <ComponentStyle
        as={component}
        variant={variant || component}
        css={{
          fontSize: size,

          // TODO
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ...(style as any),
        }}
        href={href}
        color={color}
        fontSize={fontSize}
      >
        {children}
      </ComponentStyle>
    )
  }

  // OTHER
  return (
    <ComponentStyle
      as={component}
      variant={variant || component}
      css={{
        fontSize: size,

        // TODO
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...(style as any),
      }}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      color={color}
      fontSize={fontSize}
    >
      {children}
    </ComponentStyle>
  )
}

Text.defaultProps = {
  component: 'span',
}
