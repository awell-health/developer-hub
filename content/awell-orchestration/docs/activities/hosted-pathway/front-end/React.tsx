import { useState } from 'react'

import { CodeTabs } from '@/components/CodeTabs'
import { CodeBlock } from '@/components/CodeTabs/atoms'

export const ReactDocs = () => {
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
                <strong>Show a message when client is redirected back</strong>
              </p>
              <p>
                We want to show something to the client when they get redirected
                back to the application. In this case, we show a simple message.
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
                We want to show something to the client when they get redirected
                back to the application. In this case, we show a simple message.
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
  )
}
