import { ReactNode } from 'react'

import { LinkButton } from '@/components/Button'
import { CodeTabs } from '@/components/CodeTabs'
import { CodeBlock } from '@/components/CodeTabs/atoms'
import { Footer } from '@/components/Footer'
import { HomeLayout } from '@/components/Layouts'
import { SEO } from '@/components/SEO'
import { Effort } from '@/components/UseCasesComparisonTable/atoms/Effort'
import { Space } from '@/types/space.types'

export default function Home() {
  return (
    <>
      <SEO
        description="Explore our guides, API references, and examples to start integrating with Awell."
        url="/"
        canonicalUrl="/awell-score"
      />
      <div className="relative max-w-6xl mx-auto pt-4 md:pt-8 lg:pt-12 px-4 sm:px-6 md:px-8">
        <div>
          <h1 className="text-slate-900 font-extrabold text-xl sm:text-2xl lg:text-3xl tracking-tight dark:text-white">
            Awell Score
          </h1>
          <p className="mt-2 text-xl text-slate-600 dark:text-slate-400">
            Calculate clinically validated scores through our API.
          </p>
        </div>
        <div className="mt-12 flex flex-col md:flex-row">
          <div className="md:w-7/12">
            <div className="w-full md:w-11/12">
              <h2 className="text-slate-900 text-xl lg:text-2xl font-bold dark:text-white m-0 p-0">
                Get started with scores in less then a day
              </h2>
              <p className="mt-1 text-lg text-slate-600 dark:text-slate-400">
                Don&apos;t build score calculations yourself but leverage our
                easy to use API to get started with scores quickly.
              </p>
              <div className="mt-2">
                <div className="font-semibold">Effort:</div>
                <div className="pt-1">
                  <Effort effort={2} />
                </div>
              </div>
              <div className="mt-4">
                <LinkButton
                  label="Discover the API"
                  href={`/${Space.AWELL_SCORE}/docs/getting-started/playground`}
                  size="base"
                  color="sky"
                />
              </div>
            </div>
          </div>
          <div className="mt-8 md:mt-0 md:w-5/12">
            <div className="relative">
              <div className="z-10">
                <CodeTabs>
                  <CodeBlock language="javascript" fileName="request">
                    {`
{
  "endpoint": "https://score-api.staging.awellhealth.com/v2/calculations",
  "method": "POST",
  "body": {
    "calculation_id": "bmi",
    "calculation_input": {
      "height": "100",
      "weight": "170"
    }
  }
}
              `}
                  </CodeBlock>
                  <CodeBlock language="javascript" fileName="response">
                    {`
{
  "id": "63219d04228b1a00193b5879",
  "calculation_id": "bmi",
  "timestamp": "2022-09-14T09:21:08.350Z",
  "calculation_input": {
    "height": "100",
    "weight": "170"
  },
  "results": [
    {
      "subresult_id": "BMI",
      "label": {
        "en": "Body Mass Index"
      },
      "unit": {
        "en": "kg/m2"
      },
      "type": "number",
      "result": 170,
      "status": "CALCULATED"
    }
  ]
}
              `}
                  </CodeBlock>
                </CodeTabs>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactNode) {
  return <HomeLayout>{page}</HomeLayout>
}
