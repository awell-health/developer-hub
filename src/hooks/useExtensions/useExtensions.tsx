import { isEmpty, isNil, sampleSize } from 'lodash'

import { Extension } from '@/types/extenion.types'

interface UseExtensions {
  getExtension: (extensions: Extension[], key: string) => Extension | null
  getCategories: (extensions: Extension[]) => Array<string>
  getRandomExtensions: (
    extensions: Extension[],
    n: number,
    exclude?: string
  ) => Array<Extension>
}

export const useExtensions = (): UseExtensions => {
  const getExtension = (extensions: Extension[], key: string) =>
    extensions.find((ext) => ext.key === key) ?? null

  const getRandomExtensions = (
    extensions: Extension[],
    n: number,
    exclude?: string
  ) => {
    return sampleSize(
      extensions
        .filter((ext) => ext.category !== 'Demo')
        .filter((ext) => {
          if (isEmpty(exclude) || isNil(exclude)) {
            return true
          }

          return ext.key !== exclude
        }),
      n
    )
  }

  const getCategories = (extensions: Extension[]) => {
    return extensions
      .map((ext) => ext.category)
      .filter((ext) => ext !== 'Demo')
      .filter((value, index, array) => array.indexOf(value) === index)
      .sort()
  }

  return {
    getCategories,
    getRandomExtensions,
    getExtension,
  }
}
