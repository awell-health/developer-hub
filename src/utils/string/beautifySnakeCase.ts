import { capitalizeFirstLetter } from '.'

export const beautifySnakeCase = (string: string): string =>
  capitalizeFirstLetter(string.split('_').join(' '))
