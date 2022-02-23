import { InputSizeType } from './input.types'

export const DEFAULT_INPUT_SIZE: InputSizeType = 'base'

/** BASE STYLES */
export const labelStyles = 'block mb-2 text-sm font-medium text-gray-900'
export const disabledStyles = 'bg-gray-100 cursor-not-allowed'

/** ERROR STYLES */
export const labelHasErrorStyles = 'text-red-700'
export const inputHasErrorStyles =
  'bg-red-50 border-red-500 text-red-900 placeholder-red-700'
export const errorDetailsStyles = 'mt-2 text-sm text-red-600 dark:text-red-500'

export const inputSizesStyles: { [key in InputSizeType]: string } = {
  sm: 'p-2 border sm:text-xs',
  base: 'p-2.5 text-sm',
  lg: 'p-4 sm:text-md',
}
