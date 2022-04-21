import { capitalizeFirstLetter } from './string'

export const beautifySnakeCase = (string: string): string =>
  capitalizeFirstLetter(string.split('_').join(' '))
