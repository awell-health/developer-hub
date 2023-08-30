import clsx from 'clsx'
import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

import { ButtonColorType, ButtonSizeType } from './button.types'
import {
  buttonColors,
  buttonSizes,
  DEFAULT_BUTTON_COLOR,
  DEFAULT_BUTTON_SIZE,
} from './buttonStyles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColorType
  size?: ButtonSizeType
  disabled?: boolean
  fullWidth?: boolean
  onClick: () => void
  children: ReactNode
}

export const Button: FC<ButtonProps> = ({
  color = DEFAULT_BUTTON_COLOR,
  size = DEFAULT_BUTTON_SIZE,
  fullWidth,
  children,
  className,
  ...rest
}) => {
  const classNames = clsx(
    `btn-base ${buttonSizes[size]} ${buttonColors[color]}`,
    fullWidth ? 'w-full flex justify-center' : '',
    className
  )

  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  )
}
