import Link from 'next/link'
import { ReactNode } from 'react'

import { Button } from '../src/components/Button'
import { HomeLayout } from '../src/components/Layouts'
import { SEO } from '../src/components/SEO'
import {
  awellOrchestrationHomePage,
  awellScoreHomePage,
} from '../src/config/routes'

export default function Home() {
  return (
    <>
      <SEO
        description="Explore our guides, API references, and examples to start integrating with Awell."
        url="/"
        canonicalUrl="/"
      />
      <div className="relative max-w-5xl mx-auto pt-4 md:pt-8 lg:pt-12 px-4 sm:px-6 md:px-8">
        <div>
          <h1 className="text-slate-900 font-extrabold text-xl sm:text-2xl lg:text-3xl tracking-tight dark:text-white">
            Documentation
          </h1>
          <p className="mt-2 text-xl text-slate-600 dark:text-slate-400">
            Explore our guides, API references, and examples to start
            integrating with Awell.
          </p>
        </div>
        <div className="mt-12 flex">
          <div className="w-7/12">
            <div className="w-full lg:w-11/12">
              <h2 className="text-slate-900 text-xl lg:text-2xl font-bold dark:text-white m-0 p-0">
                Integrate with Awell in less then a day
              </h2>
              <p className="mt-1 text-lg text-slate-600 dark:text-slate-400">
                Get started with Awell in one API call with the{' '}
                <strong>hosted pathway</strong> integration.
              </p>
              <div className="mt-2">
                <div className="font-semibold">Effort:</div>
                <div className="flex pt-1">
                  <div className="w-2.5 h-2.5 mr-1.5 rounded-full bg-sky-400"></div>
                  <div className="w-2.5 h-2.5 mr-1.5 rounded-full bg-slate-300"></div>
                  <div className="w-2.5 h-2.5 mr-1.5 rounded-full bg-slate-300"></div>
                  <div className="w-2.5 h-2.5 mr-1.5 rounded-full bg-slate-300"></div>
                  <div className="w-2.5 h-2.5 mr-1.5 rounded-full bg-slate-300"></div>
                </div>
              </div>
              <div className="mt-4">
                <Button
                  label="Get started"
                  onClick={() => true}
                  size="sm"
                  color="sky"
                />
              </div>
            </div>
          </div>
          <div className="w-5/12">
            <figure className="w-full flex flex-col justify-center text-center">
              <div>
                <img
                  src="https://res.cloudinary.com/da7x4rzl4/image/upload/v1651756063/Developer%20portal/hosted_pathway_vis.png"
                  alt="Hosted Pathway"
                  className="w-full mx-auto bg-[#001A44] dark:bg-transparent rounded-lg"
                />
              </div>
            </figure>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-slate-900 text-xl lg:text-2xl font-bold dark:text-white m-0 p-0">
            All integration use cases
          </h2>
          <p className="mt-1 text-lg text-slate-600 dark:text-slate-400">
            Select the use case that fits you best. From almost writing no code
            to a full custom integration.
          </p>
          <div className="grid grid-cols-3 gap-3 mt-4">
            <Link href="#">
              <a className="block group relative rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
                <figure className="relative overflow-hidden rounded-xl p-6 flex flex-col justify-start h-full">
                  <img
                    src="https://res.cloudinary.com/da7x4rzl4/image/upload/v1651756063/Developer%20portal/628df8e945c036bc4dc479bf_Home_Visual-p-1080.png"
                    alt=""
                    className="w-full sm:w-11/12 hidden"
                  />
                  <figcaption className="dark:text-slate-400 pt-1 flex flex-col flex-grow">
                    <div>
                      <h3 className="font-semibold dark:text-sky-400">
                        Hosted pathways
                      </h3>
                      <span className="pt-3">
                        Redirect users to an Awell pathway page without needing
                        to build a front-end yourself. Ideal for patient
                        onboarding flows.
                      </span>
                    </div>
                    <div className="mt-auto">
                      <div className="pt-3">Effort:</div>
                      <div className="flex pt-1">
                        <div className="w-2.5 h-2.5 mr-1.5 rounded-full bg-sky-400"></div>
                        <div className="w-2.5 h-2.5 mr-1.5 rounded-full bg-slate-300"></div>
                        <div className="w-2.5 h-2.5 mr-1.5 rounded-full bg-slate-300"></div>
                        <div className="w-2.5 h-2.5 mr-1.5 rounded-full bg-slate-300"></div>
                        <div className="w-2.5 h-2.5 mr-1.5 rounded-full bg-slate-300"></div>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </a>
            </Link>
            <Link href="#">
              <a className="block group relative rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
                <figure className="relative overflow-hidden rounded-xl p-6 flex flex-col justify-start h-full">
                  <img
                    src="https://res.cloudinary.com/da7x4rzl4/image/upload/v1651756063/Developer%20portal/628df8e945c036bc4dc479bf_Home_Visual-p-1080.png"
                    alt=""
                    className="w-full sm:w-11/12 hidden"
                  />
                  <figcaption className="dark:text-slate-400 pt-1 flex flex-col flex-grow">
                    <div>
                      <h3 className="font-semibold dark:text-sky-400">
                        Hosted activity page
                      </h3>
                      <span className="pt-3">
                        Send multiple stakeholders to an Awell-hosted page to
                        complete activities in more elaborate pathways. Ideal
                        for triage flows, outcomes / PROMs collection and more.
                      </span>
                    </div>
                    <div className="mt-auto">
                      <div className="pt-3">Effort:</div>
                      <div className="flex pt-1">
                        <div className="w-2.5 h-2.5 mr-1.5 rounded-full bg-sky-400"></div>
                        <div className="w-2.5 h-2.5 mr-1.5 rounded-full bg-sky-400"></div>
                        <div className="w-2.5 h-2.5 mr-1.5 rounded-full bg-slate-300"></div>
                        <div className="w-2.5 h-2.5 mr-1.5 rounded-full bg-slate-300"></div>
                        <div className="w-2.5 h-2.5 mr-1.5 rounded-full bg-slate-300"></div>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </a>
            </Link>
            <Link href="#">
              <a className="block group relative rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
                <figure className="relative overflow-hidden rounded-xl p-6 flex flex-col justify-start h-full">
                  <img
                    src="https://res.cloudinary.com/da7x4rzl4/image/upload/v1651756063/Developer%20portal/628df8e945c036bc4dc479bf_Home_Visual-p-1080.png"
                    alt=""
                    className="w-full sm:w-11/12 hidden"
                  />
                  <figcaption className="dark:text-slate-400 pt-1 flex flex-col flex-grow">
                    <div>
                      <h3 className="font-semibold dark:text-sky-400">
                        Custom integration
                      </h3>
                      <span className="pt-3">
                        Build your own UI on Awell Orchestration for full
                        customization and flexibility.
                      </span>
                    </div>
                    <div className="mt-auto">
                      <div className="pt-3">Effort:</div>
                      <div className="flex pt-1">
                        <div className="w-2.5 h-2.5 mr-1.5 rounded-full bg-sky-400"></div>
                        <div className="w-2.5 h-2.5 mr-1.5 rounded-full bg-sky-400"></div>
                        <div className="w-2.5 h-2.5 mr-1.5 rounded-full bg-sky-400"></div>
                        <div className="w-2.5 h-2.5 mr-1.5 rounded-full bg-slate-300"></div>
                        <div className="w-2.5 h-2.5 mr-1.5 rounded-full bg-slate-300"></div>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </a>
            </Link>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-slate-900 text-xl lg:text-2xl font-bold dark:text-white">
            Browse by product
          </h2>
          <div className="grid gap-6 mx-auto mt-4 md:grid-cols-2">
            <Link href={awellOrchestrationHomePage} passHref>
              <div className="grid items-center grid-flow-col p-4 drop-shadow-sm bg-blue-50 rounded-2xl dark:bg-blue-200 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-300">
                <div className="flex justify-center flex-col max-w-[354px] mx-auto py-12">
                  <div className="text-2xl font-bold text-slate-800 text-center my-6 dark:text-slate-800">
                    Awell Orchestration
                  </div>
                  <p className="text-center text-lg text-slate-600">
                    Build care flows in Awell Studio and operate them via our
                    Orchestration API.
                  </p>
                  <Link href={awellOrchestrationHomePage}>
                    <a
                      title=""
                      className="mt-4 underline text-slate-900 text-center font-semibold text-lg"
                    >
                      Learn more
                    </a>
                  </Link>
                </div>
              </div>
            </Link>
            <Link href={awellScoreHomePage} passHref>
              <div className="grid items-center grid-flow-col p-4 drop-shadow-sm bg-violet-100 rounded-2xl dark:bg-violet-200 cursor-pointer hover:bg-violet-200 dark:hover:bg-violet-300">
                <div className="flex justify-center flex-col max-w-[354px] mx-auto py-12">
                  <div className="text-2xl font-bold text-slate-800 text-center my-6 dark:text-slate-800">
                    Awell Score
                  </div>
                  <p className="text-center text-lg text-slate-600">
                    Our API to calculate scores for patient & clinical reported
                    outcomes.
                  </p>
                  <Link href={awellScoreHomePage}>
                    <a
                      title=""
                      className="mt-4 underline text-slate-900 text-center font-semibold text-lg"
                    >
                      Learn more
                    </a>
                  </Link>
                </div>
              </div>
            </Link>
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
