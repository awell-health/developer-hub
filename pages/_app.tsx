import '../styles/globals.css'

import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import type { ReactElement, ReactNode } from 'react'

import { MobileNav } from '../src/components/Header/MobileNav'
import { MobileMenu } from '../src/components/Sidebar/Menu/'
import { AppProvider } from '../src/contexts/app/AppContext'
import { ThemeProvider } from '../src/hooks/useTheme'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page: ReactNode) => page)

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#004ac2" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <ThemeProvider>
        <AppProvider>
          {getLayout(<Component {...pageProps} />)}
          <MobileMenu />
          <MobileNav />
          <div id="search"></div>
        </AppProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
