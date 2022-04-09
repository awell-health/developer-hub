import clsx from 'clsx'

interface IconProps {
  active: boolean
}

export const DocumentationIcon = ({ active }: IconProps) => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.5 7c1.093 0 2.117.27 3 .743V17a6.345 6.345 0 0 0-3-.743c-1.093 0-2.617.27-3.5.743V7.743C5.883 7.27 7.407 7 8.5 7Z"
      className={clsx(
        'fill-sky-200 group-hover:fill-sky-500',
        active
          ? 'dark:fill-sky-300 dark:group-hover:fill-sky-300'
          : 'dark:fill-slate-400 dark:group-hover:fill-sky-300'
      )}
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.5 7c1.093 0 2.617.27 3.5.743V17c-.883-.473-2.407-.743-3.5-.743s-2.117.27-3 .743V7.743a6.344 6.344 0 0 1 3-.743Z"
      className={clsx(
        'fill-sky-400 group-hover:fill-sky-500',
        active
          ? 'dark:fill-sky-200 dark:group-hover:fill-sky-200'
          : 'dark:fill-slate-600 dark:group-hover:fill-sky-200'
      )}
    ></path>
  </svg>
)
