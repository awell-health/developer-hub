import Highlight, { defaultProps } from 'prism-react-renderer'
import { useContext } from 'react'

import { darkTheme, lightTheme } from '../../../../config/prism'
import { AppContext } from '../../../../contexts/app/AppContext'

interface CodeProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any
  className: string
}

export const Code = ({ children, className }: CodeProps) => {
  const language = className.replace(/language-/, '')
  const { theme } = useContext(AppContext)
  console.log(theme)

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    <Highlight
      {...defaultProps}
      theme={theme === 'light' ? lightTheme : darkTheme}
      code={children.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div
              key={i}
              {...getLineProps({ line, key: i })}
              className="CodeLine"
            >
              <span className="CodeLineNumber">{i + 1}</span>
              <span className="CodeLineContent">
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </span>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
