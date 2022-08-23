import { GetStaticProps } from 'next/types'
import React, { ReactNode, useContext, useEffect } from 'react'

import { Alert } from '@/components/Alert'
import { DocsHeader } from '@/components/Docs/atoms'
import { FAQ } from '@/components/FAQ'
import { DocsLayout } from '@/components/Layouts'
import { SEO } from '@/components/SEO'
import { AppContext } from '@/contexts/app/AppContext'
import { getAllRetoolPages } from '@/utils/content/awell-orchestration'

interface PageProps {
  pages: {
    frontMatter: {
      title: string
      description: string
    }
    slug: string
  }[]
}

export default function RetoolPage({ pages }: PageProps) {
  const { setTableOfContents } = useContext(AppContext)

  useEffect(() => {
    setTableOfContents('', [
      {
        title: 'Manage & operate pathways with Retool',
        level: 'h2',
        link: '#manage-and-operate-pathways-with-retool',
      },
      {
        title: 'Who it is for',
        level: 'h3',
        link: '#who-it-is-for',
      },
      {
        title: 'Getting started with Awell & Retool',
        level: 'h2',
        link: '#getting-started-with-awell-and-retool',
      },
      {
        title: 'Awell & Retool guide',
        level: 'h3',
        link: '#awell-and-retool-guide',
      },
    ])
  }, [])

  return (
    <div>
      <SEO
        title="Awell & Retool"
        description="Leverage Retool to build internal tools to manage & operate pathways and patients"
        url={`/awell-orchestration/docs/activities/custom-integration/retool`}
        canonicalUrl={`/awell-orchestration/docs/activities/custom-integration/retool`}
      />
      <DocsHeader
        heading={'Custom integration'}
        title={'Awell & Retool'}
        description={
          'Leverage Retool to build internal tools to manage & operate pathways and patients'
        }
        customLink={{
          url: `https://awellhealth.retool.com/apps/Demo%20Care%20App/Patient%20List`,
          title: 'Try it out',
        }}
      />
      {/* Intro section */}
      <div className="max-w-4xl">
        <div id="content-wrapper">
          <p>
            Retool lets you quickly build internal tools with rich GUIs around
            any sort of database or API without writing a single line of code or
            the need of having developers work for weeks on an app.
          </p>
          <h2 id="manage-and-operate-pathways-with-retool">
            Manage & operate pathways with Retool
          </h2>
          <p>Orchestrating Awell pathways has a couple of sides to it:</p>
          <ol className="no-pl">
            <li>
              <strong>Stakeholders need to interact with activities:</strong> a
              pathway is a set of activities that are assigned to a stakeholder
              and these stakeholders need to be able to interact with their
              activities (eg: fill a form, read a message).
            </li>
            <li>
              <strong>Manage & operate pathways:</strong> in order to deliver &
              coordinate care efficiently, you will need some kind of overview
              of all your pathways, pathways that need attention, and more. This
              is usually a place where health care professionals and providers
              can log in to get an overview of who needs care.
            </li>
          </ol>
          <Alert title="Retool to manage & operate pathways" type="info">
            <p>
              For managing & operating pathways, a platform like Retool can be
              leveraged to build the tools needed to manage, operate, and
              coordinate care pathways.
            </p>
          </Alert>
          <p>
            Alternatively, it could be that you have developed an in-house
            EHR/EMR and then nothing prevents you to use our API to add native
            views to your system.
          </p>
          <p>
            Are you using another EHR/EMR system like Healthie, Athena Health,
            ...? We currently do not have a native integration with these
            vendors so if you would require some views to manage & operate Awell
            pathways your best bet is also to leverage a tool like Retool.
          </p>
          <p></p>
          <h3 id="who-it-is-for">Who it is for</h3>
          <ul className="no-pl">
            <li>Startups looking to get their first pathways live rapidly.</li>
            <li>
              Growing businesses seeking to optimize the way they deliver care
              and want to leverage care flows or pathways.
            </li>
            <li>
              Large companies who want to get started with care flows or
              pathways for new business lines without dedicated teams.
            </li>
            <li>
              Teams with limited developer resources but enough technical
              knowledge to get something started in Retool.
            </li>
          </ul>
          <h2 id="getting-started-with-awell-and-retool">
            Getting stared with Awell & Retool
          </h2>
          <p>
            We have wrote a comprehensible guide on how to get started with
            Retool to build the views you will need to manage & operate clinical
            workflows.{' '}
            <strong>
              We also made templates available that you can import in your
              Retool account to get started in no time.
            </strong>
          </p>
          <h3 id="awell-and-retool-guide">Awell & Retool guide</h3>
          <ol>
            {pages.map((page) => (
              <li key={page.slug}>
                <a
                  href={`/awell-orchestration/docs/activities/custom-integration/retool/${page.slug}`}
                  title={page.frontMatter.title}
                >
                  {page.frontMatter.title}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
      {/* FAQ */}
      <div className="mt-12">
        <FAQ
          faqs={[
            {
              question: 'Who needs to build these pages in Retool?',
              answer:
                "It's your responsibility to create and maintain these pages. You thus have full flexibility in what you want to create and how far you want to go.",
            },
            {
              question:
                'Does this mean we need to get a subscription for Retool?',
              answer:
                'Retool has a free tier to get you started which you could use to validate its purpose. For bigger teams a team or business license is probably recommended. Have a look at the Retool website for more information!',
            },
            {
              question:
                'Do you have any Retool template we can leverage to get started quickly?',
              answer:
                'Unfortunately Retool does not allow to share templates between accounts or organizations, neither can we publish templates to their library. However, we have built our own internal tools on Retool, so we can always provide you with some examples.',
            },
          ]}
        />
      </div>
    </div>
  )
}

RetoolPage.getLayout = function getLayout(page: ReactNode) {
  return <DocsLayout>{page}</DocsLayout>
}

export const getStaticProps: GetStaticProps = async () => {
  const pages = getAllRetoolPages()

  return {
    props: {
      pages,
    },
  }
}
