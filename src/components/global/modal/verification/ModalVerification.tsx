import type { ButtonColor } from '../../inputs/button'
import type { ModalType } from '../default/Modal'
import { Modal } from '../default/Modal'
import { ModalVerificationContent } from './verificationContent'
import { ModalVerificationFooter } from './verificationFooter'
import { ModalVerificationHeader } from './verificationHeader'
import React from 'react'

export interface ButtonColors {
  confirm: ButtonColor
  cancel: ButtonColor
}
interface CustomType {
  onCancel?: () => void
  onAccept?: () => void
  explanation?: string | React.ReactNode
  explanationHTML?: string
  confirmLoading?: boolean
  cancelLoading?: boolean
  cancelLabel: string
  confirmLabel: string
  title: string
  buttonColors?: ButtonColors
}

export type ModalVerificationProps = ModalType & CustomType

export const ModalVerification: React.FC<ModalVerificationProps> = ({
  onCancel,
  onAccept,
  explanation,
  explanationHTML,
  confirmLoading,
  cancelLoading,
  cancelLabel,
  confirmLabel,
  title,
  buttonColors,
  ...props
}) => {
  const handleCancel = (): void => {
    if (onCancel) {
      onCancel()
    }
  }

  const handleAccept = (): void => {
    if (onAccept) {
      onAccept()
    }
  }

  return (
    <Modal
      padding="no-padding"
      hasCloseBtn={false}
      onClose={handleCancel}
      closeClickOutside
      header={<ModalVerificationHeader />}
      content={
        <ModalVerificationContent
          title={title}
          explanation={explanation}
          explanationHTML={explanationHTML}
        />
      }
      footer={
        <ModalVerificationFooter
          handleCancel={handleCancel}
          handleAccept={handleAccept}
          cancelLabel={cancelLabel}
          confirmLabel={confirmLabel}
          cancelLoading={cancelLoading}
          confirmLoading={confirmLoading}
          buttonColors={buttonColors}
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

ModalVerification.defaultProps = {
  confirmLoading: false,
  cancelLoading: false,
  buttonColors: {
    cancel: 'gray',
    confirm: 'success',
  },
}
