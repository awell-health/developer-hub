import { useState } from 'react'

import { CodeTabs } from '@/components/CodeTabs'
import { CodeBlock } from '@/components/CodeTabs/atoms'

export const NextJS = () => {
  const [frontEndHighlights, setFrontEndHighlights] = useState<Array<number[]>>(
    []
  )

  return (
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
                to create a page from which a pathway session can be started.
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
                Add a button to your page which, when a client clicks on it,
                redirects to the Awell-hosted pathway page.
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
                Make a request to the endpoint on your server to redirect the
                client to a new Pathway Session when they click on the start
                pathway button.
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
                <strong>Handle redirect back from Hosted Pathway</strong>
              </p>
              <p>
                Show a message to your client when they are redirected back to
                you page.
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
    <form action="/api/start-pathway-session" method="POST">
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
  )
}
