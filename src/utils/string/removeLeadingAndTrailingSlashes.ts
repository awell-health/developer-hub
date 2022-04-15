export const removeLeadingAndTrailingSlashes = (str: string) =>
  str.replace(/^\/|\/$/g, '')
