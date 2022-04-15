import { useEffect, useState } from 'react'

type CopiedValue = string | null
type CopyFn = (text: string) => Promise<boolean> // Return success
type CopyStatus = 'inactive' | 'copied' | 'failed'

export const useClipboard = (): {
  copiedText: CopiedValue
  copyFn: CopyFn
  copyStatus: CopyStatus
} => {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null)
  const [copyStatus, setCopyStatus] = useState<CopyStatus>('inactive')
  const TIMEOUT = 1500

  const copy: CopyFn = async (text) => {
    if (!navigator?.clipboard) {
      return false
    }

    // Try to save to clipboard then save it in the state if worked
    try {
      await navigator.clipboard.writeText(text)
      setCopyStatus('copied')
      setCopiedText(text)
      return true
    } catch (error) {
      setCopyStatus('failed')
      setCopiedText(null)
      return false
    }
  }

  useEffect(() => {
    if (copyStatus === 'inactive') {
      return
    }

    const timeoutId = setTimeout(() => setCopyStatus('inactive'), TIMEOUT)

    // eslint-disable-next-line consistent-return
    return () => clearTimeout(timeoutId)
  }, [copyStatus])

  return { copiedText, copyFn: copy, copyStatus }
}
