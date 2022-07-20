// import Link from 'next/link'
import React, { ReactNode } from 'react'

import {
  //   ReactDocs,
  stack,
} from '../../../../../../../content/awell-orchestration/docs/use-cases/custom-integration/stories/conversational-forms'
// import { LinkButton } from '../../../../../../../src/components/Button'
import { DocsHeader } from '../../../../../../../src/components/Docs/atoms'
import { DocsLayoutWithoutToc } from '../../../../../../../src/components/Layouts'
import { SEO } from '../../../../../../../src/components/SEO'
import { StackSelector } from '../../../../../../../src/components/StackSelector'
import { useStack } from '../../../../../../../src/hooks/useStack'

export default function ConversationalFormsStoryPage() {
  const { frontEnd, backEnd, changeBackEnd, changeFrontEnd } = useStack()

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
        title="Conversational forms"
        description="Learn how to display a form question-by-question (conversational) and submit the response to the Awell API"
        url={`/awell-orchestration/docs/use-cases/custom-integration/stories/form/conversational-forms`}
        canonicalUrl={`/awell-orchestration/docs/use-cases/custom-integration/stories/form/conversational-forms`}
      />
      <div className="flex mb-8">
        <StackSelector
          selectedStack={{
            frontEnd: frontEnd,
            backEnd: backEnd,
          }}
          onStackChange={onChangeStack}
          stacks={stack}
        />
      </div>
      <DocsHeader
        heading={'Custom integration'}
        title={'Conversational forms'}
        description={
          'Learn how to display a form question-by-question (conversational) and submit the response to the Awell API'
        }
      />
      {/* Intro section */}
      <div className="max-w-4xl">
        <div id="content-wrapper">
          <p>We are currently working on this page.</p>
        </div>
      </div>
      {/* FAQ */}
      <div className="mt-12">{/* <QuickNav prev={prev} next={next} /> */}</div>
    </div>
  )
}

ConversationalFormsStoryPage.getLayout = function getLayout(page: ReactNode) {
  return <DocsLayoutWithoutToc>{page}</DocsLayoutWithoutToc>
}
