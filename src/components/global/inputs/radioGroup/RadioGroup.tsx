import { Text } from '../../text'
import type { CSS } from '@/styles'
import { styled } from '@/styles'
import * as LabelPrimitive from '@radix-ui/react-label'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
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

const RadioGroupContainer = styled('div', {
  display: 'flex',

  variants: {
    orientation: {
      horizontal: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      vertical: {
        flexDirection: 'column',
      },
    },
  },
})

const RadioGroupRoot = styled(RadioGroupPrimitive.Root, {
  display: 'flex',

  variants: {
    orientation: {
      horizontal: {
        flexDirection: 'row',
        alignItems: 'center',
        customColumnGap: 8,
      },
      vertical: {
        flexDirection: 'column',
        customRowGap: 8,
      },
    },
  },
})

const RadioContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
})

const Radio = styled(RadioGroupPrimitive.Item, {
  all: 'unset',
  backgroundColor: '$WHITE',
  width: 16,
  height: 16,
  borderRadius: '100%',
  border: '1px solid',
  borderColor: '$PRIMARY_LIGHTER',
  margin: 4,

  '&:hover': {
    backgroundColor: '$PRIMARY_LIGHTER',
  },
  '&:focus': {
    boxShadow: '$ELEVATION_BOTTOM_1',
  },
})

const RadioIndicator = styled(RadioGroupPrimitive.Indicator, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  position: 'relative',

  '&::after': {
    content: '',
    display: 'block',
    width: 10,
    height: 10,
    br: 'round',
    backgroundColor: '$PRIMARY',
  },
})

const RadioLabel = styled(LabelPrimitive.Root, {
  fontSize: '$EM-SMALL',
  cursor: 'pointer',
})

const Label = styled(LabelPrimitive.Root, {
  fontWeight: '$NORMAL',
  fontSize: '$EM-SMALL',
  cursor: 'pointer',

  variants: {
    orientation: {
      horizontal: {
        marginRight: 8,
      },
      vertical: {
        marginBottom: 8,
      },
    },
  },
})

interface CustomProps {
  placeholder?: string
  id?: string
  label?: string
  name?: string
  fontSize?: 'sm' | 'md' | 'lg'
  textError?: string

  onChange?: (val: string) => void
  setFieldValue?: (id: string, val: string) => void
  styles?: {
    container?: CSS
  }
  radios: {
    label: string
    value: string
  }[]
  defaultValue?: string
  orientation?: 'horizontal' | 'vertical'
}

export const RadioGroup: React.FC<CustomProps> = ({
  setFieldValue,
  id = '',
  name,
  onChange,
  fontSize,
  textError,
  label,
  styles,
  radios,
  defaultValue,
  orientation,
}) => {
  const onChangeInput = (val: string): void => {
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
      <RadioGroupContainer orientation={orientation}>
        <Label htmlFor={id} orientation={orientation}>
          {label}
        </Label>

        <RadioGroupRoot
          id={id}
          name={name}
          onValueChange={onChangeInput}
          defaultValue={defaultValue}
          orientation={orientation}
        >
          {radios.map(({ label: radioLabel, value }, itemKey) => (
            <RadioContainer key={itemKey}>
              <Radio id={`${id}-${itemKey}`} value={value}>
                <RadioIndicator />
              </Radio>

              <RadioLabel htmlFor={`${id}-${itemKey}`}>{radioLabel}</RadioLabel>
            </RadioContainer>
          ))}
        </RadioGroupRoot>
      </RadioGroupContainer>

      {textError && (
        <Text style={{ marginTop: 5 }} component="p" variant="error">
          {textError}
        </Text>
      )}
    </Container>
  )
}

RadioGroup.defaultProps = {
  fontSize: 'md',
  orientation: 'horizontal',
}
