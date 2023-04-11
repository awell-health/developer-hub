import Link from 'next/link'
import { FC } from 'react'

import { Badge } from '@/components/Badge'
import { Button } from '@/components/Button'
import { Extension } from '@/types/extenion.types'
import { Space } from '@/types/space.types'

interface ExtensionHeaderProps {
  extension: Extension
}

export const ExtensionHeader: FC<ExtensionHeaderProps> = ({ extension }) => {
  return (
    <div className="bg-slate-50 border-b border-slate-100 dark:bg-slate-800 dark:border-slate-700">
      <div className="max-w-6xl py-12 mx-auto px-4 sm:px-6 md:px-8">
        <Link href={`/${Space.AWELL_EXTENSIONS}/marketplace`}>
          <a
            title="Back to the Marketplace"
            className="inline-block text-blue-600 text-base pb-4 dark:text-sky-400"
          >
            &#8592; Back to the Marketplace
          </a>
        </Link>
        <div className="flex justify-between items-center">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-white border border-slate-200 rounded-lg dark:bg-slate-700 dark:border-slate-600">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={extension.icon_url}
                alt={extension.title}
                className="w-12 h-12"
              />
            </div>
            <div>
              <h1 className="font-semibold dark:text-sky-400 my-0">
                {extension.title}
              </h1>
              <span className="mt-3 text-lg">{extension.description}</span>
              <div className="mt-2">
                <Badge color="sky">{extension.category}</Badge>
              </div>
            </div>
          </div>
          {/* <div>
            <Button
              label="Install extension"
              color="sky"
              disabled={true}
              onClick={() => null}
            />
          </div> */}
        </div>
      </div>
    </div>
  )
}
