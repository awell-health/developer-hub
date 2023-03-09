import Link from 'next/link'

import { Space } from '@/types/space.types'

import { Badge } from '../../../../components/Badge'
import { BadgeType } from '../../../../types/menu.types'
import {
  EditOnGithub,
  GraphQLButton,
  OpenInPostman,
} from '../../../Button/variants'

interface DocsHeaderProps {
  heading?: string
  title: string
  description?: string
  badge?: BadgeType
  githubUrl?: string
  playgroundButton?: boolean
  postman?: {
    showPostmanButton?: boolean
    postmanButtonUrl?: string
  }
  customLink?: {
    url: string
    title: string
  }
}

export const DocsHeader = ({
  heading,
  title,
  description,
  badge,
  githubUrl,
  postman,
  playgroundButton,
  customLink,
}: DocsHeaderProps) => (
  <header id="header" className="relative z-20">
    <div>
      {heading && (
        <p className="mb-2 text-sm sm:text-base leading-6 font-semibold text-sky-500 dark:text-sky-400">
          {heading}
        </p>
      )}
      <div className="flex items-center">
        <h1 className="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
          {title}
        </h1>
        {badge && (
          <div className="ml-2">
            <Badge color={badge.color}>{badge.label}</Badge>
          </div>
        )}
      </div>
    </div>
    {description && (
      <p className="mt-2 sm:text-lg text-slate-700 dark:text-slate-400">
        {description}
      </p>
    )}
    <div className="flex">
      {githubUrl && (
        <div className="mt-2 mr-3">
          <EditOnGithub href={githubUrl} />
        </div>
      )}
      {postman?.showPostmanButton && (
        <div className="mt-2 mr-3">
          <OpenInPostman postmanUrl={postman.postmanButtonUrl} />
        </div>
      )}
      {playgroundButton && (
        <div className="mt-2 mr-3">
          <GraphQLButton
            url={`/${Space.AWELL_ORCHESTRATION}/developer-tools/api/playground`}
          />
        </div>
      )}
      {customLink && (
        <div className="mt-2 mr-3">
          <Link href={customLink.url}>
            <a
              title={customLink.title}
              target="_blank"
              className="inline-flex items-center px-4 py-2 text-xs font-semibold bg-sky-500 text-white border border-sky-500 rounded-lg focus:outline-none hover:bg-sky-400 hover:border-sky-400 focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-sky-200"
            >
              {customLink.title}
            </a>
          </Link>
        </div>
      )}
    </div>
    <div className="border-b border-gray-200 dark:border-gray-800 my-6"></div>
  </header>
)
