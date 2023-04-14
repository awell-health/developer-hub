import { BadgeColorType, BadgeSizeType } from './badge.types'

export const DEFAULT_BADGE_SIZE: BadgeSizeType = 'base'
export const DEFAULT_BADGE_COLOR: BadgeColorType = 'slate'

export const baseStyles = 'px-2.5 py-0.5 rounded-full font-medium'

export const badgeSizes: { [key in BadgeSizeType]: string } = {
  sm: 'text-xxs mr-2 px-2.5 py-1 rounded-full font-medium',
  base: `${baseStyles} text-xs`,
  lg: `${baseStyles} text-base`,
}

export const badgeColors: { [key in BadgeColorType]: string } = {
  sky: 'text-sky-600 dark:text-sky-400 bg-sky-400/10',
  slate: 'bg-slate-400/10 dark:highlight-white/5',
  green: 'bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900',
  indigo:
    'bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900',
  purple:
    'bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900',
  red: 'bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900',
  orange:
    'bg-orange-100 text-orange-800 dark:bg-orange-200 dark:text-orange-900',
  yellow:
    'bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900',
}
