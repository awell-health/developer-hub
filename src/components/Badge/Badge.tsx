import { ReactNode } from 'react'

import { BadgeColorType, BadgeSizeType } from './badge.types'
import {
  badgeColors,
  badgeSizes,
  baseStyles,
  DEFAULT_BADGE_COLOR,
  DEFAULT_BADGE_SIZE,
} from './badgeStyles'

interface ButtonProps {
  children: ReactNode
  color?: BadgeColorType
  withIcon?: boolean
  size?: BadgeSizeType
}

export const Badge = ({
  children,
  color = DEFAULT_BADGE_COLOR,
  size = DEFAULT_BADGE_SIZE,
}: ButtonProps) => {
  return (
    <span className={`${baseStyles} ${badgeSizes[size]} ${badgeColors[color]}`}>
      {children}
    </span>
  )
}
