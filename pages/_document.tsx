import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.min.css"
        />
      </Head>
      <body className="antialiased bg-white dark:bg-slate-900">
        <Main />
        {process.env.NODE_ENV === 'production' && (
          <>
            <Script
              strategy="beforeInteractive"
              src="https://cdn-cookieyes.com/client_data/5f6661d434c5243eba8423d0/script.js"
            />
            <Script
              src="https://tag.clearbitscripts.com/v1/pk_0750bfd7c0a4df7b139a397e81a963db/tags.js"
              strategy="beforeInteractive"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </>
        )}
        <NextScript />
      </body>
    </Html>
  )
}
