import type { NextPageWithLayout } from './_app'
import { LayoutDefault } from '@/components/layouts/default'
import { I18nContext } from '@/i18n/i18n-react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { NextSeo } from 'next-seo'
import React, { useContext } from 'react'

const Home: NextPageWithLayout = () => {
  const { data, status } = useSession({ required: true, onUnauthenticated: () => signIn() })
  const { LL } = useContext(I18nContext)

  return (
    <>
      <NextSeo description={LL.common.seo.description()} title={LL.common.seo.title()} />

      {status === 'authenticated' ? (
        <>
          Signed in as {data?.user.email} <br />
          <button
            onClick={(): void => {
              signOut()
            }}
          >
            Sign out
          </button>
        </>
      ) : (
        <>
          Not signed in <br />
          <button
            onClick={(): void => {
              signIn()
            }}
          >
            Sign in
          </button>
        </>
      )}
    </>
  )
}

Home.getLayout = (page: React.ReactElement): React.ReactElement => {
  return <LayoutDefault>{page}</LayoutDefault>
}

export default Home
