import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode } from 'react'

import { Alert } from '@/components/Alert'
import { LinkButton } from '@/components/Button'
import { DocsHeader } from '@/components/Docs/atoms'
import { FAQ } from '@/components/FAQ'
import { DocsLayoutWithoutToc } from '@/components/Layouts'
import { SEO } from '@/components/SEO'
import { StackSelector } from '@/components/StackSelector'
import {
  Html,
  NextJsBackEndDocs,
  NextJsFrontEndDocs,
  Node,
  ReactDocs,
  stack,
} from '@/content/awell-orchestration/docs/activities/hosted-pathway'
import { useStack } from '@/hooks/useStack'
import { Space } from '@/types/space.types'

export default function HostedPathwayPage() {
  const { frontEnd, backEnd, changeBackEnd, changeFrontEnd } = useStack()

  const onChangeStack = ({
    newFrontEnd,
    newBackEnd,
  }: {
    newFrontEnd?: string
    newBackEnd?: string
  }) => {
    if (newFrontEnd) {
      changeFrontEnd(newFrontEnd)
    }
    if (newBackEnd) {
      changeBackEnd(newBackEnd)
    }
  }

  return (
    <div>
      <SEO
        title="Hosted Pathway"
        description="Get up and running with Awell Orchestration in less than a day"
        url={`/${Space.AWELL_ORCHESTRATION}/docs/activities/awell-hosted-pages/hosted-pathway-guide`}
        canonicalUrl={`/${Space.AWELL_ORCHESTRATION}/docs/activities/awell-hosted-pages/hosted-pathway-guide`}
      />
      <div className="flex mb-8">
        <StackSelector
          selectedStack={{
            frontEnd: frontEnd,
            backEnd: backEnd,
          }}
          onStackChange={onChangeStack}
          stacks={stack}
        />
      </div>
      <DocsHeader
        heading={'Interact with activities'}
        title={'Awell Hosted Pathway'}
        description={
          'Get up and running with Awell Orchestration in less than a day'
        }
        customLink={{
          url: `${process.env.NEXT_PUBLIC_AWELL_STORIES_API_URL}/stories/hosted-pathway`,
          title: 'Try it out',
        }}
      />
      {/* Intro section */}
      <div className="max-w-4xl">
        <div id="content-wrapper">
          <p>
            This page will allow users to complete a pathway or flow and is a
            low-code integration.
          </p>
          <h2>Pathway lifecycle</h2>
          <p>
            The basic lifecycle for a hosted pathway experience looks like this:
          </p>
          <ol className="no-pl">
            <li>
              When a pathway needs to be started for a client, your application
              creates a new Pathway Session.
            </li>
            <li>
              The Pathway Session provides a URL that redirects your client to
              an Awell-hosted pathway page.
            </li>
            <li>
              Your client can interact with the pathway or care flow and
              complete activities.
            </li>
            <li>
              When the pathway is completed, a webhook (
              <code>pathway.completed</code>) is triggered to let you know the
              pathway is completed.
            </li>
          </ol>
          <figure className="w-full flex flex-col justify-center text-center pt-4">
            <div className="w-full sm:w-11/12 mx-auto text-center">
              <a
                href="https://res.cloudinary.com/da7x4rzl4/image/upload/v1658318620/Developer%20portal/hosted-pathway-sequence-diagram.png"
                target="_blank"
                rel="noreferrer"
                className="custom-link"
              >
                <Image
                  src="https://res.cloudinary.com/da7x4rzl4/image/upload/v1658318620/Developer%20portal/hosted-pathway-sequence-diagram.png"
                  alt="Hosted pathway sequence diagram"
                  className="rounded-lg"
                  width="5408"
                  height="3606"
                />
              </a>
            </div>
            <figcaption className="dark:text-slate-400 pt-1">
              Hosted pathway lifecycle © Awell Health
            </figcaption>
          </figure>
          <h2>Low-code integration</h2>
          <p>
            The hosted pathway integration requires minimal coding.{' '}
            <Link
              href="/awell-orchestration/docs/getting-started/integrations-overview"
              title="this page"
            >
              Compare the hosted pathway integration to other options
            </Link>{' '}
            to determine which option meets your requirements .
          </p>
          <h2>Prerequisites</h2>
          <p>To get started, there are a couple of things you need:</p>
          <ol>
            <li>
              An <strong>API key</strong> to authorize requests to the Awell
              API. Click{' '}
              <Link
                href="/awell-orchestration/api-reference/overview/authorization"
                title="Get API key"
              >
                here
              </Link>{' '}
              to get your API key.
            </li>
            <li>
              A <strong>published pathway</strong> that meets the{' '}
              <Link
                href="/awell-orchestration/docs/activities/overview-activities"
                title="requirements"
              >
                requirements
              </Link>{' '}
              to be used with the Awell hosted pathway integration. To get
              started quickly, you can use a template pathway that is available
              for you in Awell Studio by default (see table below). You can also
              use a pathway you created yourself.
            </li>
          </ol>
          <h3>Published pathway</h3>
          <p>
            To get started quickly with this guide, use a template pathway to
            test this integration. Choose the pathway definition id in the
            environment you are integrating against.
          </p>
          <table>
            <thead>
              <tr>
                <th>Environment</th>
                <th>Pathway definition id</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sandbox</td>
                <td>J0oNK2V91RL2</td>
              </tr>
              <tr>
                <td>Production</td>
                <td>Not available yet</td>
              </tr>
            </tbody>
          </table>
          <h3>Webhooks (optional)</h3>
          <p>
            <strong>
              You can configure Webhooks to get notified when a pathway is
              started and/or completed.
            </strong>{' '}
            Webhooks are configured on a per pathway basis via the pathway
            settings so if you want to receive webhooks for these events, you
            will have to configure them via the pathway settings.
          </p>
          <div className="mb-12">
            <Alert title="Configure webhooks" type="info">
              Click{' '}
              <Link
                href="https://help.awellhealth.com/en/articles/6103339-configure-a-webhook"
                title="Configure webhooks"
                target="_blank"
              >
                here
              </Link>{' '}
              for more information on how to configure Webhooks on pathways. The
              payload of the{' '}
              <Link
                href="/awell-orchestration/api-reference/webhooks/pathway-started"
                title="pathway.started webhook"
                target="_blank"
              >
                pathway.started
              </Link>{' '}
              and{' '}
              <Link
                href="/awell-orchestration/api-reference/webhooks/pathway-completed"
                title="pathway.completed wehook"
                target="_blank"
              >
                pathway.completed
              </Link>{' '}
              webhook can be found on the respective links.
            </Alert>
          </div>
        </div>
      </div>
      {/* Guide section */}
      <div>
        <h2>Get started</h2>
        {/* Set up front-end */}
        <div>
          {/* React */}
          {frontEnd === 'React' && <ReactDocs />}
          {/* HTML */}
          {frontEnd === 'HTML' && <Html />}
          {/* Next.js */}
          {frontEnd === 'Next.js' && <NextJsFrontEndDocs />}
        </div>
        {/* Set up server */}
        <div className="mt-12">
          {backEnd === 'Node' && frontEnd !== 'Next.js' && (
            <Node frontEnd={frontEnd} />
          )}
          {frontEnd === 'Next.js' && <NextJsBackEndDocs />}
          <div className="mt-8">
            <Alert type="info" title="Awell Node library">
              <p>
                We are working on an Awell Node library that you can install to
                make it even more easy to access the Awell API functionalities.
              </p>
            </Alert>
          </div>
        </div>
        {/* Test */}
        <div className="mt-12">
          <div className="flex flex-row mb-8">
            <div className="leading-none text-sm bg-slate-200 text-slate-600 rounded-full font-semibold mr-4 px-2.5 py-0.5 flex items-center">
              3
            </div>
            <div className="text-lg sm:text-xl text-slate-900 tracking-tight font-bold dark:text-slate-200">
              Test your page
            </div>
          </div>
          <div className="flex gap-8">
            <div className="max-w-4xl flex flex-col gap-4">
              <div className="relative bg-slate-50 border border-slate-200 rounded-xl p-6 text-left dark:bg-slate-800 dark:border-slate-600">
                <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
                <div className="relative">
                  <p className="text-slate-700 dark:text-slate-200 mb-2">
                    <strong>Run the application</strong>
                  </p>
                  {frontEnd === 'React' && (
                    <p>
                      Start your applications (front-end and server) and
                      navigate to{' '}
                      <Link
                        href="http://localhost:3000"
                        className="underline text-sky-500"
                      >
                        http://localhost:3000
                      </Link>
                      . Press the &quot;Start pathway session&quot; button to go
                      to the Awell hosted pathway page and complete the pathway.
                    </p>
                  )}
                  {frontEnd === 'HTML' && (
                    <p>
                      Start your server and open the start-pathway-session.html
                      page. Press the &quot;Start pathway session&quot; button
                      to go to the Awell hosted pathway page and complete the
                      pathway.
                    </p>
                  )}
                  {frontEnd === 'Next.js' && (
                    <p>
                      Start your app with{' '}
                      <div id="content-wrapper" className="inline">
                        <code>npm run dev</code>
                      </div>{' '}
                      and navigate to{' '}
                      <Link
                        href="http://localhost:3000"
                        className="underline text-sky-500"
                      >
                        http://localhost:3000
                      </Link>
                      .
                    </p>
                  )}
                </div>
              </div>
              <div className="relative bg-slate-50 border border-slate-200 rounded-xl p-6 text-left dark:bg-slate-800 dark:border-slate-600">
                <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
                <div className="relative">
                  <p className="text-slate-700 dark:text-slate-200 mb-2">
                    <strong>Try it out</strong>
                  </p>
                  <p>
                    Click the button below to see a working example of the
                    hosted pathway page.
                  </p>
                  <div className="mt-4">
                    <LinkButton
                      label="Try it out"
                      newTab={true}
                      color="sky"
                      href={`${process.env.NEXT_PUBLIC_AWELL_STORIES_API_URL}/stories/hosted-pathway`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ */}
      <div className="mt-12">
        <FAQ
          faqs={[
            {
              question:
                'Can we apply custom branding on the hosted pathway page?',
              answer:
                'Yes! You can customize the logo, accent color, and page title.',
            },
            {
              question:
                'Can we create a custom domain for the hosted pathway page?',
              answer:
                "No, custom domains are not yet supported. Let us know if you'd be interested in that!",
            },
            {
              question: 'How long before a hosted pathway session expires?',
              answer:
                'By default, sessions expire after 60 minutes but the timer is reset after every completion of an activity. A session also expires when there are no pending activities left in a pathway.',
            },
          ]}
        />
      </div>
      <div className="mt-12">{/* <QuickNav prev={prev} next={next} /> */}</div>
    </div>
  )
}

HostedPathwayPage.getLayout = function getLayout(page: ReactNode) {
  return <DocsLayoutWithoutToc>{page}</DocsLayoutWithoutToc>
}
