import Link from 'next/link'
import { ReactNode, useState } from 'react'

import { DocsHeader } from '../../../../src/components/Docs/atoms'
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
  //   const { next, prev } = useQuickNavigation(slug)

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
          <span className="text-base font-semibold text-slate-800 mr-2">
            Front-end:{' '}
          </span>
          <CardSelector
            selected={frontEndLanguage}
            options={availableFrontEndLanguages}
            onCardSelect={changeFrontEndLanguage}
          />
        </div>
        <div className="flex items-center ml-12">
          <span className="text-base font-semibold text-slate-800 mr-2">
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
        title={'Hosted pathway'}
        description={
          'Get up and running with Awell Orchestration in less than a day'
        }
      />
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
            The Pathway Session provides a URL that redirects your client to an
            Awell-hosted pathway page.
          </li>
          <li>
            Your client can interact with the pathway or care flow and complete
            activities.
          </li>
          <li>
            When the pathway is completed, a webhook (
            <code>pathway.session.completed</code>) is triggered to let you know
            the pathway is completed.
          </li>
        </ol>
        <figure className="w-full flex flex-col justify-center text-center pt-4">
          <img
            src="https://res.cloudinary.com/da7x4rzl4/image/upload/v1651756063/Developer%20portal/Sequence_Diagram_Template_Community.png"
            alt="Pathway versioning"
            className="w-full sm:w-9/12 mx-auto"
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
      </div>
      <div className="mt-12">{/* <QuickNav prev={prev} next={next} /> */}</div>
    </div>
  )
}

HostedPathwayPage.getLayout = function getLayout(page: ReactNode) {
  return <DocsLayoutWithoutToc>{page}</DocsLayoutWithoutToc>
}
