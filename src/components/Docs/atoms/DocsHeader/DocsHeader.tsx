import { Badge } from '../../../../components/Badge'
import { BadgeType } from '../../../../types/menu.types'
import { EditOnGithub } from '../../../Button/variants'

interface DocsHeaderProps {
  heading?: string
  title: string
  description?: string
  badge?: BadgeType
  githubUrl?: string
}

export const DocsHeader = ({
  heading,
  title,
  description,
  badge,
  githubUrl,
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
    {githubUrl && (
      <div className="mt-2">
        <EditOnGithub href={githubUrl} />
      </div>
    )}
    <div className="border-b border-gray-200 dark:border-gray-800 my-6"></div>
  </header>
)
