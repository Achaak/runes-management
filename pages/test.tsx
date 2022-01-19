import type { NextPageWithLayout } from './_app'
import { Checkbox } from '@/components/global/inputs/checkbox'
import { Textarea } from '@/components/global/inputs/textarea'
import { Textfied } from '@/components/global/inputs/textfield'
import { ModalError } from '@/components/global/modal/error'
import { LayoutDefault } from '@/components/layouts/default'
import React, { useState } from 'react'

const Test: NextPageWithLayout = () => {
  const [visible, setstate] = useState(false)

  return (
    <>
      <Textfied id="textfield" label="Textfield" />
      <Textarea id="textarea" label="Textarea" />
      <Checkbox id="checkbox" label="Checkbox" />
      <ModalError confirmLabel="confirm" visible={visible} onClose={(): void => setstate(false)} />
    </>
  )
}

Test.getLayout = (page: React.ReactElement): React.ReactElement => {
  return <LayoutDefault>{page}</LayoutDefault>
}

export default Test
