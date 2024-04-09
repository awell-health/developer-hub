export const stripMarkdownFences = (input: string): string => {
  const startSequence = '```markdown'
  const endSequence = '```'

  if (input.startsWith(startSequence)) {
    let stripped = input.slice(startSequence.length).trimStart()

    if (stripped.endsWith(endSequence)) {
      stripped = stripped.slice(0, -endSequence.length)
    }
    return stripped
  }

  return input
}
