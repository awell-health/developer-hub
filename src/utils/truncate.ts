// Shorten a string to less than maxLen characters without truncating words.
export const truncate = (str: string, maxLen: number) => {
  if (str.length <= maxLen) return str
  return str.substr(0, str.lastIndexOf(' ', maxLen))
}
