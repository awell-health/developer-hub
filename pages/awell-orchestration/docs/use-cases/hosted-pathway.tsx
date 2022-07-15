import Link from 'next/link'
import { ReactNode, useState } from 'react'

import { Alert } from '../../../../src/components/Alert'
import { LinkButton } from '../../../../src/components/Button'
import { CodeTabs } from '../../../../src/components/CodeTabs'
import { CodeBlock } from '../../../../src/components/CodeTabs/atoms'
import { DocsHeader } from '../../../../src/components/Docs/atoms'
import { FAQ } from '../../../../src/components/FAQ'
import { DocsLayoutWithoutToc } from '../../../../src/components/Layouts'
import { SEO } from '../../../../src/components/SEO'
import { CardSelector } from '../../../../src/components/UseCases/CardSelector'
import { type LanguagesType } from '../../../../src/types/useCases.types'

const availableFrontEndLanguages: LanguagesType = [
  { label: 'HTML', disabled: true },
  { label: 'React', disabled: false },
  { label: 'Next.js', disabled: true },
]

const availableBackEndLanguages: LanguagesType = [
  { label: 'Node', disabled: false },
  { label: 'Ruby', disabled: true },
  { label: 'PHP', disabled: true },
  { label: 'Phyton', disabled: true },
  { label: 'Go', disabled: true },
  { label: '.NET', disabled: true },
  { label: 'Java', disabled: true },
]

