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
  color?: ButtonColorType
  size?: ButtonSizeType
}

export const LinkButton = ({
  label,
  href,
  color = DEFAULT_BUTTON_COLOR,
  size = DEFAULT_BUTTON_SIZE,
}: ButtonProps) => {
  return (
    <Link href={href}>
      <a
        title={label}
        className={`btn-base ${buttonSizes[size]} ${buttonColors[color]}`}
      >
        <span>{label}</span>
      </a>
    </Link>
  )
}
