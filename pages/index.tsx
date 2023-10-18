/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { GetServerSideProps } from 'next/types'
import { ReactNode } from 'react'

import { LinkButton } from '@/components/Button'
import { HomeLayout } from '@/components/Layouts'
import { RandomExtensionsPanel } from '@/components/Marketplace/molecules/RandomExtensionsPanel/RandomExtensionsPanel'
import { SEO } from '@/components/SEO'
import { rootRoutes } from '@/config/routes'
import { Extension } from '@/types/extenion.types'
import { Space } from '@/types/space.types'

type PageProps = {
  extensions: Extension[]
}

const domains = [
  {
    url: rootRoutes[Space.AWELL_ORCHESTRATION].home,
    title: 'Awell Orchestration',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    ),
    description:
      'Build care flows in our no-code editor and embed them into your tech stack. Explore our guides, API references, and examples to start integrating with Awell.',
  },
  {
    url: rootRoutes[Space.AWELL_EXTENSIONS].home,
    title: 'Awell Extensions',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"
        />
      </svg>
    ),
    description:
      'We provide developers an SDK allowing them to assemble their own piece of software to extend the capabilities of the Awell Platform.',
  },
  {
    url: rootRoutes[Space.AWELL_SCORE].home,
    title: 'Awell Score',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"
        />
      </svg>
    ),
    description:
      'A standalone API developed by the Awell team that can be used to calculate validated scores for clinical & patient reported outcome measures.',
  },
]

