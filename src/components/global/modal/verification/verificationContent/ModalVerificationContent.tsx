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

interface ModalVerificationContentInterface {
  title?: string
  explanation?: string | React.ReactNode
  explanationHTML?: string
}

export const ModalVerificationContent: React.FC<ModalVerificationContentInterface> = ({
  title,
  explanation,
  explanationHTML,
}) => {
  return (
    <ContentContainer>
      <TextContainer>
        <Title component="h3" style={{ textAlign: 'center', fontSize: '$EM-XX-LARGE' }}>
          {title ? title : 'Sûr ?'}
        </Title>

        {explanation && (
          <Text component="p" style={{ textAlign: 'center', marginBottom: 0 }}>
            {explanation}
          </Text>
        )}

        {explanationHTML && (
          <Text
            component="p"
            dangerouslySetInnerHTML={{ __html: explanationHTML }}
            style={{ textAlign: 'center', marginBottom: 0 }}
          />
        )}
      </TextContainer>
    </ContentContainer>
  )
}
