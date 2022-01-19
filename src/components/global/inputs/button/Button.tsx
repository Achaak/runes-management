import type { CSS } from '@/styles'
import { styled } from '@/styles'
import React, { forwardRef, useCallback } from 'react'
import { BeatLoader } from 'react-spinners'

const ButtonDOM = styled('button', {
  fontWeight: 500,
  cursor: 'pointer',
  outline: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',
  space: 2,
  borderWidth: 2,
  borderStyle: 'solid',
  position: 'relative',
  boxShadow: '$ELEVATION_BOTTOM_1',

  variants: {
    effect: {
      globalScale: {
        transition: 'transform 250ms ease',

        '&:hover': {
          transform: 'scale(1.025)',
          transition: 'transform 250ms ease',
        },
        '&:active': {
          transform: 'scale(0.95)',
          transition: 'transform 250ms ease',
        },
      },
      boxScale: {
        transition: 'transform 250ms ease',

        '&:after': {
          background: 'inherit',
          content: '',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          transition: 'transform 250ms ease',
          borderRadius: 'inherit',
        },

        '&:hover:after': {
          transform: 'scale(1.1)',
          transition: 'transform 250ms',
        },

        '&:active': {
          transform: 'scale(0.95)',
          transition: 'transform 250ms ease',
        },
      },
      opacity: {
        transition: 'opacity 500ms',

        '&:hover': {
          opacity: 0.8,
        },

        '&:active': {
          opacity: 1,
          transition: 'opacity 0s',
        },
      },
    },

    borderRadius: {
      sm: {
        br: 1,
      },
      md: {
        br: 2,
      },
      lg: {
        br: 3,
      },
      round: {
        br: 'round',
      },
    },

    fontSize: {
      xxsm: {
        fontSize: '$EM-XX-SMALL',
      },
      xsm: {
        fontSize: '$EM-X-SMALL',
      },
      sm: {
        fontSize: '$EM-SMALL',
      },
      md: {
        fontSize: '$EM-MEDIUM',
      },
      lg: {
        fontSize: '$EM-LARGE',
      },
      xl: {
        fontSize: '$EM-X-LARGE',
      },
      xxl: {
        fontSize: '$EM-XX-LARGE',
      },
    },

    padding: {
      sm: {
        padding: '4px 8px',
      },
      md: {
        padding: '8px 16px',
      },
      lg: {
        padding: '16px 32px',
      },
    },

    fontWeight: {
      lighter: {
        fontWeight: 200,
      },
      normal: {
        fontWeight: 400,
      },
      bold: {
        fontWeight: 600,
      },
    },

    state: {
      true: {
        cursor: 'initial',
        opacity: 0.5,
      },
    },

    color: {
      primary: {
        backgroundColor: '$PRIMARY',
        borderColor: '$PRIMARY',
        color: '$WHITE',
      },
      'primary-gradient': {
        linearGradient: '150deg, $PRIMARY_DARK 0%, $PRIMARY 90%',
        borderColor: '$PRIMARY',
        color: '$WHITE',
      },
      'primary-outline': {
        backgroundColor: '$TRANSPARENT',
        borderColor: '$PRIMARY',
        color: '$PRIMARY',
      },
      'primary-lightest-2': {
        backgroundColor: '$PRIMARY_LIGHTEST_2',
        borderColor: '$PRIMARY_LIGHTEST_2',
        color: '$BLACK',
      },
      'primary-lightest-2-outline': {
        backgroundColor: '$TRANSPARENT',
        borderColor: '$PRIMARY_LIGHTEST_2',
        color: '$PRIMARY',
      },
      secondary: {
        backgroundColor: '$SECONDARY',
        borderColor: '$SECONDARY',
        color: '$WHITE',
      },
      'secondary-gradient': {
        linearGradient: '150deg, $SECONDARY_DARK 0%, $SECONDARY 90%',
        borderColor: '$SECONDARY',
        color: '$WHITE',
      },
      'secondary-outline': {
        backgroundColor: '$TRANSPARENT',
        borderColor: '$SECONDARY',
        color: '$SECONDARY',
      },
      error: {
        backgroundColor: '$ERROR',
        borderColor: '$ERROR',
        color: '$WHITE',
      },
      'error-outline': {
        backgroundColor: '$TRANSPARENT',
        borderColor: '$ERROR',
        color: '$ERROR',
      },
      'warning-outline': {
        backgroundColor: '$TRANSPARENT',
        borderColor: '$WARNING',
        color: '$WARNING',
      },
      warning: {
        backgroundColor: '$WARNING',
        borderColor: '$WARNING',
        color: '$WHITE',
      },
      gray: {
        backgroundColor: '$GRAY',
        borderColor: '$GRAY',
        color: '$WHITE',
      },
      'gray-outline': {
        backgroundColor: '$TRANSPARENT',
        borderColor: '$GRAY',
        color: '$GRAY_DARKER',
      },
      'gray-light': {
        backgroundColor: '$GRAY_LIGHT',
        borderColor: '$GRAY_LIGHT',
        color: '$WHITE',
      },
      'gray-light-outline': {
        backgroundColor: '$TRANSPARENT',
        borderColor: '$GRAY_LIGHT',
        color: '$GRAY_DARKER',
      },
      'gray-lighter': {
        backgroundColor: '$GRAY_LIGHTER',
        borderColor: '$GRAY_LIGHTER',
        color: '$WHITE',
      },
      'gray-lighter-outline': {
        backgroundColor: '$TRANSPARENT',
        borderColor: '$GRAY_LIGHTER',
        color: '$GRAY_LIGHTER',
      },
      success: {
        backgroundColor: '$SUCCESS',
        borderColor: '$SUCCESS',
        color: '$WHITE',
      },
      'success-outline': {
        backgroundColor: '$TRANSPARENT',
        borderColor: '$SUCCESS',
        color: '$SUCCESS',
      },
      white: {
        borderColor: '$WHITE',
        backgroundColor: '$WHITE',
        color: '$PRIMARY',
      },
      black: {
        borderColor: '$WHITE',
        backgroundColor: '$BLACK',
        color: '$WHITE',
      },

      facebook: {
        borderColor: '$FACEBOOK',
        backgroundColor: '$FACEBOOK',
        color: '$WHITE',
      },
      google: {
        borderColor: '$GOOGLE',
        backgroundColor: '$GOOGLE',
        color: '$WHITE',
      },
      apple: {
        borderColor: '$APPLE',
        backgroundColor: '$APPLE',
        color: '$BLACk',
      },
      github: {
        borderColor: '$GITHUB',
        backgroundColor: '$GITHUB',
        color: '$WHITE',
      },
      twitter: {
        borderColor: '$TWITTER',
        backgroundColor: '$TWITTER',
        color: '$WHITE',
      },
      discord: {
        borderColor: '$DISCORD',
        backgroundColor: '$DISCORD',
        color: '$WHITE',
      },
      linkedin: {
        borderColor: '$LINKEDIN',
        backgroundColor: '$LINKEDIN',
        color: '$WHITE',
      },
    },
  },
})

