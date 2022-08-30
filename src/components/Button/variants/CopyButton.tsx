import { useClipboard } from '../../../hooks/useClipboard'

interface CopyButtonProps {
  content: string
  copyText?: string
  copiedText?: string
  copyFailedText?: string
}

const CopiedIcon = () => (
  <svg
    className="w-3 h-3"
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
)

const CopyIcon = () => (
  <svg
    className="w-3 h-3"
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
  </svg>
)

export const CopyButton = ({
  content,
  copiedText = 'Copied',
  copyFailedText = 'Copy failed!',
  copyText = 'Copy',
}: CopyButtonProps) => {
  const { copyFn, copyStatus } = useClipboard()

  let buttonText = copyText

  if (copyStatus === 'copied') {
    buttonText = copiedText
  } else if (copyStatus === 'failed') {
    buttonText = copyFailedText
  }

  return (
    <button
      type="button"
      onClick={() => copyFn(content)}
      className="inline-flex items-center text-xs text-slate-400 px-2 py-1 rounded-lg font-semibold"
      data-track-heap="copy-code"
    >
      <span className="mr-1">
        {copyStatus === 'copied' ? <CopiedIcon /> : <CopyIcon />}
      </span>
      {buttonText}
    </button>
  )
}