export default function Home({ extensions }: PageProps) {
  return (
    <>
      <SEO
        description="Explore our guides, API references, and examples to start integrating with Awell."
        url=""
        canonicalUrl=""
      />
      <div className="relative max-w-6xl mx-auto pt-4 md:pt-8 lg:pt-12 px-4 sm:px-6 md:px-8">
        <div>
          <div className="overflow-hidden py-4 lg:py-8">
            <div>
              <div className="relative">
                <h2 className="mb-0 text-center text-3xl font-bold leading-8 tracking-tight text-slate-900 sm:text-4xl">
                  Welcome
                </h2>
                <p className="mx-auto mt-2 max-w-3xl text-center text-xl text-slate-500 dark:text-slate-400">
                  It&apos;s Awell&apos;s mission to make care flows work harder
                  than care teams.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h2
            id="integrate-with-awell"
            className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl mb-0"
          >
            Documentation
          </h2>
          <p className="mt-1 text-lg text-slate-600 dark:text-slate-400">
            Explore our different solutions and corresponding doc spaces and
            start integrating with Awell.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {domains.map((d) => (
              <Link href={d.url} key={d.title}>
                <a className="block group relative rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
                  <div className="relative overflow-hidden rounded-xl p-6 flex flex-col justify-start h-full">
                    <div className="dark:text-slate-400 pt-1 flex flex-col flex-grow">
                      <div>
                        <div className="bg-blue-600 text-white dark:bg-sky-400 rounded-lg p-1.5 inline-block">
                          {d.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold dark:text-sky-400">
                          {d.title}
                        </h3>
                        <span className="pt-2">{d.description}</span>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-12">
          <h3
            id="integrate-with-awell"
            className="text-xl font-bold tracking-tight text-slate-900 sm:text-3xl mb-0"
          >
            Marketplace
          </h3>
          <p className="mt-1 text-lg text-slate-600 dark:text-slate-400">
            Browse our marketplace and find extensions that bring your care
            flows to the next level.
          </p>
          <div className="mt-6">
            <RandomExtensionsPanel
              extensions={extensions}
              n={4}
              cols={4}
              cardType="condensed"
            />
          </div>
          <div className="mt-4 flex justify-center">
            <LinkButton
              label="Browse all extensions"
              color="sky"
              href={`/${Space.AWELL_EXTENSIONS}/marketplace`}
            />
          </div>
        </div>
      </div>
      <footer className="pb-16 text-sm leading-6">
        <div className="max-w-7xl mx-auto divide-y divide-slate-200 px-4 sm:px-6 md:px-8 dark:divide-slate-700">
          <div className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-600">
            <div className="leading-none text-slate-700 dark:text-slate-200">
              <svg className="w-32" viewBox="0 0 190 50">
                <g>
                  <path
                    id="svg_1"
                    d="m169.7,0l6.8,0l0,38.7l-6.8,0l0,-38.7zm13.3,0l6.8,0l0,38.7l-6.8,0l0,-38.7zm-38.5,24.5l12.4,-5.2c-0.6,-0.7 -1.4,-1.3 -2.3,-1.7c-0.9,-0.4 -1.9,-0.6 -3,-0.6c-1,0 -1.9,0.2 -2.8,0.6c-0.9,0.4 -1.6,0.9 -2.2,1.6c-0.6,0.7 -1.1,1.5 -1.5,2.4c-0.4,0.8 -0.6,1.8 -0.6,2.9m-6.4,0.4c0,-1.9 0.4,-3.7 1.1,-5.4s1.7,-3.1 2.9,-4.4s2.7,-2.2 4.3,-3c1.6,-0.7 3.4,-1.1 5.3,-1.1c1.6,0 3.1,0.2 4.5,0.7s2.7,1.2 3.9,2.1c1.1,0.9 2.1,2.1 2.9,3.5c0.8,1.4 1.4,2.9 1.6,4.7l-18.6,7.8c0.7,0.9 1.5,1.6 2.5,2.1c0.9,0.5 2,0.8 3.2,0.8c1.1,0 2.2,-0.2 3.2,-0.7c1,-0.5 1.8,-1.3 2.4,-2.3l7.2,0c-0.8,2.7 -2.3,4.9 -4.5,6.5c-2.2,1.7 -5,2.5 -8.3,2.5c-1.9,0 -3.6,-0.4 -5.3,-1.1c-1.6,-0.7 -3.1,-1.7 -4.3,-2.9c-1.2,-1.2 -2.2,-2.7 -2.9,-4.4c-0.8,-1.7 -1.1,-3.5 -1.1,-5.4m-44.9,2l0,-15.2l6.8,0l0,15.4c0,0.4 0.1,0.9 0.2,1.4c0.1,0.6 0.3,1.1 0.7,1.6c0.3,0.5 0.8,1 1.5,1.4c0.7,0.4 1.5,0.6 2.6,0.6c1.5,0 2.8,-0.5 3.7,-1.4c0.9,-0.9 1.4,-2.1 1.4,-3.6l0,-15.4l6.8,0l0,15.4c0,0.4 0.1,0.9 0.2,1.4s0.3,1.1 0.7,1.6c0.3,0.5 0.8,1 1.5,1.4c0.7,0.4 1.5,0.6 2.7,0.6c1.5,0 2.7,-0.5 3.7,-1.4c1,-0.9 1.4,-2.1 1.4,-3.6l0,-15.4l6.8,0l0,15.2c0,1.7 -0.3,3.2 -0.9,4.7c-0.6,1.4 -1.4,2.7 -2.4,3.8c-1,1.1 -2.3,1.9 -3.8,2.5c-1.5,0.6 -3.1,0.9 -4.9,0.9c-1.8,0 -3.4,-0.3 -4.8,-1s-2.6,-1.6 -3.6,-2.7c-1,1.2 -2.2,2.1 -3.6,2.7c-1.4,0.7 -3,1 -4.8,1c-1.8,0 -3.5,-0.3 -4.9,-0.9c-1.4,-0.6 -2.7,-1.4 -3.7,-2.4s-1.8,-2.3 -2.3,-3.7c-0.7,-1.6 -1,-3.2 -1,-4.9m-25.4,-2c0,1 0.2,2 0.5,2.9c0.4,0.9 0.8,1.7 1.5,2.4c0.6,0.7 1.3,1.2 2.2,1.6c0.8,0.4 1.7,0.6 2.6,0.6s1.8,-0.2 2.6,-0.6c0.8,-0.4 1.6,-0.9 2.2,-1.6c0.6,-0.7 1.1,-1.5 1.5,-2.4c0.4,-0.9 0.5,-1.9 0.5,-2.9s-0.2,-2 -0.5,-3c-0.4,-0.9 -0.8,-1.7 -1.5,-2.4c-0.6,-0.7 -1.3,-1.2 -2.2,-1.6c-0.8,-0.4 -1.7,-0.6 -2.6,-0.6c-0.9,0 -1.8,0.2 -2.6,0.6c-0.8,0.4 -1.5,0.9 -2.2,1.6c-0.6,0.7 -1.1,1.5 -1.5,2.4c-0.3,0.9 -0.5,1.9 -0.5,3m-6.8,0c0,-1.9 0.3,-3.7 1,-5.4c0.7,-1.7 1.6,-3.1 2.8,-4.4c1.2,-1.2 2.6,-2.2 4.3,-2.9c1.7,-0.7 3.5,-1.1 5.5,-1.1s3.8,0.4 5.5,1.1c1.7,0.7 3.1,1.7 4.3,3c1.2,1.2 2.1,2.7 2.8,4.4c0.7,1.7 1,3.5 1,5.4l0,13.8l-6.4,0l0,-3.5c-1,1.1 -2.2,1.9 -3.6,2.5c-1.4,0.6 -2.9,0.8 -4.5,0.8c-1.7,0 -3.4,-0.4 -4.9,-1.1c-1.5,-0.7 -2.9,-1.7 -4,-3c-1.2,-1.2 -2.1,-2.7 -2.7,-4.4c-0.8,-1.5 -1.1,-3.3 -1.1,-5.2"
                    fill="currentColor"
                  />
                  <path
                    id="svg_2"
                    fill="currentColor"
                    d="m7.3,21.7c1.4,-7.4 7.2,-13.2 14.6,-14.6l0,-6.8c-11.1,1.4 -20,10.2 -21.6,21.4l7,0zm21.4,-14.6c8.5,1.6 14.9,9 14.9,18c0,3.8 -1.2,7.4 -3.2,10.3l4.9,4.9c3.2,-4.2 5,-9.4 5,-15.1c0.1,-12.7 -9.3,-23.2 -21.6,-24.9l0,6.8zm7,33.1c-2.9,2 -6.5,3.2 -10.3,3.2c-9,0 -16.4,-6.4 -18,-14.9l-7,0c1.6,12.4 12.2,21.9 25,21.9c5.8,0 11.1,-2 15.4,-5.2l-5.1,-5z"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactNode) {
  return <HomeLayout>{page}</HomeLayout>
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_EXTENSIONS_API_ENDPOINT ?? '')
  const extensions = await res.json()
  return { props: { extensions } }
}
