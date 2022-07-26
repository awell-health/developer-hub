// import Image from 'next/image'
// import Link from 'next/link'
import React, { ReactNode } from 'react'

// import {
//   Html,
//   NextJsBackEndDocs,
//   NextJsFrontEndDocs,
//   Node,
//   ReactDocs,
//   stack,
// } from '../../../../content/awell-orchestration/docs/use-cases/hosted-pathway'
// import { Alert } from '../../../../src/components/Alert'
// import { LinkButton } from '../../../../src/components/Button'
import { DocsHeader } from '../../../../src/components/Docs/atoms'
import { FAQ } from '../../../../src/components/FAQ'
import { DocsLayoutWithoutToc } from '../../../../src/components/Layouts'
import { SEO } from '../../../../src/components/SEO'
// import { StackSelector } from '../../../../src/components/StackSelector'
// import { useStack } from '../../../../src/hooks/useStack'

/**
 * Two possible options:
 * 1. There's no relevant patient data when starting a hosted pathway session
 * 2. There's relevant patient data when starting a hosted pathway session
 *
 * Mutation:
 * - startHostedPathwaySession (starts a pathway and creates a session)
 *    - Optional parameters
 *      - baseline info (if pathway has baseline info)
 *      - patient ID
 *        - If not passed, we create an "anonymous patient"
 *        - If passed, we start a pathway and create a session for that patient
 *    - Required parameters:
 *        - pathway_definition_id
 *        - success_url
 *        - cancel_url
 * - Response
 *    - session id
 *    - session url
 *    - pathway id
 *    - patient id
 *
 * Mutation:
 * - startedHostedActivitySession (creates a session to complete activities for a given stakeholder)
 *    - Required parameters:
 *        - pathway id
 *        - stakeholder id
 *        - success_url
 *        - cancel_url
 *   - Optional parameters (for later!):
 *        - activity id (use case: a VCP might want to make sure that a stakeholder can ONLY complete a very specific activity)
 * - Response
 *    - session url
 *    - session id
 *    - pathway id
 *    - patient id
 */

