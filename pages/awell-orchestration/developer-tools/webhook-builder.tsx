import React, { ReactNode, useState } from 'react'

import { CodeTabs } from '@/components/CodeTabs'
import { CodeBlock } from '@/components/CodeTabs/atoms'
import { DocsHeader } from '@/components/Docs/atoms'
import { DocsLayoutWithoutToc } from '@/components/Layouts'
import { SEO } from '@/components/SEO'
import { StackSelector } from '@/components/StackSelector'
import { webhooks } from '@/config/webhooks'
import { stack } from '@/content/awell-orchestration/developer-tools/webhooks/webhook-builder'
import { useStack } from '@/hooks/useStack'
import { type WebhooksType } from '@/types/webhooks.types'

export default function WebhookBuilderPage() {
  const { frontEnd, changeFrontEnd, backEnd, changeBackEnd } = useStack()
  const [selectedWebhooks, setSelectedWebhooks] = useState<WebhooksType>([])

  const onChangeStack = ({
    newBackEnd,
    newFrontEnd,
  }: {
    newBackEnd?: string
    newFrontEnd?: string
  }) => {
    if (newBackEnd) {
      changeBackEnd(newBackEnd)
    }
    if (newFrontEnd) {
      changeFrontEnd(newFrontEnd)
    }
  }

  return (
    <div>
      <SEO
        title="Webhook builder"
        description="Interactive webhook endpoint builder"
        url={`/awell-orchestration/developer-tools/webhooks/webhook-builder`}
        canonicalUrl={`/awell-orchestration/developer-tools/webhooks/webhook-builder`}
      />
      <div className="flex mb-8">
        <StackSelector
          selectedStack={{
            frontEnd,
            backEnd,
          }}
          onStackChange={onChangeStack}
          stacks={stack}
        />
      </div>
      <DocsHeader
        heading={'Webhooks'}
        title={'Webhook builder'}
        description={'Interactive webhook endpoint builder'}
      />
      {/* Intro section */}
      <div className="max-w-4xl">
        <div id="content-wrapper">
          <p>
            Learn how to set up and deploy a webhook to listen to events from
            Awell!
          </p>
        </div>
      </div>
      {/* Webhook builder */}
      <div>
        <h2>Interactive webhook builder</h2>
        <div className="flex gap-8">
          <div className="w-5/12 flex flex-col gap-4">
            <p>
              Select the webhooks you would like to listen to and copy/paste the
              corresponding code.
            </p>
            <div className="">
              <fieldset className="space-y-5">
                <legend className="sr-only">Webhooks</legend>
                {webhooks.map((webhook) => (
                  <div
                    className="relative flex items-start"
                    key={webhook.event}
                  >
                    <div className="flex items-center h-5">
                      <input
                        id={webhook.event}
                        name={webhook.event}
                        type="checkbox"
                        defaultChecked={selectedWebhooks.includes(webhook)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedWebhooks([...selectedWebhooks, webhook])
                          } else {
                            setSelectedWebhooks(
                              selectedWebhooks.filter(
                                (selectedWebhook) =>
                                  selectedWebhook.event !== webhook.event
                              )
                            )
                          }
                        }}
                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor={webhook.event}
                        className="text-gray-700 dark:text-white font-semibold"
                      >
                        {webhook.event}
                      </label>
                      <p
                        id={webhook.event}
                        className="text-gray-500 dark:text-gray-400"
                      >
                        {webhook.description}
                      </p>
                    </div>
                  </div>
                ))}
              </fieldset>
            </div>
          </div>
          <div className="w-7/12">
            <CodeTabs>
              <CodeBlock
                language="js"
                fileName="server.js"
                numberOfLinesPreview={999}
              >
                {`
const express = require('express');
const app = express();

// If you are using Express v4 - v4.16 you need to use body-parser, not express, to retrieve the request body
app.post('/awell-webhooks', express.json({type: 'application/json'}), (request, response) => {
  const event = request.body;

  // Handle the event
  switch (event.event_type) {${selectedWebhooks
    .map((selectedWebhook) => {
      return `
    case '${selectedWebhook.event}': {${selectedWebhook?.eventVariables
        .map((eventVariable) => {
          return `
      const ${eventVariable.variableName} = ${eventVariable.jsonPath};`
        })
        .join('')}${selectedWebhook?.eventVariables
        .map((eventVariable) => {
          return `
      console.log(${eventVariable.variableName});`
        })
        .join('')}
      // ${selectedWebhook.comment}
      break;
    }`
    })
    .join('')}
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
    </div>
  )
}

WebhookBuilderPage.getLayout = function getLayout(page: ReactNode) {
  return <DocsLayoutWithoutToc>{page}</DocsLayoutWithoutToc>
}
