import { FileSectionReference } from '../types'

export const getUniqueReferences = (refs: FileSectionReference[]) => {
  return [
    ...new Map(
      refs.filter(Boolean).map((item) => [item.file['title'], item])
    ).values(),
  ]
}
