import { useClipboard } from '../../../hooks/useClipboard'

interface CopyButtonProps {
  content: string
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

export const CopyButton = ({ content }: CopyButtonProps) => {
  const [copyUrlStatus, copyUrl] = useClipboard(content)

  let buttonText = 'Copy'

  if (copyUrlStatus === 'copied') {
    buttonText = 'Copied'
  } else if (copyUrlStatus === 'failed') {
    buttonText = 'Copy failed!'
  }

  return (
    <button
      type="button"
      onClick={copyUrl}
      className="inline-flex items-center text-xs bg-slate-200 text-slate-600 px-2 py-1 rounded-lg font-semibold hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600"
      data-track-heap="copy-code"
    >
      <span className="mr-1">
        {copyUrlStatus === 'copied' ? <CopiedIcon /> : <CopyIcon />}
      </span>
      {buttonText}
    </button>
  )
}
