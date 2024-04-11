import Link from 'next/link'

import { useStory } from '@/hooks/useStory'

interface StoryProps {
  storyId: string
}

export const Story = ({ storyId }: StoryProps) => {
  const { story } = useStory(storyId)
  const storiesUrl = process.env.NEXT_PUBLIC_AWELL_STORIES_API_URL || ''

  if (story) {
    return (
      <Link
        href={`${storiesUrl}/stories/${story.id}`}
        key={story.title}
        className="custom-link block group relative rounded-xl border border-slate-200 dark:border-slate-800"
      >
        <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
        <div className="relative overflow-hidden rounded-xl p-6 flex flex-col justify-start h-full">
          <div className="dark:text-slate-400 pt-2 flex flex-col flex-grow">
            <div>
              <span className="text-lg sm:text-xl text-slate-900 tracking-tight font-semibold dark:text-slate-200">
                {story.title}
              </span>
              <div className="mt-2 flex gap-2">
                {story.categories &&
                  story.categories.map((category) => (
                    <span
                      key={category}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800"
                    >
                      {category}
                    </span>
                  ))}
              </div>
              <div className="mt-4">{story.description}</div>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return <div />
}
