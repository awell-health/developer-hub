import Link from 'next/link'
import { useState } from 'react'

import { CodeTabs } from '@/components/CodeTabs'
import { CodeBlock } from '@/components/CodeTabs/atoms'

export const Node = () => {
  const [highlights, setHighlights] = useState<Array<number[]>>([])

  return (
    <div>
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
                Pathways in Awell consist of different types of activities. We
                are only interested in activities that need an action by a
                human.
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

const AWELL_API_URL = process.env.AWELL_API_URL || ''
const AWELL_API_KEY = process.env.AWELL_API_KEY || ''

// If you are using Express v4 - v4.16 you need to use body-parser, not express, to retrieve the request body
app.post('/start-hosted-activity-session', express.json({type: 'application/json'}), (request, response) => {
  // Assumption: these parameters are passed as query parameters
  // Replace this code if you have implemented a different way
  // to keep track of stakeholder and pathway id.
  const STAKEHOLDER_ID = req.query.stakeholder_id
  const PATHWAY_ID = req.query.pathway_id

  const body = JSON.stringify({
    query: ${'`'}
    mutation StartHostedActivitySession($input: StartHostedActivitySessionInput!) {
      startHostedActivitySession(input: $input) {
        session_id
        session_url
      }
    }${'`'},
    variables: {
      input: {
        pathway_id: PATHWAY_ID,
        stakeholder_id: STAKEHOLDER_ID,
        success_url: 'https://your-domain.com/?success=true',
        cancel_url: 'https://your-domain.com/?canceled=true',
      },
    },
  })

  const session = await fetch(AWELL_API_URL, {
    method: 'POST',
    headers: {
      apiKey: AWELL_API_KEY,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body,
  })
    .then((response) => response.json())
    .then((response) => response.data.startHostedActivitySession)


  res.redirect(303, session.session_url)
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
