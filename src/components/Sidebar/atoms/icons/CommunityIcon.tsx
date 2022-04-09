import clsx from 'clsx'

interface IconProps {
  active: boolean
}

export const CommunityIcon = ({ active }: IconProps) => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 5a6 6 0 0 0-4.687 9.746c.215.27.315.62.231.954l-.514 2.058a1 1 0 0 0 1.485 1.1l2.848-1.71c.174-.104.374-.15.576-.148H13a6 6 0 0 0 0-12h-2Z"
      className={clsx(
        'fill-violet-400 group-hover:fill-violet-500 dark:group-hover:fill-slate-600',
        active ? 'dark:fill-slate-600' : 'dark:fill-slate-600'
      )}
    ></path>
    <circle
      cx="12"
      cy="11"
      r="1"
      className={clsx(
        'fill-white dark:group-hover:fill-white',
        active ? 'dark:fill-white' : ''
      )}
    ></circle>
    <circle
      cx="9"
      cy="11"
      r="1"
      className={clsx(
        'fill-violet-200 dark:group-hover:fill-white',
        active ? 'dark:fill-white' : ''
      )}
    ></circle>
    <circle
      cx="15"
      cy="11"
      r="1"
      className={clsx(
        'fill-violet-200 dark:fill-slate-400 dark:group-hover:fill-white',
        active ? 'dark:fill-white' : ''
      )}
    ></circle>
  </svg>
)
