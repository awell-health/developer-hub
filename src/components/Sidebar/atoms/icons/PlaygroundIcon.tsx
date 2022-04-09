import clsx from 'clsx'

interface IconProps {
  active: boolean
}

export const PlaygroundIcon = ({ active }: IconProps) => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
    <path
      d="M4 12a7 7 0 0 1 7-7h2a7 7 0 1 1 0 14h-2a7 7 0 0 1-7-7Z"
      className={clsx(
        'fill-blue-400 group-hover:fill-sky-500 dark:group-hover:fill-sky-600',
        active ? 'dark:fill-sky-600' : 'dark:fill-slate-800'
      )}
    ></path>
    <path
      d="M10.25 9.75 7.75 12l2.5 2.25"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={clsx(
        'stroke-blue-50 dark:stroke-slate-400 dark:group-hover:stroke-white',
        active ? 'dark:stroke-white' : ''
      )}
    ></path>
    <path
      d="m13.75 9.75 2.5 2.25-2.5 2.25"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={clsx(
        'stroke-blue-200 dark:group-hover:stroke-white',
        active ? ' dark:stroke-white' : 'stroke-blue-200'
      )}
    ></path>
  </svg>
)
