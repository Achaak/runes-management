import type { NextPageWithLayout } from './_app'
import { LayoutDefault } from '@/components/layouts/default'
import { I18nContext } from '@/i18n/i18n-react'
import { useActions } from '@/store'
import type { JsonFile } from '@/types/file'
import { NextSeo } from 'next-seo'
import React, { useContext } from 'react'

const Home: NextPageWithLayout = () => {
  const { LL } = useContext(I18nContext)

  const {
    rune: { setRunes },
  } = useActions()

  const handleUploadFile = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0]

    if (!file) return
    const reader = new FileReader()

    reader.onload = (e: ProgressEvent<FileReader>): void => {
      const data = e.target?.result
      if (!data || typeof data !== 'string') return

      const json: JsonFile = JSON.parse(data)

      // Get runes
      const runes = json.runes
      for (const unit of json.unit_list) {
        runes.push(...unit.runes)
      }
      setRunes(runes)
    }

    reader.readAsText(file)
  }

  return (
    <>
      <NextSeo description={LL.common.seo.description()} title={LL.common.seo.title()} />

      <input type="file" onChange={handleUploadFile} />
    </>
  )
}

Home.getLayout = (page: React.ReactElement): React.ReactElement => {
  return <LayoutDefault>{page}</LayoutDefault>
}

export default Home
