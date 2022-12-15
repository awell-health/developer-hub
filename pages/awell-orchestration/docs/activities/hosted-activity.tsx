import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode } from 'react'

import { Alert } from '@/components/Alert'
// import { LinkButton } from '@/components/Button'
import { DocsHeader } from '@/components/Docs/atoms'
import { FAQ } from '@/components/FAQ'
import { DocsLayoutWithoutToc } from '@/components/Layouts'
import { SEO } from '@/components/SEO'
import { StackSelector } from '@/components/StackSelector'
import {
  NodeStartSessionDocs,
  NodeWebhookListenerDocs,
  // NextJsBackEndDocs,
  stack,
} from '@/content/awell-orchestration/docs/activities/hosted-activity'
import { useStack } from '@/hooks/useStack'

export default function HostedActivityPage() {
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
        title="Hosted activity"
        description="Redirect stakeholders to an Awell Hosted Activity page to complete activities"
        url={`/awell-orchestration/docs/activities/hosted-activity`}
        canonicalUrl={`/awell-orchestration/docs/activities/hosted-activity`}
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
        title={'Awell hosted activity'}
        description={
          'Redirect stakeholders to an Awell Hosted Activity page to complete activities'
        }
        customLink={{
          url: `${process.env.NEXT_PUBLIC_AWELL_STORIES_API_URL}/stories/hosted-activity`,
          title: 'Try it out',
        }}
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
              <a
                href="https://res.cloudinary.com/da7x4rzl4/image/upload/v1658845321/Developer%20portal/sequence-diagram-hosted-activity.png"
                target="_blank"
                rel="noreferrer"
                className="custom-link"
              >
                <Image
                  src="https://res.cloudinary.com/da7x4rzl4/image/upload/v1658845321/Developer%20portal/sequence-diagram-hosted-activity.png"
                  alt="Hosted activity sequence diagram"
                  className="rounded-lg"
                  width="5512"
                  height="4694"
                />
              </a>
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
              an action based on the events (eg: notifiy the stakeholder).
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
            <Link href="/awell-orchestration/developer-tools/webhooks/introduction">
              <a title="See list of all webhooks">see list of all webhooks</a>
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
      {/* Guide section */}
      <div>
        <h2>Get started</h2>
        {/* Set up webhook listener */}
        <div>
          <div className="flex flex-row mb-8">
            <div className="leading-none text-sm bg-slate-200 text-slate-600 rounded-full font-semibold mr-4 px-2.5 py-0.5 flex items-center">
              1
            </div>
            <div className="text-lg sm:text-xl text-slate-900 tracking-tight font-bold dark:text-slate-200">
              Create Webhook listener and notify stakeholders
            </div>
          </div>
          <div id="content-wrapper">
            <p>
              We will create a Webhook listener that is able to process and
              handle incoming webhooks from Awell every time an activity is
              created.
            </p>
          </div>
          <NodeWebhookListenerDocs />
          <div className="mt-8" id="content-wrapper">
            <p>
              <strong>
                Table to help you map user activities to the right stakeholder:
              </strong>
            </p>
            <div className="flex flex-col">
              <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <table className="ignore-default-style min-w-full divide-y divide-slate-300 dark:divide-slate-500">
                    <thead>
                      <tr className="text-slate-900 dark:text-white text-base font-semibold">
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left sm:pl-6 md:pl-0"
                        >
                          Stakeholder type <br />
                          (indirect_object.type)
                        </th>
                        <th scope="col" className="py-3.5 px-3 text-left">
                          Stakeholder name <br />
                          (indirect_object.name)
                        </th>
                        <th scope="col" className="py-3.5 px-3 text-left">
                          Contact details of stakeholder
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                      <tr className="text-slate-900 dark:text-slate-100">
                        <td className="whitespace-nowrap font-semibold py-4 pl-4 pr-3 sm:pl-6 md:pl-0">
                          PATIENT
                        </td>
                        <td className="py-4 px-3 text-base">
                          Name of the actual patient as stored in the Awell
                          patient profile
                        </td>
                        <td className="py-4 px-3 text-base">
                          See <code className="code">stakeholder.email</code>{' '}
                          (if contact details are stored in Awell) or look up in
                          your internal systems.
                        </td>
                      </tr>
                      <tr className="text-slate-900 dark:text-slate-100">
                        <td className="whitespace-nowrap font-semibold py-4 pl-4 pr-3 sm:pl-6 md:pl-0">
                          STAKEHOLDER
                        </td>
                        <td className="py-4 px-3 text-base">nurse</td>
                        <td className="py-4 px-3 text-base">
                          Look up in your internal systems.
                        </td>
                      </tr>
                      <tr className="text-slate-900 dark:text-slate-100">
                        <td className="whitespace-nowrap font-semibold py-4 pl-4 pr-3 sm:pl-6 md:pl-0">
                          STAKEHOLDER
                        </td>
                        <td className="py-4 px-3 text-base">physician</td>
                        <td className="py-4 px-3 text-base">
                          Look up in your internal systems.
                        </td>
                      </tr>
                      <tr className="text-slate-900 dark:text-slate-100">
                        <td className="whitespace-nowrap font-semibold py-4 pl-4 pr-3 sm:pl-6 md:pl-0">
                          STAKEHOLDER
                        </td>
                        <td className="py-4 px-3 text-base">dietician</td>
                        <td className="py-4 px-3 text-base">
                          Look up in your internal systems.
                        </td>
                      </tr>
                      <tr className="text-slate-900 dark:text-slate-100">
                        <td className="whitespace-nowrap font-semibold py-4 pl-4 pr-3 sm:pl-6 md:pl-0">
                          STAKEHOLDER
                        </td>
                        <td className="py-4 px-3 text-base">
                          (any other stakeholder that is not the patient)
                        </td>
                        <td className="py-4 px-3 text-base">
                          Look up in your internal systems.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Start hosted activity session */}
        <div className="mt-12">
          <div className="flex flex-row mb-8">
            <div className="leading-none text-sm bg-slate-200 text-slate-600 rounded-full font-semibold mr-4 px-2.5 py-0.5 flex items-center">
              2
            </div>
            <div className="text-lg sm:text-xl text-slate-900 tracking-tight font-bold dark:text-slate-200">
              Start hosted activity session
            </div>
          </div>
          <div className="max-w-3xl mb-8" id="content-wrapper">
            <p>
              In the previous step we created a webhook listener and notified
              the relevant stakeholders of an activity that needs to be
              completed. When the stakeholder react to the notification (eg:
              presses a button), we will create a hosted activity session we can
              redirect the stakeholder to.
            </p>
            <p>
              <strong>Prerequisites</strong>
              <br />
              You will need to have stored or passed (eg: via query parameters)
              the following data in order to start a hosted activity session
              (see step 1):
            </p>
            <ol>
              <li>Stakeholder id</li>
              <li>Pathway id</li>
            </ol>
          </div>
          <NodeStartSessionDocs />
        </div>
        {/* Test */}
        <div className="mt-12">
          <div className="flex flex-row mb-8">
            <div className="leading-none text-sm bg-slate-200 text-slate-600 rounded-full font-semibold mr-4 px-2.5 py-0.5 flex items-center">
              3
            </div>
            <div className="text-lg sm:text-xl text-slate-900 tracking-tight font-bold dark:text-slate-200">
              Test your set-up
            </div>
          </div>
          <div className="max-w-3xl mb-8" id="content-wrapper">
            <p>
              <strong>
                In order to test your integration, make sure to do the following
                steps:
              </strong>
            </p>
            <ol>
              <li>
                Make sure your pathway has webhooks configured and they are sent
                to your server responsible for handling them. More on testing
                webhooks can be found
                [here](/awell-orchestration/developer-tools/webhooks/test-webhooks).
              </li>
              <li>Make sure your pathway is published.</li>
              <li>Make sure your server(s) are up and running.</li>
              <li>Enroll a patient in your pathway.</li>
              <li>
                Your server should be receiving webhooks now and you should be
                able to test your integration end-2-end.
              </li>
            </ol>
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
                'Yes! You can customize the logo, accent color, and page title.',
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
                'By default, sessions expire after 15 minutes but the timer is reset after every completion of an activity. A session also expires when there are no pending activities left for stakeholder in the pathway.',
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
