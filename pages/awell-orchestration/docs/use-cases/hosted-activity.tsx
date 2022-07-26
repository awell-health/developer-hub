import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode } from 'react'

// import {
//   Html,
//   NextJsBackEndDocs,
//   NextJsFrontEndDocs,
//   Node,
//   ReactDocs,
//   stack,
// } from '../../../../content/awell-orchestration/docs/use-cases/hosted-pathway'
import { Alert } from '../../../../src/components/Alert'
// import { LinkButton } from '../../../../src/components/Button'
import { DocsHeader } from '../../../../src/components/Docs/atoms'
import { FAQ } from '../../../../src/components/FAQ'
import { DocsLayoutWithoutToc } from '../../../../src/components/Layouts'
import { SEO } from '../../../../src/components/SEO'
// import { StackSelector } from '../../../../src/components/StackSelector'
// import { useStack } from '../../../../src/hooks/useStack'

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
        description="Redirect stakeholders to an Awell Hosted Activity page to complete activities"
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
          'Redirect stakeholders to an Awell Hosted Activity page to complete activities'
        }
      />
      {/* Intro section */}
      <div className="max-w-4xl">
        <div id="content-wrapper">
          <p>
            <strong>
              This integration enables you to orchestrate activities over time
              for multiple stakeholders on an Awell Hosted Activity page.
            </strong>
          </p>
          <p>
            This use case is perfect to set up longitudinal outcomes (such as
            PROMs / PREMs) collection, triage & eligibility flows and clinicial
            decision support with limited engineering effort.
          </p>

          <h2>Hosted activity lifecycle</h2>
          <p>The lifecycle for a hosted activity experience looks like this:</p>
          <ol className="no-pl">
            <li>
              At some point in time, a patient is created and included in a care
              pathway.
            </li>
            <li>
              When an activity is created (activated) in the pathway, your
              system will get notified via the <code>activity.created</code>{' '}
              webhook.
            </li>
            <li>
              At that point in time, you know something in the pathway needs to
              be completed by a given stakeholder. You can notifiy that
              stakeholder via the appropriate channels.
            </li>
            <li>
              The stakeholder reacts to the notification and wants to complete
              the activity. This is the trigger to create a Hosted Activity
              Session via the Awell API.
            </li>
            <li>
              Our API creates a Hosted Activity Session scoped for that
              stakeholder where you can redirect the stakeholder to in order to
              complete the pending activity.{' '}
              <strong>
                Note that a Hosted Activity Session is always scoped per
                stakeholder.
              </strong>
            </li>
            <li>
              The stakeholder can complete the activity and we will let you know
              when the activity is completed via the{' '}
              <code>activity.completed</code> webhook.
            </li>
          </ol>
          <p>
            This lifecycle is repeated for every activity that is created in a
            care pathway.
          </p>
          <figure className="w-full flex flex-col justify-center text-center pt-4">
            <div className="w-full sm:w-11/12 mx-auto text-center">
              <Image
                src="https://res.cloudinary.com/da7x4rzl4/image/upload/v1658845321/Developer%20portal/sequence-diagram-hosted-activity.png"
                alt="Hosted activity sequence diagram"
                className="rounded-lg"
                width="5512"
                height="4694"
              />
            </div>
            <figcaption className="dark:text-slate-400 pt-1">
              Hosted activity lifecycle © Awell Health
            </figcaption>
          </figure>
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
              <Link href="/awell-orchestration/api-reference/mutations/create-patient">
                <a title="Create a patient">A patient resource created</a>
              </Link>{' '}
              and{' '}
              <Link href="/awell-orchestration/api-reference/mutations/start-pathway">
                <a title="Start a pathway">included in a care pathway</a>
              </Link>
              . It is not explicitly part of this guide but you can find
              documentation on creating a patient and starting a pathway on the
              respective links.
            </li>
            <li>Webhooks set up for your care pathway (see below).</li>
            <li>
              You have a server that can listen to incoming wehooks and perform
              an action based the events (eg: notifiy the stakeholder).
            </li>
          </ol>
          <h3>Webhooks</h3>
          <p>
            <strong>
              Your pathway should minimally be subscribed to the{' '}
              <code>activity.created</code> webhook as that is the trigger to
              initiate a Hosted Activity session.
            </strong>{' '}
            Depending on the type of integration and events you want to receive,
            you can configure other wehooks as well ({' '}
            <Link href="/awell-orchestration/docs/integrations/webhooks">
              <a title="See list of all webhooks">See list of all webhooks</a>
            </Link>
            ).
          </p>
          <p>
            Webhooks are configured on a per pathway basis via the pathway
            settings so if you want to receive webhooks for events, you will
            have to configure them via the pathway settings.
          </p>
          <div className="mb-12">
            <Alert title="Configure webhooks" type="info">
              Click{' '}
              <Link href="https://help.awellhealth.com/en/articles/6103339-configure-a-webhook">
                <a title="Configure webhooks" target="_blank">
                  here
                </a>
              </Link>{' '}
              for more information on how to configure Webhooks on pathways. The
              payload of the{' '}
              <Link href="/awell-orchestration/api-reference/webhooks/activity-created">
                <a title="pathway.started webhook" target="_blank">
                  activity.created
                </a>
              </Link>{' '}
              webhook can be found on the respective link.
            </Alert>
          </div>
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
                'What happens if more than one activity is activated for the same stakeholder at the same time?',
              answer:
                'An activity.created wehook will be emitted for every activity. If you want to group notifications to stakeholders that is something you currently will have to handle on your end.',
            },
            {
              question:
                'Can a stakeholder complete multiple pending activities in the same session?',
              answer:
                'Yes. If there are multiple pending activities for a stakeholder we will show these activities one after the other.',
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
