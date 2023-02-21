import { Space } from '@/types/space.types'

export const isMenuItemActive = (
  menuItemPath: string,
  pathName: string,
  slug?: string | string[]
) => {
  /** Active state for home page */
  if (menuItemPath === '/' && pathName !== '/') {
    return false
  }

  /** Hacky solution to have active link when viewing release page */
  if (
    /** Don't use includes() here as it caused a client error in production */
    menuItemPath ===
      `/${Space.AWELL_ORCHESTRATION}/developer-tools/changelog` &&
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
