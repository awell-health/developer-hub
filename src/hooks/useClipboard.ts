import { useCallback, useEffect, useState } from 'react'

export const useClipboard = (text: string, notifyTimeout = 1500) => {
  const [copyStatus, setCopyStatus] = useState('inactive')
  const copy = useCallback(() => {
    navigator.clipboard.writeText(text).then(
      () => setCopyStatus('copied'),
      () => setCopyStatus('failed')
    )
  }, [text])

  useEffect(() => {
    if (copyStatus === 'inactive') {
      return
    }

    const timeoutId = setTimeout(() => setCopyStatus('inactive'), notifyTimeout)

    return () => clearTimeout(timeoutId)
  }, [copyStatus])

  return [copyStatus, copy]
}
