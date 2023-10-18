import { Extension } from '@/types/extenion.types'

interface UseExtension {
  extension: Extension | null
}

export const useExtension = ({
  extensions,
  key,
}: {
  extensions: Extension[]
  key: string
}): UseExtension => {
  return {
    extension: extensions.find((ext) => ext.key === key) ?? null,
  }
}
