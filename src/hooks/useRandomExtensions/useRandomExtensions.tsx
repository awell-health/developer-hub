import { isEmpty, isNil, sampleSize } from 'lodash'
import { useEffect, useState } from 'react'

import { Extension } from '@/types/extenion.types'

const EXCLUDE_EXTENSIONS = [
  'wellinks',
  'hello-world',
  'nexuzhealth',
  'experimental',
]

const ENDPOINT = process.env.NEXT_PUBLIC_EXTENSIONS_API_ENDPOINT ?? ''

interface UseRandomExtensions {
  randomExtensions: Extension[]
  loading: boolean
}

export const useRandomExtensions = (
  n: number,
  exclude?: string
): UseRandomExtensions => {
  const [extensions, setExtensions] = useState<Array<Extension>>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      try {
        fetch(ENDPOINT, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => response.json())
          .then((data) => {
            const extensions = data as Extension[]

            const randomExtensions = sampleSize(
              extensions
                .filter((ext) => ext.category !== 'Demo')
                .filter((ext) => !EXCLUDE_EXTENSIONS.includes(ext.key))
                .filter((ext) => {
                  if (isEmpty(exclude) || isNil(exclude)) {
                    return true
                  }

                  return ext.key !== exclude
                }),
              n
            )

            setExtensions(randomExtensions)
            setLoading(false)
          })
      } catch (error) {
        setLoading(false)
        console.log('error', error)
      }
    }

    fetchData()
  }, [exclude, n])

  return {
    randomExtensions: extensions,
    loading,
  }
}
