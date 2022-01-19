import { Text } from '../../text'
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

const TextareaContainer = styled('div', {
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

const TextareaDOM = styled('textarea', {
  width: '100%',
  outline: 'none',
  padding: '12px 16px',
  fontSize: '$EM-SMALL',
  minHeight: 250,
  resize: 'none',
  border: 'none',
  fontFamily: '$roboto',

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
  initialValue?: string
  id?: string
  label?: string
  borderColor?: 'primary'
  borderSize?: 'sm' | 'md' | 'lg'
  borderRadius?: 1 | 2 | 3 | 'round'
  textError?: string
  fontSize?: 'sm' | 'md' | 'lg'
  variant?: 'box-inside'
  padding?: 'sm' | 'md' | 'lg'

  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  setFieldValue?: (id: string, res: string) => void
}

export const Textarea: React.FC<CustomProps> = ({
  setFieldValue,
  id = '',
  placeholder,
  onChange,
  initialValue,
  borderColor,
  borderSize,
  label,
  textError,
  borderRadius,
  fontSize,
  padding,
  variant,
}) => {
  const onChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    if (setFieldValue) {
      setFieldValue(id, e.target.value)
    }

    onChange?.(e)
  }

  return (
    <Container fontSize={fontSize}>
      <Label htmlFor={id}>{label}</Label>

      <TextareaContainer
        borderRadius={borderRadius}
        borderColor={borderColor}
        borderSize={borderSize}
      >
        <TextareaDOM
          id={id}
          borderRadius={borderRadius}
          variant={variant}
          padding={padding}
          placeholder={placeholder}
          onChange={onChangeTextarea}
          defaultValue={initialValue}
        />
      </TextareaContainer>

      {textError && (
        <Text style={{ marginTop: 5 }} component="p" variant="error">
          {textError}
        </Text>
      )}
    </Container>
  )
}

Textarea.defaultProps = {
  borderColor: 'primary',
  borderSize: 'md',
}
