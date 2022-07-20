import Image from 'next/image'
import Link from 'next/link'

interface HowToUseProps {
  stories: {
    title: string
    url: string
    imageUrl?: string
    badges: string[]
    description: string
  }[]
}

export const HowToUse = ({ stories }: HowToUseProps) => {
  return (
    <div className={`grid md:grid-cols-${stories.length} gap-4`}>
      {stories.map((story) => (
        <Link href={story.url} key={story.title}>
          <a className="custom-link block group relative rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
            <figure className="relative overflow-hidden rounded-xl p-6 flex flex-col justify-start h-full">
              {story.imageUrl && (
                <Image
                  src={story.imageUrl}
                  alt={story.title}
                  className="w-full rounded-lg"
                  width="1200"
                  height="650"
                />
              )}
              <figcaption className="dark:text-slate-400 pt-2 flex flex-col flex-grow">
                <div>
                  <span className="text-lg sm:text-xl text-slate-900 tracking-tight font-semibold dark:text-slate-200">
                    {story.title}
                  </span>
                  <div className="mt-2 flex gap-2">
                    {story.badges.map((badge) => (
                      <span
                        key={badge}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4">{story.description}</div>
                </div>
              </figcaption>
            </figure>
          </a>
        </Link>
      ))}
    </div>
  )
}
