import Link from 'next/link'

import { Footer } from '@/components/Footer'
import { SEO } from '@/components/SEO'

export default function Custom404() {
  return (
    <div className="h-screen pt-16 pb-12 flex flex-col">
      <SEO title="404" url="" preventCrawling={true} canonicalUrl="" />
      <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="text-center">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide dark:text-sky-400">
              404
            </p>
            <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Page not found.
            </h1>
            <div className="w-96 mx-auto">
              <p className="mt-2 text-base text-gray-500 dark:text-slate-400">
                It seems you are lost. Go back to our home page and use the
                search to find what you are looking for
              </p>
            </div>
            <div className="mt-6">
              <Link
                href="/"
                className="text-base font-medium text-blue-600 dark:text-sky-400 hover:text-blue-500 dark:hover:text-sky-500"
              >
                Go back home<span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  )
}