export default function HostedActivityPage() {
  //   const { frontEnd, backEnd, changeBackEnd, changeFrontEnd } = useStack()

  //   const onChangeStack = ({
  //     newFrontEnd,
  //     newBackEnd,
  //   }: {
  //     newFrontEnd?: string
  //     newBackEnd?: string
  //   }) => {
  //     if (newFrontEnd) {
  //       changeFrontEnd(newFrontEnd)
  //     }
  //     if (newBackEnd) {
  //       changeBackEnd(newBackEnd)
  //     }
  //   }

  return (
    <div>
      <SEO
        title="Hosted activity"
        description="Unlock powerful features like webhooks with a low code effort"
        url={`/awell-orchestration/docs/use-cases/hosted-activity`}
        canonicalUrl={`/awell-orchestration/docs/use-cases/hosted-activity`}
      />
      {/* <div className="flex mb-8">
        <StackSelector
          selectedStack={{
            frontEnd: frontEnd,
            backEnd: backEnd,
          }}
          onStackChange={onChangeStack}
          stacks={stack}
        />
      </div> */}
      <DocsHeader
        heading={'Use cases'}
        title={'Awell hosted activity'}
        description={
          'Unlock powerful features like webhooks with a low code effort'
        }
      />
      {/* Intro section */}
      <div className="max-w-4xl">
        <div id="content-wrapper">
          <p>
            Continue reading if your goal is to set up longitudinal outcomes
            (such as PROMs / PREMs) collection, triage & eligibility flows and
            clinicial decision support with limited engineering effort.
          </p>
          <h2>Integration</h2>
          <p>
            This integration enables you to orchestrate activities over time for
            multiple stakeholders on an Awell hosted activities page. The basic
            integration is the same as the one explained for the [Hosted
            pathway](/awell-orchestration/docs/integrations/hosted-pathway)
            integration. Additionally, this integration allows you to:
          </p>
          <ul>
            <li>Create a patient before starting a pathway</li>
            <li>
              Set up webhooks to be notified of pending activities, forms
              submitted or data points collected in active pathways
            </li>
            <li>
              Proactively request pending activities for a specific stakeholder
              at any time
            </li>
          </ul>
          <p>
            Optionally, you can set up an integration with Elastic to access
            your data.
          </p>

          {/* <h2>Hosted activity lifecycle</h2>
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
              <Image
                src="https://res.cloudinary.com/da7x4rzl4/image/upload/v1658318620/Developer%20portal/hosted-pathway-sequence-diagram.png"
                alt="Hosted pathway sequence diagram"
                className="rounded-lg"
                width="5408"
                height="3606"
              />
            </div>
            <figcaption className="dark:text-slate-400 pt-1">
              Hosted pathway lifecycle © Awell Health
            </figcaption>
          </figure>
          <h2>Low-code integration</h2>
          <p>
            The hosted pathway integration requires minimal coding.{' '}
            <Link href="/awell-orchestration/docs/getting-started/integrations-overview">
              <a title="this page">
                Compare the hosted pathway integration to other options
              </a>
            </Link>{' '}
            to determine which option meets your requirements .
          </p>
          <h2>Prerequisites</h2>
          <p>To get started, there are a couple of things you need:</p>
          <ol>
            <li>
              An <strong>API key</strong> to authorize requests to the Awell
              API. Click{' '}
              <Link href="/awell-orchestration/api-reference/overview/authorization">
                <a title="Get API key">here</a>
              </Link>{' '}
              to get your API key.
            </li>
            <li>
              A <strong>published pathway</strong> that meets the{' '}
              <Link href="/awell-orchestration/docs/getting-started/integrations-overview">
                <a title="requirements">requirements</a>
              </Link>{' '}
              to be used with the Awell hosted pathway page. Click{' '}
              <Link href="#">
                <a title="here">here</a>
              </Link>{' '}
              for a guide on creating such a pathway.
            </li>
          </ol>
          <h3>Webhooks (optional):</h3>
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
              <Link href="https://help.awellhealth.com/en/articles/6103339-configure-a-webhook">
                <a title="Configure webhooks" target="_blank">
                  here
                </a>
              </Link>{' '}
              for more information on how to configure Webhooks on pathways.
            </Alert>
          </div> */}
        </div>
      </div>
      {/* FAQ */}
      <div className="mt-12">
        <FAQ
          faqs={[
            {
              question:
                'Can we apply custom branding on the hosted activity page?',
              answer:
                "No, you can't. However, we are working on making some minimal branding options available like changing the logo and accent color. For full control over your UI we recommend setting up a custom integration.",
            },
            {
              question:
                'Can we create a custom domain for the hosted activity page?',
              answer:
                "No, custom domains are not yet supported. Let us know if you'd be interested in that!",
            },
            {
              question: 'How long before a hosted activity session expires?',
              answer:
                'By default, sessions expire after 15 minutes but the timer is reset after every completion of an activity. A session also expires when the pathway is completed.',
            },
            {
              question:
                'What happens if more than 1 activity is activated for the same stakeholder at the same time?',
              answer:
                'An activity.created event will be emitted for every activity --> if you want to notify the patient only once, then you will have to handle that',
            },
            {
              question:
                'Can a stakeholder complete multiple pending activities in the same session?',
              answer: 'Yes',
            },
            {
              question: 'How do we know there is nothing to do anymore?',
              answer:
                'After completion of an activity we check if there are new pending activities for that stakeholder. We will use an artifical delay of X seconds (check how long it takes for an orchestration cycle to run in Jeager so we can pick a sensible number).',
            },
          ]}
        />
      </div>
      <div className="mt-12">{/* <QuickNav prev={prev} next={next} /> */}</div>
    </div>
  )
}

HostedActivityPage.getLayout = function getLayout(page: ReactNode) {
  return <DocsLayoutWithoutToc>{page}</DocsLayoutWithoutToc>
}
