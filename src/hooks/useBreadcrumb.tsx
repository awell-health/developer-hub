import { BreadcrumbType } from '../types/breadcrumb.types'
import { capitalizeFirstLetter } from '../utils/string'

export const useBreadcrumb = (pathName: string): BreadcrumbType => {
  const pathArray = pathName.split('/').filter((item) => item !== '')

  const breadcrumbItems = pathArray
    .map((breadcrumbItem) => {
      return {
        label: capitalizeFirstLetter(breadcrumbItem).replace(/-/g, ' '),
        href: `/${breadcrumbItem}`,
      }
    })
    .map((el, index) => {
      return {
        label: el.label,
        href: pathArray[index - 1]
          ? pathArray.slice(0, index + 1).join('/')
          : el.href,
      }
    })

  return breadcrumbItems
}
