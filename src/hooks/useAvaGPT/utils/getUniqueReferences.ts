import { ReferenceType } from '../types'

export const getUniqueReferences = (refs: ReferenceType[]) => {
  return [
    ...new Map(
      refs.filter(Boolean).map((item) => [item['title'], item])
    ).values(),
  ]
}