export default function HostedPathwayPage() {
  const [frontEndLanguage, setFrontEndLanguage] = useState(
    availableFrontEndLanguages[1].label
  )
  const [backEndLanguage, setBackEndLanguage] = useState(
    availableBackEndLanguages[0].label
  )
  const [frontEndHighlights, setFrontEndHighlights] = useState<Array<number[]>>(
    []
  )
  const [backEndHighlights, setBackEndHighlights] = useState<Array<number[]>>(
    []
  )

  const changeFrontEndLanguage = (newLanguage: string) => {
    setFrontEndLanguage(newLanguage)
  }

  const changeBackEndLanguage = (newLanguage: string) => {
    setBackEndLanguage(newLanguage)
  }

  return (
    <div>
      <SEO
        title="Hosted pathway"
        description="Get up and running with Awell Orchestration in less than a day"
        url={`/awell-orchestration/docs/use-cases/hosted-pathway`}
        canonicalUrl={`/awell-orchestration/docs/use-cases/hosted-pathway`}
      />
      <div className="flex mb-8">
        <div className="flex items-center">
          <span className="text-base font-semibold text-slate-800 dark:text-slate-200 mr-2">
            Front-end:{' '}
          </span>
          <CardSelector
            selected={frontEndLanguage}
            options={availableFrontEndLanguages}
            onCardSelect={changeFrontEndLanguage}
          />
        </div>
        <div className="flex items-center ml-12">
          <span className="text-base font-semibold text-slate-800 dark:text-slate-200 mr-2">
            Back-end:{' '}
          </span>
          <CardSelector
            selected={backEndLanguage}
            options={availableBackEndLanguages}
            onCardSelect={changeBackEndLanguage}
          />
        </div>
      </div>
      <DocsHeader
        heading={'Use cases'}
        title={'Awell hosted pathway'}
        description={
          'Get up and running with Awell Orchestration in less than a day'
        }
      />
      {/* Intro section */}
      <div className="max-w-4xl">
        <div id="content-wrapper">
          <p>
            <strong>
              The quickest way to get up and running with Awell is the
              &quot;Awell-hosted pathway page&quot;.
            </strong>{' '}
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
              <code>pathway.session.completed</code>) is triggered to let you
              know the pathway is completed.
            </li>
          </ol>
          <figure className="w-full flex flex-col justify-center text-center pt-4">
            <img
              src="https://res.cloudinary.com/da7x4rzl4/image/upload/v1651756063/Developer%20portal/Sequence_Diagram_Template_Community.png"
              alt="Pathway versioning"
              className="rounded-lg w-full sm:w-9/12 mx-auto"
            />
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
        </div>
      </div>
      {/* Guide section */}
      <div>
        <h2>Get started</h2>
        {/* Set up front-end */}
        <div>
          <div className="flex flex-row mb-8">
            <div className="leading-none text-sm bg-slate-200 text-slate-600 rounded-full font-semibold mr-4 px-2.5 py-0.5 flex items-center">
              1
            </div>
            <div className="text-lg sm:text-xl text-slate-900 tracking-tight font-bold dark:text-slate-200">
              Set up the front-end
            </div>
          </div>
          <div className="flex gap-8">
            <div className="w-5/12 flex flex-col gap-4">
              <div
                onMouseEnter={() => setFrontEndHighlights([[3, 9], [35]])}
                onMouseLeave={() => setFrontEndHighlights([])}
                className="group relative bg-slate-50 border border-slate-200 rounded-xl p-6 text-left dark:bg-slate-800 dark:border-slate-600"
              >
                <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
                <div className="relative">
                  <p className="text-slate-700 dark:text-slate-200 mb-2">
                    <strong>Add a start pathway button</strong>
                  </p>
                  <p>
                    Add a button to your page. When a client clicks this button,
                    they are redirected to the Awell-hosted pathway page.
                  </p>
                </div>
              </div>
              <div
                onMouseEnter={() => setFrontEndHighlights([[11, 13], [33]])}
                onMouseLeave={() => setFrontEndHighlights([])}
                className="group relative bg-slate-50 border border-slate-200 rounded-xl p-6 text-left dark:bg-slate-800 dark:border-slate-600"
              >
                <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
                <div className="relative">
                  <p className="text-slate-700 dark:text-slate-200 mb-2">
                    <strong>
                      Show a message when client is redirected back
                    </strong>
                  </p>
                  <p>
                    We want to show something to the client when they get
                    redirected back to the application. In this case, we show a
                    simple message.
                  </p>
                </div>
              </div>
              <div
                onMouseEnter={() => setFrontEndHighlights([[18, 30]])}
                onMouseLeave={() => setFrontEndHighlights([])}
                className="group relative bg-slate-50 border border-slate-200 rounded-xl p-6 text-left dark:bg-slate-800 dark:border-slate-600"
              >
                <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
                <div className="relative">
                  <p className="text-slate-700 dark:text-slate-200 mb-2">
                    <strong>
                      Check if there is a redirect back from Hosted Pathway
                    </strong>
                  </p>
                  <p>
                    We want to show something to the client when they get
                    redirected back to the application. In this case, we show a
                    simple message.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-7/12">
              <CodeTabs>
                <CodeBlock
                  language="jsx"
                  fileName="App.js"
                  numberOfLinesPreview={999}
                  highlightedRows={frontEndHighlights}
                >
                  {`
import React, { useState, useEffect } from "react";

const StartPathwaySessionButton = () => (
  <form action="/start-pathway-session" method="POST">
    <button type="submit">
      Start pathway session
    </button>
  </form>
);

const Message = ({ message }) => (
  <p>{message}</p>
);

export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Pathway completed.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Pathway canceled."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <StartPathwaySessionButton />
  );
}
                    `}
                </CodeBlock>
              </CodeTabs>
            </div>
          </div>
        </div>
        {/* Set up server */}
        <div className="mt-12">
          <div className="flex flex-row mb-8">
            <div className="leading-none text-sm bg-slate-200 text-slate-600 rounded-full font-semibold mr-4 px-2.5 py-0.5 flex items-center">
              2
            </div>
            <div className="text-lg sm:text-xl text-slate-900 tracking-tight font-bold dark:text-slate-200">
              Set up the server
            </div>
          </div>
          <div className="flex gap-8">
            <div className="w-5/12 flex flex-col gap-4">
              <div
                onMouseEnter={() => setBackEndHighlights([[2]])}
                onMouseLeave={() => setBackEndHighlights([])}
                className="group relative bg-slate-50 border border-slate-200 rounded-xl p-6 text-left dark:bg-slate-800 dark:border-slate-600"
              >
                <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
                <div className="relative">
                  <p className="text-slate-700 dark:text-slate-200 mb-2">
                    <strong>Install node-fetch library</strong>
                  </p>
                  <p>
                    Your server will need to call the Awell (GraphQL) API. In
                    this example we use node-fetch, but feel free to use any
                    library of your liking.
                  </p>
                  <div className="mt-4">
                    <CodeTabs>
                      <CodeBlock language="shell" fileName="terminal">
                        {`npm install node-fetch`}
                      </CodeBlock>
                    </CodeTabs>
                  </div>
                </div>
              </div>
              <div
                onMouseEnter={() => setBackEndHighlights([[7, 10]])}
                onMouseLeave={() => setBackEndHighlights([])}
                className="group relative bg-slate-50 border border-slate-200 rounded-xl p-6 text-left dark:bg-slate-800 dark:border-slate-600"
              >
                <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
                <div className="relative">
                  <p className="text-slate-700 dark:text-slate-200 mb-2">
                    <strong>Configure variables</strong>
                  </p>
                  <p>
                    You will need an API key to authorize requests to the Awell
                    API and a pathway definition id to indicate what pathway you
                    would like to start.
                  </p>
                  <p className="mt-4">
                    <strong>Resources:</strong>
                  </p>
                  <ul className="list-disc ml-4">
                    <li>
                      <Link href="/awell-orchestration/api-reference/overview/authorization">
                        <a
                          title="Get your API key"
                          className="text-sky-500 underline"
                        >
                          Get your API key
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://developers.awellhealth.com/awell-orchestration/api-reference/queries/get-published-pathways">
                        <a
                          title="Get pathway definition ids"
                          className="text-sky-500 underline"
                        >
                          Get pathway definition ids
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                onMouseEnter={() => setBackEndHighlights([[30, 46]])}
                onMouseLeave={() => setBackEndHighlights([])}
                className="group relative bg-slate-50 border border-slate-200 rounded-xl p-6 text-left dark:bg-slate-800 dark:border-slate-600"
              >
                <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
                <div className="relative">
                  <p className="text-slate-700 dark:text-slate-200 mb-2">
                    <strong>Create a pathway session</strong>
                  </p>
                  <p>
                    Add an endpoint on your server that creates a Pathway
                    Session. A session is created by calling the Awell API
                    (graphql).
                  </p>
                </div>
              </div>
              <div
                onMouseEnter={() => setBackEndHighlights([[39, 43]])}
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
                    Specify what pathway needs to be started as well as the
                    start and cancel URLs. Make sure these URLs are publicly
                    accessible so Awell can redirect clients to them.
                  </p>
                </div>
              </div>
              <div
                onMouseEnter={() => setBackEndHighlights([[48]])}
                onMouseLeave={() => setBackEndHighlights([])}
                className="group relative bg-slate-50 border border-slate-200 rounded-xl p-6 text-left dark:bg-slate-800 dark:border-slate-600"
              >
                <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
                <div className="relative">
                  <p className="text-slate-700 dark:text-slate-200 mb-2">
                    <strong>Redirect to Hosted Pathway page</strong>
                  </p>
                  <p>
                    After creating the session, redirect your client to the URL
                    for the hosted pathway page returned in the response.
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
                  highlightedRows={backEndHighlights}
                >
                  {`
const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(express.static('public'));

const AWELL_API_ENDPOINT = 'https://api.sandbox.awellhealth.com/orchestration/m2m/graphql'
const AWELL_API_KEY = 'YOUR_API_KEY'
const YOUR_DOMAIN = 'https://your-domain.com'
const PATHWAY_DEFINITION_ID = "ABC"

app.post('/start-pathway-session', async (req, res) => {
  const query = JSON.stringify({${'`'}
      mutation StartAndCreatePathwaySession(
        $pathway_definition_id: String!,
        $success_url: String!,
        $cancel_url: String!
      ) {
        startAndCreatePathwaySession(
          $pathway_definition_id: String!,
          $success_url: String!,
          $cancel_url: String!,
        ) {
          session_url
        }
      }
    }${'`'},
  });

  const session = fetch(AWELL_API_ENDPOINT, {
    method: 'POST',
    headers: {
      apiKey: AWELL_API_KEY,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: {
      query,
      variables: {
        $pathway_definition_id: PATHWAY_DEFINITION_ID,
        $success_url: ${'`${YOUR_DOMAIN}'}?success=true${'`'},
        $cancel_url: ${'`${YOUR_DOMAIN}'}?canceled=true${'`'}
      }
    },
    cache: 'default'
  })

  res.redirect(303, session.session_url);
});

app.listen(4242, () => console.log('Running on port 4242'));
                    `}
                </CodeBlock>
              </CodeTabs>
            </div>
          </div>
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
                  <p>
                    Start your applications (front-end and server) and navigate
                    to{' '}
                    <Link href="http://localhost:3000">
                      <a className="underline text-sky-500">
                        http://localhost:3000
                      </a>
                    </Link>
                    . Press the &quot;Start pathway session&quot; to go to the
                    Awell hosted pathway page and complete the pathway
                  </p>
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
                      color="sky"
                      href="/awell-orchestration/examples/hosted-pathway"
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
                "No, you can't. However, we are working on making some minimal branding options available like changing the logo and accent color. For full control over your UI we recommend setting up a custom integration.",
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
                'By default, sessions expire after 15 minutes but the timer is reset after every completion of an activity. A session also expires when the pathway is completed.',
            },
            {
              question:
                'What happens if the session expires and the user is still completing the pathway?',
              answer:
                "When the user is currently on the hosted pathway page and the session expires, he or she will still be able to complete activities in a pathway. It's only when a user tries to browse to an expired hosted pathway session url that they won't have access anymore.",
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
