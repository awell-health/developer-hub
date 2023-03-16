import { Extension } from '@/types/extenion.types'

import { useExtensions } from '../useExtensions'

interface UseExtension {
  loading: boolean
  extension: Extension | null
}

export const useExtension = ({ key }: { key: string }): UseExtension => {
  const { loading, extensions } = useExtensions()

  return {
    loading,
    extension: extensions.find((ext) => ext.key === key) ?? null,
  }
}
