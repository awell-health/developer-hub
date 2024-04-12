import Link from 'next/link'

import { type Story } from '@/types/stories.types'

interface StoryCardProps {
  story: Story
}

export const StoryCard = ({ story }: StoryCardProps) => {
  const storiesUrl = process.env.NEXT_PUBLIC_AWELL_STORIES_API_URL || ''

  return (
    <Link
      href={`${storiesUrl}/stories/${story.id}`}
      target="_blank"
      className="custom-link block group relative rounded-xl border border-slate-200 dark:border-slate-800"
    >
      <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
      <div className="relative overflow-hidden rounded-xl p-6 flex flex-col justify-start h-full">
        <div className="dark:text-slate-400 pt-1 flex flex-col flex-grow">
          <div>
            <h3 className="font-semibold dark:text-sky-400 mb-2 no-mt">
              {story.title}
            </h3>
            {story.categories && (
              <div className="mb-4 flex gap-2">
                {story.categories.map((category) => (
                  <span
                    key={category}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}
            <span className="pt-3">{story.description}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
