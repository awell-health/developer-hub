import { FC, ReactNode } from 'react'

export const Caret = () => {
  return (
    <span className="caret animate-caret inline-block h-[15px] w-[8px] translate-y-[2px] translate-x-[2px] transform rounded-[1px] bg-blue-600 dark:bg-sky-500" />
  )
}

type WithCaretProps = {
  Component: string
  children?: ReactNode
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} & any

export const WithCaret: FC<WithCaretProps> = ({
  Component,
  children,
  ...rest
}) => {
  if (Component === 'code' && rest?.inline) {
    // The code component mistakenly receives a prop `inline: true` which
    // the DOM will complain about unless it's converted to a string.
    rest = {
      ...rest,
      inline: 'true',
    }
  }

  return (
    <Component {...rest} className="markdown-node">
      {children}
      <Caret />
    </Component>
  )
}
