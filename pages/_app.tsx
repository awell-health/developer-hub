import '../styles/globals.css'

import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import type { NextPage } from 'next/types'
import type { ReactElement, ReactNode } from 'react'

import { MobileNav } from '@/components/Header/MobileNav'
import { MobileMenu } from '@/components/Sidebar/Menu/'
import { AppProvider } from '@/contexts/app/AppContext'
import { ThemeProvider } from '@/hooks/useTheme'

import client from '../src/clients/awellOrchestrationGraphQlClient'

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
        <link rel="shortcut icon" type="image/png" href="/awell-favicon.png" />
        <link
          rel="apple-touch-icon"
          type="image/png"
          href="/awell-webclip.png"
        />
      </Head>
      {process.env.NODE_ENV === 'production' && (
        <>
          <Script
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <Script
            src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"
            strategy="lazyOnload"
          />
          <Script
            src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/javascript.min.js"
            strategy="lazyOnload"
          />
          <Script id="google-analytics" strategy="lazyOnload">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
          </Script>
          <Script
            id="intercom_1"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
            window.intercomSettings = {
              api_base: "https://api-iam.intercom.io",
              app_id: "${process.env.NEXT_PUBLIC_INTERCOM_APP_ID}",
              source: 'awell_developers',
              alignment: 'left',
              horizontal_padding: 66,
              vertical_padding: 1
            }
            `,
            }}
          />
          <Script
            id="intercom_2"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
            (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/yfwvlb21';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
            `,
            }}
          />
        </>
      )}

      <ApolloProvider client={client}>
        <ThemeProvider>
          <AppProvider>
            {getLayout(<Component {...pageProps} />)}
            <MobileMenu />
            <MobileNav />
            <div id="search"></div>
          </AppProvider>
        </ThemeProvider>
      </ApolloProvider>
    </>
  )
}

export default MyApp
