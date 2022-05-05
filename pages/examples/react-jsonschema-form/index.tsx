import { CodeIcon } from '@heroicons/react/outline'
import Form from '@rjsf/core'
import Head from 'next/head'
import Link from 'next/link'

import { SEO } from '../../../src/components/SEO'
import { exampleForm as exampleFormInAwellFormat } from '../../../src/examples/react-json-schema-form/data/exampleForm'
import { useReactJsonSchemaForm } from '../../../src/examples/react-json-schema-form/hooks'

export default function ReactJsonSchemaFormExample() {
  const { schema, uiSchema } = useReactJsonSchemaForm(exampleFormInAwellFormat)

  return (
    <div className="h-screen">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
          integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn"
          crossOrigin="anonymous"
        />
      </Head>
      <SEO
        title="react-jsonschema-form | Examples"
        url={`/examples/react-jsonschema-form`}
        canonicalUrl={`/examples/react-jsonschema-form`}
      />
      <div className="bg-indigo-600">
        <div className="max-w-6xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-indigo-800">
                <CodeIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </span>
              <p className="ml-3 font-medium text-white truncate">
                <span>react-jsonschema-form example</span>
              </p>
            </div>
            <div className="order-3 flex-shrink-0 w-full w-auto">
              <Link href="https://github.com/nckhell/awell-developers/blob/main/pages/examples/react-jsonschema-form/index.tsx">
                <a className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50">
                  See code
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 mt-8 pb-32 mt-16">
        <Form
          schema={schema}
          uiSchema={uiSchema}
          onSubmit={(e) => {
            alert('Check the console for submitted data.')
            console.log(e.formData)
          }}
        />
      </div>
    </div>
  )
}
