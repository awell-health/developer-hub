// import { useEffect, useState } from 'react'

import { Extension } from '@/types/extenion.types'

import { extensions } from './temp'

interface UseExtensionsMarketplace {
  // loading: boolean
  extensions: Array<Extension>
}

// const ENDPOINT = process.env.EXTENSIONS_API_ENDPOINT ?? ''

export const useExtensionsMarketplace = (): UseExtensionsMarketplace => {
  // const [loading, setLoading] = useState(false)
  // const [extensions, setExtensions] = useState<Array<Extension>>([])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       fetch('https://extensions.development.awellhealth.com/', {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       })
  //         .then((response) => response.json())
  //         .then((data) => {
  //           const typedData = data as Extension[]
  //           console.log(typedData)
  //           setExtensions(typedData)
  //           setLoading(false)
  //         })
  //     } catch (error) {
  //       console.log('error', error)
  //     }
  //   }

  //   fetchData()
  // }, [])

  return {
    // loading,
    extensions: extensions.filter((ext) => ext.category !== 'Demo'),
  }
}
