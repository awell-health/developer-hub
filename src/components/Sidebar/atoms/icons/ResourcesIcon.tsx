import clsx from 'clsx'

interface IconProps {
  active: boolean
}

export const ResourcesIcon = ({ active }: IconProps) => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
    <path
      d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
      className={clsx(
        'fill-purple-400 dark:fill-slate-400 group-hover:fill-purple-500 dark:group-hover:fill-slate-200',
        active ? 'dark:fill-slate-200' : 'dark:fill-slate-600'
      )}
    ></path>
    <path
      d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
      className={clsx(
        'fill-purple-400 dark:fill-slate-400 group-hover:fill-purple-500 dark:group-hover:fill-slate-200',
        active ? 'dark:fill-slate-200' : 'dark:fill-slate-400'
      )}
    ></path>
    <path
      d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
      className={clsx(
        'fill-purple-300 dark:fill-slate-100 group-hover:fill-purple-500 dark:group-hover:fill-slate-50',
        active ? 'dark:fill-slate-50' : 'dark:fill-slate-100'
      )}
    ></path>
  </svg>
)
