/* eslint-disable @next/next/no-img-element */
import { ReactNode } from 'react'

import { LinkButton } from '@/components/Button'
import { Footer } from '@/components/Footer'
import { HomeLayout } from '@/components/Layouts'
import { SEO } from '@/components/SEO'
import { Space } from '@/types/space.types'

const benefits = [
  {
    title: 'Launch in minutes',
    description:
      'Drop‑in, production‑ready experiences. Turn weeks of UI and API work into a single embed.',
  },
  {
    title: 'Higher conversion',
    description:
      'Opinionated, friction‑less flows that help more patients complete the journey.',
  },
  {
    title: 'Fits your brand',
    description:
      'Configure copy, steps, and rules—no need to rebuild your app or maintain bespoke screens.',
  },
  {
    title: 'Secure by default',
    description:
      'Privacy‑first, compliant, and built for healthcare. Ship confidently from day one.',
  },
  {
    title: 'Built for developers',
    description:
      'Modern SDKs, webhooks, and clear docs so you can extend, automate, and integrate anywhere.',
  },
  {
    title: 'Measure & optimize',
    description:
      'Track completion and drop‑off to improve journeys with data, not guesswork.',
  },
]

export default function Home() {
  return (
    <>
      <SEO
        title="Awell Navi"
        url={`/${Space.NAVI}`}
        canonicalUrl={`/${Space.NAVI}`}
      />
      <div className="pt-16 sm:pt-24 lg:pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Launch embedded care experiences
              <span className="text-blue-600 dark:text-sky-500">
                {' '}
                in minutes
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400 sm:max-w-lg mx-auto">
              Think Stripe Checkout—built for healthcare workflows. Drop it in,
              configure, and go live with integrated, HIPAA compliant
              experiences for patients and care teams.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-4">
              <LinkButton
                href={`/${Space.NAVI}/docs`}
                label="Read the docs"
                color="sky"
              />
              <LinkButton
                href={`/${Space.NAVI}/tutorials/quickstart`}
                label="Quickstart"
                color="white"
              />
            </div>
          </div>

          <div className="my-16 sm:my-24">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="relative rounded-xl border border-slate-200 dark:border-slate-800 p-6 hover:border-blue-400 dark:hover:border-sky-400"
                >
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">
                    {b.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="my-16 sm:my-24">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Purpose‑built so product and clinical teams can move fast
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">
                Launch once—evolve continuously. Configure steps and rules in
                Awell Studio while Navi handles the UI, state, validation, and
                instrumentation.
              </p>
              <div className="mt-8 flex items-center justify-center gap-x-4">
                <LinkButton
                  href={`/${Space.NAVI}/docs`}
                  label="Explore capabilities"
                  color="sky"
                />
                <LinkButton
                  href={`/${Space.AWELL_ORCHESTRATION}/docs/getting-started/orchestration-introduction`}
                  label="How it fits with Awell"
                  color="white"
                />
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactNode) {
  return <HomeLayout>{page}</HomeLayout>
}
