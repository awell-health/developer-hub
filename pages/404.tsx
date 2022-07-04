import Link from 'next/link'

import { Search } from '../src/components/Search'

export default function Custom404() {
  return (
    <div className="h-screen pt-16 pb-12 flex flex-col bg-white">
      <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="text-center">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              404
            </p>
            <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Page not found.
            </h1>
            <div className="w-96 mx-auto">
              <p className="mt-2 text-base text-gray-500">
                It seems you are lost. Go back to our home page or use the
                search bar to try and find what you are looking for.
              </p>
              <div className="mt-4">
                <Search />
              </div>
            </div>
            <div className="mt-6">
              <Link href="/">
                <a className="text-base font-medium text-blue-600 hover:text-blue-500">
                  Go back home<span aria-hidden="true"> &rarr;</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
