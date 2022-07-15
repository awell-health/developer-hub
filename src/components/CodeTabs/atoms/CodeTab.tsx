interface CodeTabProps {
  label: string
  onClick: (tabLabel: string) => void
  isActive: boolean
}

export const CodeTab = ({ label, onClick, isActive }: CodeTabProps) => {
  let className =
    'mt-2 flex-none border-b border-slate-500/30 text-slate-500 px-4 py-1 flex items-center'

  if (isActive) {
    className =
      'mt-2 flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center'
  }

  return (
    <li
      className={`cursor-pointer ${className}`}
      onClick={() => onClick(label)}
    >
      {label}
    </li>
  )
}
