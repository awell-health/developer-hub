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
            onMouseEnter={() => setHighlights([[4, 5]])}
            onMouseLeave={() => setHighlights([])}
            className="group relative bg-slate-50 border border-slate-200 rounded-xl p-6 text-left dark:bg-slate-800 dark:border-slate-600"
          >
            <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
            <div className="relative">
              <p className="text-slate-700 dark:text-slate-200 mb-2">
                <strong>Configure variables</strong>
              </p>
              <p>Give the variables and appropriate values.</p>
              <p className="mt-4">
                <strong>Resources:</strong>
              </p>
              <ul className="list-disc ml-4">
                <li>
                  <Link
                    href="/awell-orchestration/api-reference/overview/endpoints"
                    title="Endpoints"
                    target="_blank"
                    className="text-sky-500 underline"
                  >
                    Endpoints
                  </Link>
                </li>
                <li>
                  <Link
                    href="/awell-orchestration/api-reference/overview/authorization"
                    title="Get your API keys"
                    target="_blank"
                    className="text-sky-500 underline"
                  >
                    Get your API keys
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            onMouseEnter={() =>
              setHighlights([
                [12, 13],
                [25, 26],
              ])
            }
            onMouseLeave={() => setHighlights([])}
            className="group relative bg-slate-50 border border-slate-200 rounded-xl p-6 text-left dark:bg-slate-800 dark:border-slate-600"
          >
            <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
            <div className="relative">
              <p className="text-slate-700 dark:text-slate-200 mb-2">
                <strong>Get stakeholder and pathway id</strong>
              </p>
              <p>
                Make sure you have the id of the stakeholder the activity is for
                and the pathway id. These parameters were returned in the body
                of the webhook. In the example we passed them via query
                parameters.
              </p>
            </div>
          </div>
          <div
            onMouseEnter={() => setHighlights([[27, 28]])}
            onMouseLeave={() => setHighlights([])}
            className="group relative bg-slate-50 border border-slate-200 rounded-xl p-6 text-left dark:bg-slate-800 dark:border-slate-600"
          >
            <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
            <div className="relative">
              <p className="text-slate-700 dark:text-slate-200 mb-2">
                <strong>Define success and cancel URL</strong>
              </p>
              <p>
                Specifiy where the stakeholder needs to be redirected to when
                the session is completed or interrupted.
              </p>
            </div>
          </div>
          <div
            onMouseEnter={() => setHighlights([[33, 43]])}
            onMouseLeave={() => setHighlights([])}
            className="group relative bg-slate-50 border border-slate-200 rounded-xl p-6 text-left dark:bg-slate-800 dark:border-slate-600"
          >
            <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
            <div className="relative">
              <p className="text-slate-700 dark:text-slate-200 mb-2">
                <strong>Start a session</strong>
              </p>
              <p>Create a session via the Awell API.</p>
              <p className="mt-4">
                <strong>Resources:</strong>
              </p>
              <ul className="list-disc ml-4">
                <li>
                  <Link
                    href="/awell-orchestration/api-reference/mutations/start-hosted-activity-session"
                    title="Get your API key"
                    target="_blank"
                    className="text-sky-500 underline"
                  >
                    startedHostedActivitySession mutation
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            onMouseEnter={() => setHighlights([[45]])}
            onMouseLeave={() => setHighlights([])}
            className="group relative bg-slate-50 border border-slate-200 rounded-xl p-6 text-left dark:bg-slate-800 dark:border-slate-600"
          >
            <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
            <div className="relative">
              <p className="text-slate-700 dark:text-slate-200 mb-2">
                <strong>Redirect to Hosted Pathway page</strong>
              </p>
              <p>
                After creating the session, redirect your client to the URL for
                the hosted pathway page returned in the response.
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