const Content = styled('span', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    textTransform: {
      capitalize: {
        textTransform: 'capitalize',
      },
      uppercase: {
        textTransform: 'uppercase',
      },
      none: {},
    },

    gap: {
      sm: {
        customGap: 4,
      },
      md: {
        customGap: 8,
      },
      lg: {
        customGap: 16,
      },
    },
  },
})

export type ButtonColor =
  | 'primary'
  | 'primary-gradient'
  | 'primary-outline'
  | 'primary-lightest-2'
  | 'primary-lightest-2-outline'
  | 'secondary'
  | 'secondary-gradient'
  | 'secondary-outline'
  | 'error'
  | 'error-outline'
  | 'warning'
  | 'warning-outline'
  | 'gray'
  | 'gray-outline'
  | 'gray-light'
  | 'gray-light-outline'
  | 'gray-lighter'
  | 'gray-lighter-outline'
  | 'success'
  | 'success-outline'
  | 'white'
  | 'black'
  | 'facebook'
  | 'google'
  | 'apple'
  | 'github'
  | 'twitter'
  | 'discord'
  | 'linkedin'

export interface ButtonProps {
  children?: React.ReactNode
  fullWidth?: boolean
  type?: 'button' | 'submit' | 'reset'
  id?: string
  name?: string
  onClick?: () => void
  style?: CSS
  form?: string
  loading?: boolean
  disable?: boolean
  borderRadius?: 'round' | 'sm' | 'md' | 'lg'
  padding?: 'sm' | 'md' | 'lg'
  gap?: 'sm' | 'md' | 'lg'
  fontSize?: 'xxsm' | 'xsm' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  fontWeight?: 'lighter' | 'normal' | 'bold'
  textTransform?: 'capitalize' | `uppercase` | 'none'
  color?: ButtonColor
  effect?: 'globalScale' | 'boxScale' | 'opacity'
  href?: string
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Forward(
  {
    type,
    fullWidth,
    id,
    name,
    color,
    style,
    padding,
    form,
    loading,
    disable,
    borderRadius,
    fontSize,
    textTransform,
    fontWeight,
    effect,
    onClick,
    children,
    gap,
    href,
  },
  ref
) {
  const handleClick = useCallback((): void => {
    if (disable) {
      return
    }

    onClick?.()
  }, [disable, onClick])

  const getContent = (): React.ReactElement => {
    return loading ? (
      <BeatLoader size={8} color={'white'} />
    ) : (
      <Content textTransform={textTransform} gap={gap}>
        {children}
      </Content>
    )
  }

  if (href) {
    return (
      <ButtonDOM
        as={href ? 'a' : undefined}
        href={href}
        type={type}
        id={id}
        onClick={handleClick}
        color={color}
        fontSize={fontSize}
        borderRadius={borderRadius}
        state={disable}
        padding={padding}
        fontWeight={fontWeight}
        effect={disable ? undefined : effect}
        css={{
          width: fullWidth ? '100%' : 'auto',

          // TODO
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ...(style as any),
        }}
      >
        {getContent()}
      </ButtonDOM>
    )
  }

  return (
    <ButtonDOM
      //as={href ? 'a' : undefined}
      //href={href}
      ref={ref}
      form={form}
      type={type}
      id={id}
      name={name}
      onClick={handleClick}
      color={color}
      fontSize={fontSize}
      borderRadius={borderRadius}
      state={disable}
      padding={padding}
      fontWeight={fontWeight}
      effect={disable ? undefined : effect}
      css={{
        width: fullWidth ? '100%' : 'auto',

        // TODO
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...(style as any),
      }}
    >
      {getContent()}
    </ButtonDOM>
  )
})

Button.defaultProps = {
  type: 'button',
  fullWidth: false,
  disable: false,
  loading: false,
  borderRadius: 'md',
  fontSize: 'md',
  padding: 'md',
  textTransform: 'capitalize',
  color: 'primary',
  fontWeight: 'normal',
  gap: 'md',
  effect: 'opacity',
}
