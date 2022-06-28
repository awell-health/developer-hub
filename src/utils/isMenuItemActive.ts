import { awellOrchestrationHomePage } from '../config/routes'

export const isMenuItemActive = (
  menuItemPath: string,
  pathName: string,
  slug?: string | string[]
) => {
  /** Active state for home page */
  if (menuItemPath === '/' && pathName !== '/') {
    return false
  }

  /** Hacky solution to have this as the homepage and make active links work */
  if (
    menuItemPath === awellOrchestrationHomePage &&
    pathName.includes('awell-orchestration')
  ) {
    return true
  }

  /** Hacky solution to have active link when viewing release page */
  if (
    menuItemPath === 'awell-orchestration/api-reference/overview/changelog' &&
    pathName.includes('changelog')
  ) {
    return true
  }

  if (pathName === menuItemPath) return true

  if (!slug) return false

  /**
   * Returns 'welcome' if path is 'docs/getting-started/welcome'
   */
  const lastUrlParam = menuItemPath.split('/').splice(-1)[0]

  if (Array.isArray(slug)) {
    return slug.includes(lastUrlParam)
  }

  return slug.includes(lastUrlParam)
}
