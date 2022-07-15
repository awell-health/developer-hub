import Highlight, { defaultProps } from 'prism-react-renderer'
import { useEffect, useState } from 'react'

import { darkTheme } from '../../../config/prism'
import { arrayOfNumbersBasedOnRanges } from '../../../utils/array/arrayOfNumbersBasedOnRanges'
import { ExpandCollapseButton } from '../../Docs/atoms/Code/atoms/ExandCollapseButton'

export type CodeBlockProps = {
  fileName: string
  language: string
  highlightedRows?: Array<number[]>
  numberOfLinesPreview?: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any
}

export const CodeBlock = ({
  fileName,
  children,
  language,
  numberOfLinesPreview = 999,
  highlightedRows = [],
}: CodeBlockProps) => {
  const [code] = Array.isArray(children) ? children : [children]
  const [showExpandCollapseButton, setShowExpandeCollapseButton] =
    useState<boolean>(false)
  const [allHighlightedRows, setAllHighlightedRows] = useState<number[]>(
    arrayOfNumbersBasedOnRanges(highlightedRows)
  )
  const [showAll, setIsShowAll] = useState<boolean>(true)

  useEffect(() => {
    setAllHighlightedRows(arrayOfNumbersBasedOnRanges(highlightedRows))
    console.log(allHighlightedRows)
  }, [highlightedRows])

  const toggleShowAll = () => setIsShowAll(!showAll)

  useEffect(() => {
    const numberOfLines = code.split(/\r\n|\r|\n/).length

    if (numberOfLines > numberOfLinesPreview) {
      setShowExpandeCollapseButton(true)
      setIsShowAll(false)
    }
  }, [code])

  return (
    <div
      className={`${fileName} relative ${
        showExpandCollapseButton ? 'withCollapseExpandButton' : ''
      }`}
    >
      {/* @ts-expect-error not sure how to type */}
      <Highlight
        {...defaultProps}
        theme={darkTheme}
        code={children.trim()}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {showAll
              ? tokens.map((line, i) => (
                  <div
                    key={i}
                    {...getLineProps({ line, key: i })}
                    className={`CodeLine ${
                      allHighlightedRows.includes(i + 1)
                        ? 'HighlightedCodeLine'
                        : ''
                    }`}
                  >
                    <span className="CodeLineNumber">{i + 1}</span>
                    <span className="CodeLineContent">
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </span>
                  </div>
                ))
              : tokens.slice(0, numberOfLinesPreview).map((line, i) => (
                  <div
                    key={i}
                    {...getLineProps({ line, key: i })}
                    className={`CodeLine ${
                      allHighlightedRows.includes(i + 1)
                        ? 'HighlightedCodeLine'
                        : ''
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
      {showExpandCollapseButton && (
        <ExpandCollapseButton
          onClick={toggleShowAll}
          expanded={showAll ? true : false}
        />
      )}
    </div>
  )
}
