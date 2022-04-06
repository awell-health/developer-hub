import Image from 'next/image'
import { ReactNode } from 'react'

import studioHelpCenter from '../public/images/studio-help-center.png'
import { LinkButton } from '../src/components/Button'
import { DocsHeader } from '../src/components/Docs/atoms'
import { DocsLayoutWithoutToc } from '../src/components/Layouts'
import { SEO } from '../src/components/SEO'
import { docsMenu } from '../src/config/menus'

export default function Community() {
  return (
    <>
      <SEO
        title="Awell Studio docs"
        url={`/awell-studio-docs`}
        canonicalUrl={`/awell-studio-docs`}
      />
      <div className="max-w-3xl mx-auto xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16">
        <DocsHeader
          heading="Awell Studio docs"
          title="Articles on using Awell Studio"
        />
        <div id="content-wrapper">
          <p>
            Need help with using the Awell Studio to build your care pathway? Or
            maybe you want to get familiar with the basic concepts and building
            blocks of our Studio? Check out our{' '}
            <a
              href="https://help.awellhealth.com/en/"
              title="Awell Help Center"
              target="_blank"
              rel="noreferrer"
            >
              Help center
            </a>{' '}
            containing articles on building your care pathway and courses to
            build your first pathway.
          </p>
        </div>
      </div>
      <div className="-mx-4 p-4 pb-10 bg-slate-50 flex flex-col-reverse items-start sm:mx-0 sm:p-10 sm:rounded-2xl xl:flex-row dark:bg-slate-800/50">
        <div className="flex-auto">
          <p className="mb-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-200">
            Awell Studio Help Center
          </p>
          <div className="mb-6 text-lg text-slate-600 space-y-4 dark:text-slate-400">
            <p>
              Articles, guides, tips, and tricks on using Awell Studio to build,
              validate, and publish your clinical pathways.
            </p>
          </div>
          <LinkButton
            label="Open help center"
            size="lg"
            href="https://help.awellhealth.com/en/"
            color="sky"
          />
        </div>
        <div className="w-full flex-none mb-10 xl:mb-0 xl:ml-8 xl:w-[29rem]">
          <div className="aspect-w-[1216] aspect-h-[606] sm:aspect-w-[1376] sm:aspect-h-[664] shadow-lg rounded-lg bg-slate-100 overflow-hidden dark:bg-slate-800">
            <Image src={studioHelpCenter} alt="Awell Studio Help Center" />
          </div>
        </div>
      </div>
    </>
  )
}

Community.getLayout = function getLayout(page: ReactNode) {
  return <DocsLayoutWithoutToc menu={docsMenu}>{page}</DocsLayoutWithoutToc>
}
