import { ProviderOvermind } from '@/components/global/providerOvermind'
import TypesafeI18n from '@/i18n/i18n-react'
import type { Locales } from '@/i18n/i18n-types'
import { detectLocale } from '@/i18n/i18n-util'
import { globalStyles } from '@/styles/css'
import { IdProvider } from '@radix-ui/react-id'
import type { NextPage } from 'next'
import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    workbox: any
  }
}

export type NextPageWithLayout<T extends Record<string, unknown> = Record<string, unknown>> =
  NextPage<T> & {
    getLayout?: (page: React.ReactElement) => React.ReactNode
  }

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps, router }: AppPropsWithLayout): JSX.Element => {
  const [locale, setLocale] = useState<Locales | undefined>(undefined)
  const getLayout = Component.getLayout ?? ((page): React.ReactElement => page)

  globalStyles()

  useEffect(() => {
    setLocale(detectLocale(() => [router.locale || 'en']))
  }, [router.locale])

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      window.workbox !== undefined
    ) {
      const wb = window.workbox

      const promptNewVersionAvailable = (): void => {
        wb.addEventListener('controlling', () => {
          window.location.reload()
        })

        wb.messageSkipWaiting()
      }

      wb.addEventListener('waiting', promptNewVersionAvailable)
    }
  }, [])

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />

        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <DefaultSeo {...SEO} />
      {locale ? (
        <IdProvider>
          <TypesafeI18n initialLocale={locale}>
            <ProviderOvermind>{getLayout(<Component {...pageProps} />)}</ProviderOvermind>
          </TypesafeI18n>
        </IdProvider>
      ) : null}
    </>
  )
}

export default MyApp
