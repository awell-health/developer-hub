import { useState } from 'react'

import { CodeTabs } from '../../../../../../src/components/CodeTabs'
import { CodeBlock } from '../../../../../../src/components/CodeTabs/atoms'

export const Html = () => {
  const [frontEndHighlights, setFrontEndHighlights] = useState<Array<number[]>>(
    []
  )
  const [selectedHtmlFrontEndFile, setSelectedHtmlFrontEndFile] = useState<
    string | undefined
  >()

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
                Add a page from which a pathway session can be started. The page
                needs a button which, when a client clicks on it, redirects to
                the Awell-hosted pathway page.
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
                Create a success page for the URL you provided as the the
                Pathway Session success url. The page displays a confirmation
                message to the client. Awell redirects to this page after the
                customer successfully completed the pathway.
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
                Add another page for the cancel url. Awell redirects to this
                page when the client clicks the back/cancel button when
                completing the pathway.
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
  )
}
