import Link from 'next/link'

interface PropsType {
  id: string
}

export const CustomH3 = ({ id, ...rest }: PropsType) => {
  if (id) {
    return (
      <h3
        id={id}
        className="group relative flex whitespace-pre-wrap scroll-mt-32"
      >
        <Link
          href={`#${id}`}
          className="absolute -ml-10 flex items-center opacity-0 border-0 group-hover:opacity-100 top-0.5"
          aria-label="Anchor"
        >
          <div className="w-6 h-6 text-slate-400 ring-1 ring-slate-900/5 rounded-md shadow-sm flex items-center justify-center hover:ring-slate-900/10 hover:shadow hover:text-slate-700 dark:bg-slate-700 dark:text-slate-300 dark:shadow-none dark:ring-0">
            <svg width={12} height={12} fill="none" aria-hidden="true">
              <path
                d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </Link>
        <span {...rest} />
      </h3>
    )
  }

  return <h3 {...rest} />
}
