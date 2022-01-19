import type { ButtonColors } from '..'
import { Button } from '@/components/global/inputs/button'
import { styled } from '@/styles'
import React from 'react'

const ButtonsContainer = styled('div', {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-evenly',
})

interface ModalVerificationFooter {
  handleCancel?: () => void
  handleAccept?: () => void
  confirmLoading?: boolean
  cancelLoading?: boolean
  cancelLabel: string
  confirmLabel: string
  buttonColors?: ButtonColors
}

export const ModalVerificationFooter: React.FC<ModalVerificationFooter> = ({
  handleCancel,
  handleAccept,
  confirmLoading,
  cancelLoading,
  cancelLabel,
  confirmLabel,
  buttonColors,
}) => {
  return (
    <ButtonsContainer>
      {cancelLabel && (
        <Button
          color={buttonColors?.cancel || 'gray'}
          textTransform="uppercase"
          fontWeight="bold"
          onClick={handleCancel}
          style={{ minWidth: 100 }}
          disable={cancelLoading}
          loading={cancelLoading}
        >
          {cancelLabel}
        </Button>
      )}

      {confirmLabel && (
        <Button
          color={buttonColors?.confirm || 'primary'}
          textTransform="uppercase"
          fontWeight="bold"
          onClick={handleAccept}
          style={{ minWidth: 100 }}
          disable={confirmLoading}
          loading={confirmLoading}
        >
          {confirmLabel}
        </Button>
      )}
    </ButtonsContainer>
  )
}
