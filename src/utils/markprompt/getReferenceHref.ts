export const getReferenceHref = (path: string): string => {
  const isDevHubDocumentation = path.startsWith('/content')
  const isExtensionDocumentation = path.startsWith('/extensions')

  const pathWithoutExtension = path.replace(/\.[^/.]+$/, '')

  if (isDevHubDocumentation) {
    return pathWithoutExtension.replace('/content', '')
  }

  if (isExtensionDocumentation) {
    if (pathWithoutExtension === '/extensions/marketplace')
      return '/awell-extensions/marketplace'

    return pathWithoutExtension
      .replace(/[^\/]*$/, '') // Remove last segment from the URL
      .replace('/extensions', '/awell-extensions/marketplace')
  }

  return 'pathWithoutExtension'
}
