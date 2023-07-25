import { ReactNode } from 'react'

import { ButtonColorType, ButtonSizeType, ButtonType } from './button.types'
import {
  buttonColors,
  buttonSizes,
  DEFAULT_BUTTON_COLOR,
  DEFAULT_BUTTON_SIZE,
} from './buttonStyles'

interface ButtonProps {
  color?: ButtonColorType
  size?: ButtonSizeType
  disabled?: boolean
  type?: ButtonType
  fullWidth?: boolean
  onClick: () => void
  children: ReactNode
}

export const Button = ({
  color = DEFAULT_BUTTON_COLOR,
  size = DEFAULT_BUTTON_SIZE,
  fullWidth,
  onClick,
  type = 'button',
  disabled = false,
  children,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`btn-base ${buttonSizes[size]} ${buttonColors[color]} ${
        fullWidth ? 'w-full flex justify-center' : ''
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
