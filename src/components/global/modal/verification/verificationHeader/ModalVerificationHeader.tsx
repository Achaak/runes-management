import { BxsQuestionCircle } from '@/components/global/icons/bxs-question-circle'
import { styled } from '@/styles'
import React from 'react'

const IconContainer = styled('div', {
  background: '$WARNING',
  width: '100%',
  padding: '40px 16px',
})

export const ModalVerificationHeader: React.FC = () => {
  return (
    <IconContainer>
      <BxsQuestionCircle colorName="WHITE" size={100} />
    </IconContainer>
  )
}
