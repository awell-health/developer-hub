import Highlight, { defaultProps } from 'prism-react-renderer'

import { darkTheme } from '../../../config/prism'

export type CodeBlockProps = {
  fileName: string
  code: string
  language: string
  highlightedRows?: number[]
}

export const CodeBlock = ({
  fileName,
  code,
  language,
  highlightedRows = [],
}: CodeBlockProps) => {
  return (
    // @ts-expect-error not sure how to fix the types
    <Highlight
      {...defaultProps}
      theme={darkTheme}
      code={code.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre id={fileName} className={className} style={style}>
          {tokens.map((line, i) => (
            <div
              key={i}
              {...getLineProps({ line, key: i })}
              className={`CodeLine ${
                highlightedRows.includes(i + 1) ? 'HighlightedCodeLine' : ''
              }`}
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
