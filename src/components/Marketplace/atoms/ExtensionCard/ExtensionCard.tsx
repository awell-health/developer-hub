import { CodeIcon, LightningBoltIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { FC } from 'react'

import { Badge } from '@/components/Badge'
import { Extension } from '@/types/extenion.types'
import { Space } from '@/types/space.types'

interface ExtensionCardProps {
  extension: Extension
  type?: 'condensed' | 'normal'
}

export const ExtensionCard: FC<ExtensionCardProps> = ({
  extension,
  type = 'normal',
}) => {
  if (type === 'normal') {
    return (
      <Link
        href={`/${Space.AWELL_EXTENSIONS}/marketplace/${extension.key}`}
        key={extension.key}
      >
        <a className="custom-link block group relative rounded-xl border border-slate-200 dark:border-slate-800">
          <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
          <div className="relative overflow-hidden rounded-xl p-6 flex flex-col justify-start h-full">
            <div className="dark:text-slate-400 pt-1 flex flex-col flex-grow">
              <div>
                <div className="p-2 bg-slate-100 inline-block rounded-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={extension.icon_url}
                    alt={extension.title}
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="font-semibold dark:text-sky-400 mb-2 mt-1">
                  {extension.title}
                </h3>
                <div className="mb-4 flex gap-2">
                  <Badge color="sky">{extension.category}</Badge>
                </div>
                <span className="pt-3">{extension.description}</span>
                <div className="mt-4 flex gap-4 text-sm">
                  {Object.keys(extension.actions).length > 0 && (
                    <div className="flex gap-1 items-center">
                      <LightningBoltIcon className="w-4 h-4" />
                      {Object.keys(extension.actions).length}{' '}
                      {Object.keys(extension.actions).length === 1
                        ? 'Custom Action'
                        : 'Custom Actions'}
                    </div>
                  )}
                  {extension.webhooks.length > 0 && (
                    <div className="flex gap-1 items-center">
                      <CodeIcon className="w-4 h-4" />
                      {extension.webhooks.length}{' '}
                      {extension.webhooks.length === 1 ? 'Webhook' : 'Webhooks'}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </a>
      </Link>
    )
  }

  return (
    <Link
      href={`/${Space.AWELL_EXTENSIONS}/marketplace/${extension.key}`}
      key={extension.key}
    >
      <a className="custom-link block group relative rounded-xl border border-slate-200 dark:border-slate-800">
        <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
        <div className="relative overflow-hidden rounded-xl p-6 flex flex-col justify-start h-full">
          <div className="dark:text-slate-400 pt-1 flex flex-col flex-grow">
            <div>
              <div className="p-2 bg-slate-100 inline-block rounded-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={extension.icon_url}
                  alt={extension.title}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="font-semibold dark:text-sky-400 mb-2 mt-1">
                {extension.title}
              </h3>
              <span className="pt-3">{extension.description}</span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}
