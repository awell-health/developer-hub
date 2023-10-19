import { Extension } from '@/types/extenion.types'

const EXCLUDE_EXTENSIONS = ['wellinks', 'hello-world']
interface UseExtensions {
  marketplaceExtensions: Extension[]
  categories: Array<string>
}

export const useExtensions = (extensions: Extension[]): UseExtensions => {
  const categories = extensions
    .map((ext) => ext.category)
    .filter((ext) => ext !== 'Demo')
    .filter((value, index, array) => array.indexOf(value) === index)
    .sort()

  const marketplaceExtensions = extensions
    .filter((ext) => !EXCLUDE_EXTENSIONS.includes(ext.key))
    .sort(function (a, b) {
      const titleA = a.title.toUpperCase() // ignore upper and lowercase
      const titleB = b.title.toUpperCase() // ignore upper and lowercase

      if (titleA < titleB) {
        return -1 //titleA comes first
      }
      if (titleA > titleB) {
        return 1 // titleB comes first
      }
      return 0 // titles are equal
    })

  return {
    marketplaceExtensions,
    categories,
  }
}
