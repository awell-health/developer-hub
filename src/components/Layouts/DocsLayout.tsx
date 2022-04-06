import Head from 'next/head'
import { ReactNode } from 'react'

import { Header } from '../Header'
import { Sidebar } from '../Sidebar'

interface LayoutProps {
  children: ReactNode
}

export const DocsLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
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
      <Header />
      <div>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 mb-32">
          <Sidebar />
          <div className="lg:pl-[19.5rem]">
            <div className="max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
