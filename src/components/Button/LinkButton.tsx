import Link from 'next/link'

import { ButtonColorType, ButtonSizeType } from './button.types'
import {
  buttonColors,
  buttonSizes,
  DEFAULT_BUTTON_COLOR,
  DEFAULT_BUTTON_SIZE,
} from './buttonStyles'

interface ButtonProps {
  label: string
  href: string
  newTab?: boolean
  color?: ButtonColorType
  size?: ButtonSizeType
}

export const LinkButton = ({
  label,
  href,
  newTab,
  color = DEFAULT_BUTTON_COLOR,
  size = DEFAULT_BUTTON_SIZE,
}: ButtonProps) => {
  return (
    <Link
      href={href}
      title={label}
      target={newTab ? '_blank' : ''}
      className={`btn-base ${buttonSizes[size]} ${buttonColors[color]}`}
    >
      <span>{label}</span>
    </Link>
  )
}
