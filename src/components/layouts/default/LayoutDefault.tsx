import { styled } from '@/styles/css'
import React from 'react'

const ContainerDOM = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const LayoutDefault: React.FC = ({ children }) => {
  return <ContainerDOM>{children}</ContainerDOM>
}
