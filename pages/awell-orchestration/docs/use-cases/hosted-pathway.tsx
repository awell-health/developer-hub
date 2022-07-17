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
import { StackSelector } from '../../../../src/components/UseCases/StackSelector'
import { useStack } from '../../../../src/hooks/useStack'
import { type StackType } from '../../../../src/types/useCases.types'

const stacks: StackType[] = [
  {
    frontEnd: { label: 'HTML', disabled: false },
    backEnd: [
      { label: 'Node', disabled: false },
      { label: 'Ruby', disabled: true },
      { label: 'PHP', disabled: true },
      { label: 'Phyton', disabled: true },
      { label: 'Go', disabled: true },
      { label: '.NET', disabled: true },
      { label: 'Java', disabled: true },
    ],
  },
  {
    frontEnd: { label: 'React', disabled: false },
    backEnd: [
      { label: 'Node', disabled: false },
      { label: 'Ruby', disabled: true },
      { label: 'PHP', disabled: true },
      { label: 'Phyton', disabled: true },
      { label: 'Go', disabled: true },
      { label: '.NET', disabled: true },
      { label: 'Java', disabled: true },
    ],
  },
  {
    frontEnd: { label: 'Next.js', disabled: false },
    backEnd: [],
  },
]

export default function HostedPathwayPage() {
  const { frontEnd, backEnd, changeBackEnd, changeFrontEnd } = useStack()
  const [frontEndHighlights, setFrontEndHighlights] = useState<Array<number[]>>(
    []
  )
  const [backEndHighlights, setBackEndHighlights] = useState<Array<number[]>>(
    []
  )
  const [selectedHtmlFrontEndFile, setSelectedHtmlFrontEndFile] = useState<
    string | undefined
  >()

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
        title="Hosted pathway"
        description="Get up and running with Awell Orchestration in less than a day"
        url={`/awell-orchestration/docs/use-cases/hosted-pathway`}
        canonicalUrl={`/awell-orchestration/docs/use-cases/hosted-pathway`}
      />
      <div className="flex mb-8">
        <StackSelector
          selectedStack={{
            frontEnd: frontEnd,
            backEnd: backEnd,
          }}
          onStackChange={onChangeStack}
          stacks={stacks}
        />
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
          {/* React */}
          {frontEnd === 'React' && (
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
                        Add a button to your page. When a client clicks this
                        button, they are redirected to the Awell-hosted pathway
                        page.
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
                        redirected back to the application. In this case, we
                        show a simple message.
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
                        redirected back to the application. In this case, we
                        show a simple message.
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
          )}
          {/* HTML */}
          {frontEnd === 'HTML' && (
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
                    onMouseEnter={() => {
                      setSelectedHtmlFrontEndFile('start-pathway-session.html')
                      setFrontEndHighlights([[7, 11]])
                    }}
                    onMouseLeave={() => {
                      setSelectedHtmlFrontEndFile(undefined)
                      setFrontEndHighlights([])
                    }}
                    className="group relative bg-slate-50 border border-slate-200 rounded-xl p-6 text-left dark:bg-slate-800 dark:border-slate-600"
                  >
                    <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
                    <div className="relative">
                      <p className="text-slate-700 dark:text-slate-200 mb-2">
                        <strong>Add a start pathway page</strong>
                      </p>
                      <p>
                        Add a page from which a pathway session can be started.
                        The page needs a button which, when a client clicks on
                        it, redirects to the Awell-hosted pathway page.
                      </p>
                    </div>
                  </div>
                  <div
                    onMouseEnter={() => {
                      setSelectedHtmlFrontEndFile('success.html')
                      setFrontEndHighlights([[7, 9]])
                    }}
                    onMouseLeave={() => {
                      setSelectedHtmlFrontEndFile(undefined)
                      setFrontEndHighlights([])
                    }}
                    className="group relative bg-slate-50 border border-slate-200 rounded-xl p-6 text-left dark:bg-slate-800 dark:border-slate-600"
                  >
                    <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
                    <div className="relative">
                      <p className="text-slate-700 dark:text-slate-200 mb-2">
                        <strong>Add a success page</strong>
                      </p>
                      <p>
                        Create a success page for the URL you provided as the
                        the Pathway Session success url. The page displays a
                        confirmation message to the client. Awell redirects to
                        this page after the customer successfully completed the
                        pathway.
                      </p>
                    </div>
                  </div>
                  <div
                    onMouseEnter={() => {
                      setSelectedHtmlFrontEndFile('cancel.html')
                      setFrontEndHighlights([[7]])
                    }}
                    onMouseLeave={() => {
                      setSelectedHtmlFrontEndFile(undefined)
                      setFrontEndHighlights([])
                    }}
                    className="group relative bg-slate-50 border border-slate-200 rounded-xl p-6 text-left dark:bg-slate-800 dark:border-slate-600"
                  >
                    <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
                    <div className="relative">
                      <p className="text-slate-700 dark:text-slate-200 mb-2">
                        <strong>Add a cancelled page</strong>
                      </p>
                      <p>
                        Add another page for the cancel url. Awell redirects to
                        this page when the client clicks the back/cancel button
                        when completing the pathway.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-7/12">
                  <CodeTabs selectedTab={selectedHtmlFrontEndFile}>
                    <CodeBlock
                      language="html"
                      fileName="start-pathway-session.html"
                      numberOfLinesPreview={999}
                      highlightedRows={frontEndHighlights}
                    >
                      {`
<!DOCTYPE html>
<html>
  <head>
    <title>Start pathway session</title>
  </head>
  <body>
    <form action="/start-pathway-session" method="POST">
      <button type="submit" id="start-pathway-session-button">
        Start pathway session
      </button>
    </form>
  </body>
</html>
                    `}
                    </CodeBlock>
                    <CodeBlock
                      language="html"
                      fileName="success.html"
                      numberOfLinesPreview={999}
                      highlightedRows={frontEndHighlights}
                    >
                      {`
<!DOCTYPE html>
<html>
<head>
  <title>You completed your pathway!</title>
</head>
<body>
  <p>
    You have successfully completed your pathway.
  </p>
</body>
</html>
                    `}
                    </CodeBlock>
                    <CodeBlock
                      language="html"
                      fileName="cancel.html"
                      numberOfLinesPreview={999}
                      highlightedRows={frontEndHighlights}
                    >
                      {`
<!DOCTYPE html>
<html>
<head>
  <title>Session canceled</title>
</head>
<body>
  <p>Your pathway session was cancelled.</p>
</body>
</html>
                    `}
                    </CodeBlock>
                  </CodeTabs>
                </div>
              </div>
            </div>
          )}
          {/* Next.js */}
          {frontEnd === 'Next.js' && (
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
                    onMouseEnter={() => {
                      setFrontEndHighlights([[3]])
                    }}
                    onMouseLeave={() => {
                      setFrontEndHighlights([])
                    }}
                    className="group relative bg-slate-50 border border-slate-200 rounded-xl p-6 text-left dark:bg-slate-800 dark:border-slate-600"
                  >
                    <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
                    <div className="relative">
                      <p className="text-slate-700 dark:text-slate-200 mb-2">
                        <strong>Add a start pathway page</strong>
                      </p>
                      <p>
                        Add a file under{' '}
                        <div id="content-wrapper" className="inline">
                          <code>/pages</code>
                        </div>{' '}
                        to create a page from which a pathway session can be
                        started.
                      </p>
                    </div>
                  </div>
                  <div
                    onMouseEnter={() => {
                      setFrontEndHighlights([[18, 20]])
                    }}
                    onMouseLeave={() => {
                      setFrontEndHighlights([])
                    }}
                    className="group relative bg-slate-50 border border-slate-200 rounded-xl p-6 text-left dark:bg-slate-800 dark:border-slate-600"
                  >
                    <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
                    <div className="relative">
                      <p className="text-slate-700 dark:text-slate-200 mb-2">
                        <strong>Add a start pathway session button</strong>
                      </p>
                      <p>
                        Add a button to your page which, when a client clicks on
                        it, redirects to the Awell-hosted pathway page.
                      </p>
                    </div>
                  </div>
                  <div
                    onMouseEnter={() => {
                      setFrontEndHighlights([[17]])
                    }}
                    onMouseLeave={() => {
                      setFrontEndHighlights([])
                    }}
                    className="group relative bg-slate-50 border border-slate-200 rounded-xl p-6 text-left dark:bg-slate-800 dark:border-slate-600"
                  >
                    <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
                    <div className="relative">
                      <p className="text-slate-700 dark:text-slate-200 mb-2">
                        <strong>Fetch a Pathway Session</strong>
                      </p>
                      <p>
                        Make a request to the endpoint on your server to
                        redirect the client to a new Pathway Session when they
                        click on the start pathway button.
                      </p>
                    </div>
                  </div>
                  <div
                    onMouseEnter={() => {
                      setFrontEndHighlights([[6, 13]])
                    }}
                    onMouseLeave={() => {
                      setFrontEndHighlights([])
                    }}
                    className="group relative bg-slate-50 border border-slate-200 rounded-xl p-6 text-left dark:bg-slate-800 dark:border-slate-600"
                  >
                    <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
                    <div className="relative">
                      <p className="text-slate-700 dark:text-slate-200 mb-2">
                        <strong>
                          Handle redirect back from Hosted Pathway
                        </strong>
                      </p>
                      <p>
                        Show a message to your client when they are redirected
                        back to you page.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-7/12">
                  <CodeTabs>
                    <CodeBlock
                      language="jsx"
                      fileName="pages/index.js"
                      numberOfLinesPreview={999}
                      highlightedRows={frontEndHighlights}
                    >
                      {`
import React from 'react';

export default function StartPathwayPage() {
  React.useEffect(() => {
    // Check to see if this is a redirect back from Hosted pathway page
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Pathway completed.');
    }

    if (query.get('canceled')) {
      console.log('Pathway canceled');
    }
  }, []);

  return (
    <form action="/api/start_pathway_session" method="POST">
      <button type="submit" role="link">
        Start pathway session
      </button>
    </form>
  );
}
                    `}
                    </CodeBlock>
                  </CodeTabs>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Set up server */}
        <div className="mt-12">
          {backEnd === 'Node' && frontEnd !== 'Next.js' && (
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
                        Your server will need to call the Awell (GraphQL) API.
                        In this example we use node-fetch, but feel free to use
                        any library of your liking.
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
                        You will need an API key to authorize requests to the
                        Awell API and a pathway definition id to indicate what
                        pathway you would like to start.
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
                        After creating the session, redirect your client to the
                        URL for the hosted pathway page returned in the
                        response.
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
        $success_url: ${
          frontEnd === 'HTML'
            ? '`${YOUR_DOMAIN}/success.html`'
            : '`${YOUR_DOMAIN}?success=true`'
        },
        $cancel_url: ${
          frontEnd === 'HTML'
            ? '`${YOUR_DOMAIN}/cancel.html`'
            : '`${YOUR_DOMAIN}?canceled=true`'
        }
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
            </div>
          )}
          {frontEnd === 'Next.js' && (
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
                <div className="w-5/12 flex flex-col gap-4">
                  <div
                    onMouseEnter={() => setBackEndHighlights([[1, 2]])}
                    onMouseLeave={() => setBackEndHighlights([])}
                    className="group relative bg-slate-50 border border-slate-200 rounded-xl p-6 text-left dark:bg-slate-800 dark:border-slate-600"
                  >
                    <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
                    <div className="relative">
                      <p className="text-slate-700 dark:text-slate-200 mb-2">
                        <strong>Configure variables</strong>
                      </p>
                      <p>
                        You will need an API key to authorize requests to the
                        Awell API and a pathway definition id to indicate what
                        pathway you would like to start.
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
                    onMouseEnter={() => setBackEndHighlights([[25, 41]])}
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
                    onMouseEnter={() => setBackEndHighlights([[34, 38]])}
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
                    onMouseEnter={() => setBackEndHighlights([[43]])}
                    onMouseLeave={() => setBackEndHighlights([])}
                    className="group relative bg-slate-50 border border-slate-200 rounded-xl p-6 text-left dark:bg-slate-800 dark:border-slate-600"
                  >
                    <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
                    <div className="relative">
                      <p className="text-slate-700 dark:text-slate-200 mb-2">
                        <strong>Redirect to Hosted Pathway page</strong>
                      </p>
                      <p>
                        After creating the session, redirect your client to the
                        URL for the hosted pathway page returned in the
                        response.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-7/12">
                  <CodeTabs>
                    <CodeBlock
                      language="js"
                      fileName="pages/api/start_pathway_session.js"
                      numberOfLinesPreview={999}
                      highlightedRows={backEndHighlights}
                    >
                      {`
const API_KEY = process.env.AWELL_API_KEY;
const PATHWAY_DEFINITION_ID = "XYZ";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const query = JSON.stringify({
        query: ${'`'}
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
      })

      const session = fetch(AWELL_API_ENDPOINT, {
        method: 'POST',
        headers: {
          apiKey: AWELL_API_KEY,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: {
          query: query,
          variables: {
            $pathway_definition_id: PATHWAY_DEFINITION_ID,
            success_url: ${'`${req.headers.origin}'}/?success=true${'`'},
            cancel_url: ${'`${req.headers.origin}'}/?canceled=true${'`'},
          },
        },
        cache: 'default',
      })

      res.redirect(303, session.url);
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
AWELL_API_KEY=YOUR_API_KEY
                    `}
                    </CodeBlock>
                  </CodeTabs>
                </div>
              </div>
            </div>
          )}
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
                      <Link href="http://localhost:3000">
                        <a className="underline text-sky-500">
                          http://localhost:3000
                        </a>
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
                      <Link href="http://localhost:3000">
                        <a className="underline text-sky-500">
                          http://localhost:3000
                        </a>
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
