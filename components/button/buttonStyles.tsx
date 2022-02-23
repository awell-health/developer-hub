import {
  ButtonColorType,
  ButtonShadowDirectionType,
  ButtonSizeType,
} from './button.types'

export const DEFAULT_BUTTON_SIZE: ButtonSizeType = 'base'
export const DEFAULT_BUTTON_COLOR: ButtonColorType = 'white'
export const DEFAULT_SHADOW_DIRECTION: ButtonShadowDirectionType = 'ltr'

export const buttonSizes: { [key in ButtonSizeType]: string } = {
  xs: 'py-2 px-3 text-xs',
  sm: 'py-2 px-3 text-sm',
  base: 'px-5 py-2.5 text-sm',
  lg: 'py-3 px-5 text-base',
  xl: 'px-6 py-3.5 text-base',
}

export const buttonColors: { [key in ButtonColorType]: string } = {
  amber: 'bg-amber-100',
  white: 'bg-white',
  purple: 'bg-purple-200',
  emerald: 'bg-emerald-200',
  pink: 'bg-pink-200',
  blue: 'bg-blue-100',
  lime: 'bg-lime-100',
  slate: 'bg-slate-100',
}
