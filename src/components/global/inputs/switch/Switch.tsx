import { Text } from '../../text'
import type { CSS } from '@/styles'
import { styled } from '@/styles'
import * as LabelPrimitive from '@radix-ui/react-label'
import * as SwitchPrimitive from '@radix-ui/react-switch'
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

const SwitchContainer = styled('div', {
  width: '100%',
  br: 3,
  display: 'flex',
  alignItems: 'center',
})

const SwitchStyle = styled(SwitchPrimitive.Root, {
  all: 'unset',
  width: 41,
  height: 24,
  backgroundColor: '$GRAY',
  br: 'round',
  position: 'relative',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  transition: 'all 500ms',
  cursor: 'pointer',

  '&:focus': {
    boxShadow: '$ELEVATION_BOTTOM_1',
  },
  '&[data-state="checked"]': {
    backgroundColor: '$PRIMARY',
  },
})

const SwitchThumb = styled(SwitchPrimitive.Thumb, {
  display: 'block',
  width: 20,
  height: 20,
  backgroundColor: 'white',
  br: 'round',
  boxShadow: '$ELEVATION_BOTTOM_1',
  transition: 'transform 100ms',
  transform: 'translateX(2px)',
  willChange: 'transform',

  '&[data-state="checked"]': {
    transform: 'translateX(19px)',
  },
})

const Label = styled(LabelPrimitive.Root, {
  fontWeight: '$NORMAL',
  fontSize: '$EM-SMALL',
  marginBottom: 4,
  cursor: 'pointer',
})

interface CustomProps {
  placeholder?: string
  id?: string
  label?: string
  name?: string
  fontSize?: 'sm' | 'md' | 'lg'
  textError?: string

  onChange?: (val: boolean) => void
  setFieldValue?: (id: string, val: boolean) => void
  styles?: {
    container?: CSS
  }
}

export const Switch: React.FC<CustomProps> = ({
  setFieldValue,
  id = '',
  name,
  onChange,
  fontSize,
  textError,
  label,
  styles,
}) => {
  const onChangeInput = (val: boolean): void => {
    if (setFieldValue && id) {
      setFieldValue(id, val)
    }

    if (onChange) {
      onChange(val)
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
      <SwitchContainer>
        <SwitchStyle defaultChecked id={id} name={name} onCheckedChange={onChangeInput}>
          <SwitchThumb />
        </SwitchStyle>

        <Label htmlFor={id} css={{ marginLeft: 12 }}>
          {label}
        </Label>
      </SwitchContainer>

      {textError && (
        <Text style={{ marginTop: 5 }} component="p" variant="error">
          {textError}
        </Text>
      )}
    </Container>
  )
}
