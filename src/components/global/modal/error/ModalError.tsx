import type { ModalType } from '../default/Modal'
import { Modal } from '../default/Modal'
import { ModalErrorContent } from './errorContent'
import { ModalErrorFooter } from './errorFooter'
import { ModalErrorHeader } from './errorHeader'
import React from 'react'

interface CustomType {
  title?: string
  explanation?: string
  confirmLoading?: boolean
  confirmLabel: string
}

export type ModalErrorProps = ModalType & CustomType

export const ModalError: React.FC<ModalErrorProps> = ({
  onClose,
  title,
  explanation,
  confirmLoading,
  confirmLabel,
  ...props
}) => {
  return (
    <Modal
      padding="no-padding"
      hasCloseBtn={true}
      onClose={onClose}
      closeClickOutside
      header={<ModalErrorHeader />}
      content={<ModalErrorContent title={title} explanation={explanation} />}
      footer={
        <ModalErrorFooter
          handleClose={onClose}
          confirmLoading={confirmLoading}
          confirmLabel={confirmLabel}
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

ModalError.defaultProps = {
  confirmLoading: false,
}
