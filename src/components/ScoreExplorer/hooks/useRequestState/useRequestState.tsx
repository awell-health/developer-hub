import { useEffect, useState } from 'react'

import { type RequestType } from '../../../../types/restExplorer.types'

interface UseRequestStateHook {
  requestState: RequestType
  setRequestState: (newRequestState: RequestType) => void
}

export const useRequestState = (): UseRequestStateHook => {
  const [requestState, setRequestState] = useState<RequestType>({})

  useEffect(() => {
    const requestState = localStorage.getItem('requestState')
    if (requestState) {
      const requestStateObj = JSON.parse(requestState)
      setRequestState(requestStateObj)
    }
  }, [])

  const changeRequestState = (newRequestState: RequestType) => {
    localStorage.setItem('requestState', JSON.stringify(newRequestState))
    setRequestState(newRequestState)
  }

  return {
    requestState,
    setRequestState: changeRequestState,
  }
}
