import { Button } from '@/components/global/inputs/button'
import { styled } from '@/styles'
import React from 'react'

const ButtonsContainer = styled('div', {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-evenly',
})

interface ModalErrorFooter {
  handleClose?: () => void
  confirmLoading?: boolean
  confirmLabel?: string
}

export const ModalErrorFooter: React.FC<ModalErrorFooter> = ({
  handleClose,
  confirmLoading,
  confirmLabel,
}) => {
  return (
    <ButtonsContainer>
      <Button
        color="warning"
        textTransform="uppercase"
        fontWeight="bold"
        onClick={handleClose}
        style={{ minWidth: 100 }}
        disable={confirmLoading}
        loading={confirmLoading}
      >
        {confirmLabel}
      </Button>
    </ButtonsContainer>
  )
}
