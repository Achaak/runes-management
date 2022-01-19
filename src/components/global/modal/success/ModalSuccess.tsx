import type { ModalType } from '../default/Modal'
import { Modal } from '../default/Modal'
import { ModalSuccessContent } from './successContent'
import { ModalSuccessFooter } from './successFooter'
import { ModalSuccessHeader } from './successHeader'
import React from 'react'

interface CustomType {
  title?: string
  explanation?: string
  acceptLoading?: boolean
  validateLabel: string
}

export type ModalSuccessProps = ModalType & CustomType

export const ModalSuccess: React.FC<ModalSuccessProps> = ({
  onClose,
  title,
  explanation,
  acceptLoading,
  validateLabel,
  ...props
}) => {
  return (
    <Modal
      padding="no-padding"
      hasCloseBtn={false}
      onClose={onClose}
      closeClickOutside
      header={<ModalSuccessHeader />}
      content={<ModalSuccessContent title={title} explanation={explanation} />}
      footer={
        <ModalSuccessFooter
          handleClose={onClose}
          acceptLoading={acceptLoading}
          validateLabel={validateLabel}
        />
      }
      gap={{
        content: 'md',
        container: 'md',
      }}
      styles={{
        content: {
          padding: 16,
          flex: 1,
        },
        footer: {
          paddingBottom: '16px',
        },
      }}
      {...(props as never)}
    />
  )
}

ModalSuccess.defaultProps = {
  acceptLoading: false,
}
