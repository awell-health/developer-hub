import Head from 'next/head'
import { ReactNode, useContext } from 'react'

import { AppContext } from '../../contexts/app/AppContext'
import { Footer } from './footer'
import { Nav } from './nav'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const { appState } = useContext(AppContext)

  return (
    <>
      <Head>
        <title>Awell Health</title>
        <meta name="description" content="Awell Health" />
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
      <div
        className="flex flex-col h-screen justify-between bg-blue-50"
        style={{ backgroundColor: '#fafdff' }}
      >
        <Nav />
        <main
          className={`mb-auto pt-10 md:pt-20 ${
            appState.isMobileMenuOpen ? 'hidden' : 'block'
          }`}
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
