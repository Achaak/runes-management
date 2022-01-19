import { ProviderOvermind } from '@/components/global/providerOvermind'
import TypesafeI18n from '@/i18n/i18n-react'
import type { Locales } from '@/i18n/i18n-types'
import { detectLocale } from '@/i18n/i18n-util'
import type { AppRouter } from '@/server/routers/_app'
import { globalStyles } from '@/styles/css'
import { getBaseUrl } from '@/utils/getBaseUrl'
import { IdProvider } from '@radix-ui/react-id'
import { httpBatchLink } from '@trpc/client/links/httpBatchLink'
import { loggerLink } from '@trpc/client/links/loggerLink'
import { withTRPC } from '@trpc/next'
import type { NextPage } from 'next'
import { SessionProvider } from 'next-auth/react'
import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import superjson from 'superjson'

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
            <SessionProvider session={pageProps.session}>
              <ProviderOvermind>{getLayout(<Component {...pageProps} />)}</ProviderOvermind>
            </SessionProvider>
          </TypesafeI18n>
        </IdProvider>
      ) : null}
    </>
  )
}

export default withTRPC<AppRouter>({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  config() {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    return {
      /**
       * @link https://trpc.io/docs/links
       */
      links: [
        // adds pretty logs to your console in development and logs errors in production
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === 'development' ||
            (opts.direction === 'down' && opts.result instanceof Error),
        }),
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
      /**
       * @link https://trpc.io/docs/data-transformers
       */
      transformer: superjson,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    }
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: true,
  /**
   * Set headers or status code when doing SSR
   */
  responseMeta({ clientErrors }) {
    if (clientErrors.length) {
      // propagate http first error from API calls
      return {
        status: clientErrors[0].data?.httpStatus ?? 500,
      }
    }

    // for app caching with SSR see https://trpc.io/docs/caching

    return {}
  },
})(MyApp)
