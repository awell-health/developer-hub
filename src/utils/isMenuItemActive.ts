export const isMenuItemActive = (
  menuItemPath: string,
  slug?: string | string[]
) => {
  /** Hacky solution to have this as the homepage and make active links work */
  if (menuItemPath === '/docs/getting-started/welcome' && slug === '/') {
    return true
  }
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
