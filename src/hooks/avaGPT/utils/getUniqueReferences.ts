import { type FileSectionReference } from '@markprompt/core'

export const getUniqueReferences = (refs: FileSectionReference[]) => {
  return [
    ...new Map(
      refs.filter(Boolean).map((item) => [item.file['title'], item])
    ).values(),
  ]
}
