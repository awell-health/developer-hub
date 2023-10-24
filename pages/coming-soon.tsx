import Link from 'next/link'

import { Footer } from '@/components/Footer'
import { Search } from '@/components/Search'
import { SEO } from '@/components/SEO'

export default function ComingSoon() {
  return (
    <div className="h-screen pt-16 pb-12 flex flex-col">
      <SEO title="Coming soon" url="/coming-soon" canonicalUrl="/coming-soon" />
      <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="text-center">
            <p className="text-sm font-semibold text-blue-600 dark:text-sky-400 uppercase tracking-wide">
              Thank you for your interest
            </p>
            <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              This page is coming soon
            </h1>
            <div className="w-96 mx-auto">
              <p className="mt-2 text-base text-gray-500 dark:text-slate-400">
                We are currently working on this page. In the meantime, go back
                to our home page or use the search bar to try and find other
                documentation that could help you.
              </p>
              <div className="mt-4">
                <Search />
              </div>
            </div>
            <div className="mt-6">
              <Link href="/">
                <a className="text-base font-medium text-blue-600 dark:text-sky-400 hover:text-blue-500 dark:hover:text-sky-500">
                  Go back home<span aria-hidden="true"> &rarr;</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer footerHeight="expanded" dividerWidth="standard" />
    </div>
  )
}
