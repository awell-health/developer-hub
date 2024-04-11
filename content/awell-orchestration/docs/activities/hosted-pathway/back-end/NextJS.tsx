import Link from 'next/link'
import { useState } from 'react'

import { CodeTabs } from '@/components/CodeTabs'
import { CodeBlock } from '@/components/CodeTabs/atoms'

export const NextJS = () => {
  const [backEndHighlights, setBackEndHighlights] = useState<Array<number[]>>(
    []
  )

  return (
    <div>
      <div className="flex flex-row mb-8">
        <div className="leading-none text-sm bg-slate-200 text-slate-600 rounded-full font-semibold mr-4 px-2.5 py-0.5 flex items-center">
          2
        </div>
        <div className="text-lg sm:text-xl text-slate-900 tracking-tight font-bold dark:text-slate-200">
          Set up the server
        </div>
      </div>
      <div className="flex gap-8">
        <div className="w-6/12 flex flex-col gap-4">
          <div
            onMouseEnter={() => setBackEndHighlights([[1, 3]])}
            onMouseLeave={() => setBackEndHighlights([])}
            className="group relative bg-slate-50 border border-slate-200 rounded-xl p-6 text-left dark:bg-slate-800 dark:border-slate-600"
          >
            <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
            <div className="relative">
              <p className="text-slate-700 dark:text-slate-200 mb-2">
                <strong>Configure variables</strong>
              </p>
              <p>
                You will need an API key to authorize requests to the Awell API
                and a pathway definition id to indicate what pathway you would
                like to start (see &quot;Prerequisites&quot;).
              </p>
              <p className="mt-4">
                <strong>Resources:</strong>
              </p>
              <ul className="list-disc ml-4">
                <li>
                  <Link
                    href="/awell-orchestration/api-reference/overview/endpoints"
                    title="API endpoints"
                    className="text-sky-500 underline"
                  >
                    API endpoints
                  </Link>
                </li>
                <li>
                  <Link
                    href="/awell-orchestration/api-reference/overview/authorization"
                    title="Get your API key"
                    className="text-sky-500 underline"
                  >
                    Get your API key
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://developers.awellhealth.com/awell-orchestration/api-reference/queries/get-published-pathways"
                    title="Get pathway definition ids"
                    className="text-sky-500 underline"
                  >
                    Get pathway definition ids
                  </Link>{' '}
                  (if not using the template pathway)
                </li>
              </ul>
            </div>
          </div>
          <div
            onMouseEnter={() => setBackEndHighlights([[28, 39]])}
            onMouseLeave={() => setBackEndHighlights([])}
            className="group relative bg-slate-50 border border-slate-200 rounded-xl p-6 text-left dark:bg-slate-800 dark:border-slate-600"
          >
            <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
            <div className="relative">
              <p className="text-slate-700 dark:text-slate-200 mb-2">
                <strong>Create a pathway session</strong>
              </p>
              <p>
                Add an endpoint on your server that creates a Pathway Session. A
                session is created by calling the Awell API (graphql).
              </p>
              <p className="mt-4">
                <strong>Resources:</strong>
              </p>
              <ul className="list-disc ml-4">
                <li>
                  <Link
                    href="/awell-orchestration/api-reference/mutations/start-hosted-pathway-session"
                    title="API reference for startHostedPathwaySession mutation"
                    target="_blank"
                    className="text-sky-500 underline"
                  >
                    API reference for startHostedPathwaySession mutation
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            onMouseEnter={() => setBackEndHighlights([[20, 24]])}
            onMouseLeave={() => setBackEndHighlights([])}
            className="group relative bg-slate-50 border border-slate-200 rounded-xl p-6 text-left dark:bg-slate-800 dark:border-slate-600"
          >
            <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
            <div className="relative">
              <p className="text-slate-700 dark:text-slate-200 mb-2">
                <strong>
                  Define a patient resource to start the pathway for{' '}
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Optional
                  </span>
                </strong>
              </p>
              <p>
                Every pathway is linked to a patient resource in our system. We
                automatically create an anonymous patient resource if{' '}
                <div className="inline" id="content-wrapper">
                  <code>patient_id</code>
                </div>{' '}
                is not set as an input variable. You can also create a patient
                first and pass the id of that patient via the input variables.
              </p>
              <p className="mt-4">
                If you want to create a patient first, you will have to do an a
                priori API call to create the patient.
              </p>
              <p className="mt-4">
                <strong>Resources:</strong>
              </p>
              <ul className="list-disc ml-4">
                <li>
                  <Link
                    href="/awell-orchestration/api-reference/mutations/create-patient"
                    title="createPatient mutation documentation"
                    target="_blank"
                    className="text-sky-500 underline"
                  >
                    createPatient mutation documentation
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            onMouseEnter={() => setBackEndHighlights([[20, 24]])}
            onMouseLeave={() => setBackEndHighlights([])}
            className="group relative bg-slate-50 border border-slate-200 rounded-xl p-6 text-left dark:bg-slate-800 dark:border-slate-600"
          >
            <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
            <div className="relative">
              <p className="text-slate-700 dark:text-slate-200 mb-2">
                <strong>
                  Pass baseline info or baseline data points{' '}
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Optional
                  </span>
                </strong>
              </p>
              <p className="mb-4">
                Care flows/pathways can be configured to accept sending baseline
                data point values (i.e. baseline information) when starting the
                pathway.
              </p>
              <p>
                Add a{' '}
                <div className="inline" id="content-wrapper">
                  <code>data_points</code>
                </div>{' '}
                variable if you want to pass baseline data point values to your
                care flow.
              </p>
              <p className="mt-4">
                <strong>Resources:</strong>
              </p>
              <ul className="list-disc ml-4">
                <li>
                  <Link
                    href="https://help.awellhealth.com/en/articles/6423139-create-baseline-data-points"
                    title="Configure baseline data points in your pathway"
                    target="_blank"
                    className="text-sky-500 underline"
                  >
                    Configure baseline data points in your pathway
                  </Link>
                </li>
                <li>
                  <Link
                    href="/awell-orchestration/api-reference/mutations/start-hosted-pathway-session#optional-variables"
                    title="How to pass baseline information"
                    target="_blank"
                    className="text-sky-500 underline"
                  >
                    How to pass baseline information
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            onMouseEnter={() => setBackEndHighlights([[20, 24]])}
            onMouseLeave={() => setBackEndHighlights([])}
            className="group relative bg-slate-50 border border-slate-200 rounded-xl p-6 text-left dark:bg-slate-800 dark:border-slate-600"
          >
            <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
            <div className="relative">
              <p className="text-slate-700 dark:text-slate-200 mb-2">
                <strong>
                  Define pathway to start, success and cancel URLs
                </strong>
              </p>
              <p>
                Specify what pathway needs to be started as well as the start
                and cancel URLs. Make sure these URLs are publicly accessible so
                Awell can redirect clients to them.
              </p>
            </div>
          </div>
          <div
            onMouseEnter={() => setBackEndHighlights([[41]])}
            onMouseLeave={() => setBackEndHighlights([])}
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
        <div className="w-6/12">
          <CodeTabs>
            <CodeBlock
              language="js"
              fileName="pages/api/start-pathway-session.js"
              numberOfLinesPreview={999}
              highlightedRows={backEndHighlights}
            >
              {`
const AWELL_API_ENDPOINT = process.env.AWELL_API_URL
const AWELL_API_KEY = process.env.AWELL_API_KEY;
const PATHWAY_DEFINITION_ID = "J0oNK2V91RL2";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const body = JSON.stringify({
        query: ${'`'}
        mutation StartHostedPathwaySession(
          $input: StartHostedPathwaySessionInput!,
        ) {
          startHostedPathwaySession(input: $input) {
            session_id
            session_url
            pathway_id
          }
        }${'`'},
        variables: {
          input: {
            pathway_definition_id: PATHWAY_DEFINITION_ID,
            success_url: ${'`${req.headers.origin}'}/?success=true${'`'},
            cancel_url: ${'`${req.headers.origin}'}/?canceled=true${'`'},
          }
        },
      })

      const session = await fetch(AWELL_API_ENDPOINT, {
        method: 'POST',
        headers: {
          apiKey: AWELL_API_KEY,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body,
        cache: 'default',
      })
        .then(response => response.json())
        .then(response => response.data.startHostedPathwaySession)

      res.redirect(303, session.session_url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
                    `}
            </CodeBlock>
            <CodeBlock
              language="env"
              fileName=".env"
              numberOfLinesPreview={999}
              highlightedRows={backEndHighlights}
            >
              {`
AWELL_API_ENDPOINT=AWELL_API_ENDPOINT
AWELL_API_KEY=YOUR_API_KEY
                    `}
            </CodeBlock>
          </CodeTabs>
        </div>
      </div>
    </div>
  )
}
