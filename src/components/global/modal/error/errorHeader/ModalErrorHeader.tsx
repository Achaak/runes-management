import { BxsXCircle } from '@/components/global/icons/bxs-x-circle'
import { styled } from '@/styles'
import React from 'react'

const IconContainer = styled('div', {
  //background: '$ERROR',
  width: '100%',
  padding: '40px 16px',
})

export const ModalErrorHeader: React.FC = () => {
  return (
    <IconContainer>
      <BxsXCircle colorName="WHITE" size={100} />
    </IconContainer>
  )
}
