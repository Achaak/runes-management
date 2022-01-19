import { Button } from '@/components/global/inputs/button'
import { styled } from '@/styles'
import React from 'react'

const ButtonsContainer = styled('div', {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-evenly',
})

interface ModalSuccessFooter {
  handleClose?: () => void
  acceptLoading?: boolean
  validateLabel?: string
}

export const ModalSuccessFooter: React.FC<ModalSuccessFooter> = ({
  handleClose,
  acceptLoading,
  validateLabel,
}) => {
  return (
    <ButtonsContainer>
      <Button
        color="warning"
        textTransform="uppercase"
        fontWeight="bold"
        onClick={handleClose}
        style={{ minWidth: 100 }}
        disable={acceptLoading}
        loading={acceptLoading}
      >
        {validateLabel}
      </Button>
    </ButtonsContainer>
  )
}
