import { FC } from 'react'

import { Extension } from '@/types/extenion.types'

import { ExtensionHeader, ExtensionProperty } from '../atoms'
import { RandomExtensionsPanel } from '../molecules'

interface ExtensionDetailProps {
  extension: Extension
}

export const ExtensionDetail: FC<ExtensionDetailProps> = ({ extension }) => {
  return (
    <>
      <ExtensionHeader extension={extension} />
      <section className="max-w-6xl py-12 mx-auto px-4 sm:px-6 md:px-8 flex gap-24">
        <div
          id="content-wrapper"
          className="extension-detail w-3/4"
          dangerouslySetInnerHTML={{ __html: extension.htmlDocs }}
        />
        <div className="flex flex-col gap-6">
          <ExtensionProperty label="Pricing">Free</ExtensionProperty>
          <ExtensionProperty label="Custom Actions">
            {Object.values(extension.actions).map((action) => (
              <div key={action.title}>{action.title}</div>
            ))}
          </ExtensionProperty>
          <ExtensionProperty label="Author">
            {extension.author.authorType}
          </ExtensionProperty>
          <ExtensionProperty label="Version">1</ExtensionProperty>
          {extension.author.authorType === 'Awell' && (
            <ExtensionProperty label="Support">
              info@awellhealth.com
            </ExtensionProperty>
          )}
        </div>
      </section>
      <section className="max-w-6xl mt-6 mx-auto px-4 sm:px-6 md:px-8">
        <div className="border-t border-slate-200 pt-8 dark:border-slate-800">
          <h2>Other extensions</h2>
          <RandomExtensionsPanel
            n={3}
            cols={3}
            excludeExtensionWithKey={extension.key}
          />
        </div>
      </section>
    </>
  )
}
