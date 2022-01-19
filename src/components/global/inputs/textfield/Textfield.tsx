import { Text } from '../../text'
import type { CSS } from '@/styles'
import { styled } from '@/styles'
import * as LabelPrimitive from '@radix-ui/react-label'
import React from 'react'

const Container = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',

  variants: {
    fontSize: {
      sm: {
        fontSize: '$EM-SMALL',
      },
      md: {
        fontSize: '$EM-MEDIUM',
      },
      lg: {
        fontSize: '$EM-LARGE',
      },
    },
  },
})

const InputContainer = styled('div', {
  width: '100%',
  overflow: 'hidden',
  br: 3,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    borderColor: {
      primary: {
        borderColor: '$PRIMARY',
      },
    },
    borderSize: {
      sm: {
        border: '1px solid',
      },
      md: {
        border: '2px solid',
      },
      lg: {
        border: '3px solid',
      },
    },
    borderRadius: {
      1: {
        br: 1,
      },
      2: {
        br: 2,
      },
      3: {
        br: 3,
      },
      round: {
        br: 'round',
      },
    },
  },
})

const Input = styled('input', {
  width: '100%',
  outline: 'none',
  padding: '8px 16px',
  fontSize: '$EM-SMALL',
  border: 'none',
  fontFamily: '$roboto',
  br: 'round',

  variants: {
    variant: {
      'box-inside': {
        boxShadow: '$DIMINUTION_2',
      },
    },
    borderRadius: {
      1: {
        br: 1,
      },
      2: {
        br: 2,
      },
      3: {
        br: 3,
      },
      round: {
        br: 'round',
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
  },
})

const Label = styled(LabelPrimitive.Root, {
  fontWeight: '$NORMAL',
  fontSize: '$EM-SMALL',
  marginBottom: 4,
})

interface CustomProps {
  placeholder?: string
  type?: string
  id?: string
  label?: string
  name?: string
  variant?: 'box-inside'
  borderRadius?: 1 | 2 | 3 | 'round'
  padding?: 'sm' | 'md' | 'lg'
  fontSize?: 'sm' | 'md' | 'lg'
  borderColor?: 'primary'
  borderSize?: 'sm' | 'md' | 'lg'
  textError?: string

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  setFieldValue?: (id: string, res: string) => void
  styles?: {
    container?: CSS
  }
}

export const Textfied: React.FC<CustomProps> = ({
  setFieldValue,
  id = '',
  name,
  type,
  onChange,
  placeholder,
  variant,
  borderRadius,
  padding,
  fontSize,
  textError,
  label,
  styles,
  borderColor,
  borderSize,
}) => {
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (setFieldValue && id) {
      setFieldValue(id, e.target.value)
    }

    if (onChange) {
      onChange(e)
    }
  }

  return (
    <Container
      fontSize={fontSize}
      css={{
        // TODO
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...(styles?.container as any),
      }}
    >
      <Label htmlFor={id}>{label}</Label>

      <InputContainer borderRadius={borderRadius} borderColor={borderColor} borderSize={borderSize}>
        <Input
          borderRadius={borderRadius}
          id={id}
          type={type}
          placeholder={placeholder}
          onChange={onChangeInput}
          variant={variant}
          padding={padding}
          name={name}
        />
      </InputContainer>

      {textError && (
        <Text style={{ marginTop: 5 }} component="p" variant="error">
          {textError}
        </Text>
      )}
    </Container>
  )
}

Textfied.defaultProps = {
  borderColor: 'primary',
  borderSize: 'md',
}
