import Link from 'next/link'
import { useState } from 'react'

import { Alert } from '@/components/Alert'
import { CodeTabs } from '@/components/CodeTabs'
import { CodeBlock } from '@/components/CodeTabs/atoms'

export const Node = () => {
  const [highlights, setHighlights] = useState<Array<number[]>>([])

  return (
    <div>
      <div className="mb-8">
        <Alert title="Interactive webhook builder" type="info">
          Use our{' '}
          <Link href="/awell-orchestration/developer-tools/webhook-builder">
            <a
              title="interactive webhook builder"
              target="_blank"
              className="underline"
            >
              interactive webhook builder
            </a>
          </Link>{' '}
          to quickly generate code to process & handle webhooks coming from
          Awell
        </Alert>
      </div>
      <div className="flex gap-8">
        <div className="w-5/12 flex flex-col gap-4">
          <div
            onMouseEnter={() => setHighlights([[9, 44]])}
            onMouseLeave={() => setHighlights([])}
            className="group relative bg-slate-50 border border-slate-200 rounded-xl p-6 text-left dark:bg-slate-800 dark:border-slate-600"
          >
            <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
            <div className="relative">
              <p className="text-slate-700 dark:text-slate-200 mb-2">
                <strong>Handle the event</strong>
              </p>
              <p>
                Handle the{' '}
                <span id="content-wrapper">
                  <code>activity.created</code>
                </span>{' '}
                event on your server.
              </p>
            </div>
          </div>
          <div
            onMouseEnter={() => setHighlights([[13, 39]])}
            onMouseLeave={() => setHighlights([])}
            className="group relative bg-slate-50 border border-slate-200 rounded-xl p-6 text-left dark:bg-slate-800 dark:border-slate-600"
          >
            <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
            <div className="relative">
              <p className="text-slate-700 dark:text-slate-200 mb-2">
                <strong>Only handle user activities</strong>
              </p>
              <p>
                Care flows/pathways in Awell consist of different types of
                activities. We are only interested in activities that need an
                action by a human.
              </p>
            </div>
          </div>
          <div
            onMouseEnter={() => setHighlights([[14], [16]])}
            onMouseLeave={() => setHighlights([])}
            className="group relative bg-slate-50 border border-slate-200 rounded-xl p-6 text-left dark:bg-slate-800 dark:border-slate-600"
          >
            <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
            <div className="relative">
              <p className="text-slate-700 dark:text-slate-200 mb-2">
                <strong>Store pathway id and stakeholder id</strong>
              </p>
              <p>
                In order to create a Hosted activity session, you will need to
                pass the pathway id and stakeholder id. So make sure you store
                or pass these 2 properties.
              </p>
              <p className="mt-4">
                <strong>Resources:</strong>
              </p>
              <ul className="list-disc ml-4">
                <li>
                  <Link href="/awell-orchestration/api-reference/mutations/start-hosted-activity-session">
                    <a
                      title="Get your API key"
                      target="_blank"
                      className="text-sky-500 underline"
                    >
                      startedHostedActivitySession mutation
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            onMouseEnter={() => setHighlights([[18, 38]])}
            onMouseLeave={() => setHighlights([])}
            className="group relative bg-slate-50 border border-slate-200 rounded-xl p-6 text-left dark:bg-slate-800 dark:border-slate-600"
          >
            <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
            <div className="relative">
              <p className="text-slate-700 dark:text-slate-200 mb-2">
                <strong>Notify the stakeholders</strong>
              </p>
              <p>
                Depending for what stakeholder there is an activity to complete,
                define and call the methods to notify these stakeholders via
                your appropriate channels.
              </p>
            </div>
          </div>
        </div>
        <div className="w-7/12">
          <CodeTabs>
            <CodeBlock
              language="js"
              fileName="server.js"
              numberOfLinesPreview={999}
              highlightedRows={highlights}
            >
              {`

const express = require('express');
const app = express();

// If you are using Express v4 - v4.16 you need to use body-parser, not express, to retrieve the request body
app.post('/awell-webhooks', express.json({type: 'application/json'}), (request, response) => {
  const event = request.body;

  // Handle the event
  switch (event.event_type) {
    case 'activity.created': {
      const { isUserActivity } = event.activity
      
      if (isUserActivity) {
        const pathway_id = event.pathway.id
        const { stakeholder } = event.activity.indirect_object
        const stakeholderId = stakeholder.id

        if (stakeholder.type === 'PATIENT') {
          // Email is only available if this property is set in the patient's Awell profile
          // Contact details can also be fetched from your internal systems.
          const patientEmail = stakeholder.email

          // Then define and call a method to notify the patient
        }
        if (stakeholder.type === 'STAKEHOLDER') {
          switch (stakeholder.name) {
            case 'Nurse': {
              // Then define and call a method to notify the nurse of the patient
              break
            }
            case 'Physician': {
              // Then define and call a method to notify the physician of the patient
              break
            }
            default:
              console.log(${'`'}Unhandled stakeholder: ${'${stakeholder.name}'}${'`'})
          }
        }
      }
      break;
    }
    default:
      console.log(${'`'}Unhandled event type ${'${event.event_type}'}${'`'});
  }

  // Return a response to acknowledge receipt of the event
  response.json({received: true});
});

app.listen(8000, () => console.log('Running on port 8000'));
          
                    `}
            </CodeBlock>
          </CodeTabs>
        </div>
      </div>
    </div>
  )
}
