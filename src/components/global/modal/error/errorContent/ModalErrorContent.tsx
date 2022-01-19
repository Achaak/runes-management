import { Text } from '@/components/global/text'
import { Title } from '@/components/global/title'
import { styled } from '@/styles'
import React from 'react'

const ContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  customGap: 8,
})

const TextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

interface ModalErrorContentInterface {
  title?: string
  explanation?: string
}

export const ModalErrorContent: React.FC<ModalErrorContentInterface> = ({ title, explanation }) => {
  return (
    <ContentContainer>
      <TextContainer>
        <Title component="h3" style={{ textAlign: 'center', fontSize: '$EM-XX-LARGE' }}>
          {title ? title : 'Ooops!'}
        </Title>

        {explanation && (
          <Text component="p" style={{ textAlign: 'center', marginBottom: 0 }}>
            {explanation}
          </Text>
        )}
      </TextContainer>
    </ContentContainer>
  )
}
