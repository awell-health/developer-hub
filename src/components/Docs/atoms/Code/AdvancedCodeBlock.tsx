import { isNil } from 'lodash'
import { Highlight } from 'prism-react-renderer'
import { useEffect, useState } from 'react'
import { arrayOfNumbersBasedOnRanges } from 'src/utils/array/arrayOfNumbersBasedOnRanges'

import { darkTheme } from '../../../../config/prism'
import { CopyButton } from '../../../Button/variants'
import { CodeTab } from '../../../CodeTabs/atoms/CodeTab'
import { ExpandCollapseButton } from './atoms/ExandCollapseButton'

interface CodeProps {
  children: string
  className?: string
  fileName?: string
  numberOfLinesPreview?: number
  highlightedRows?: Array<number[]>
}

export const AdvancedCodeBlock = ({
  children,
  className,
  fileName,
  numberOfLinesPreview = 15,
  highlightedRows = [],
}: CodeProps) => {
  const [showExpandCollapseButton, setShowExpandeCollapseButton] =
    useState<boolean>(false)
  const [showAll, setIsShowAll] = useState<boolean>(true)

  const language = !isNil(className) ? className.replace(/language-/, '') : ''
  const code = children

  const allHighlightedRows = arrayOfNumbersBasedOnRanges(highlightedRows)

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
      className={`code-block relative z-10 col-span-3 bg-slate-800 rounded-xl shadow-lg xl:ml-0 dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10`}
    >
      <div className="relative flex text-slate-400 text-xs leading-6">
        <ul className="flex">
          <CodeTab
            isActive={true}
            label={fileName ? fileName : language}
            onClick={() => true}
          />
        </ul>
        <div className="flex-auto flex pt-2 rounded-tr-xl overflow-hidden">
          <div className="flex-auto -mr-px bg-slate-700/50 border border-slate-500/30 rounded-tl" />
        </div>
        <div className="absolute top-2 right-0 h-8 flex items-center pr-4">
          <div className="relative flex -mr-2">
            <CopyButton content={code} />
          </div>
        </div>
      </div>
      <div
        className={`relative ${
          showExpandCollapseButton ? 'withCollapseExpandButton' : ''
        }`}
      >
        <Highlight theme={darkTheme} code={code.trim()} language={language}>
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
                      <span className="CodeLineNumber">
                        {i + 1 < 10 ? `0${i + 1}` : i + 1}
                      </span>
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
                      <span className="CodeLineNumber">
                        {i + 1 < 10 ? `0${i + 1}` : i + 1}
                      </span>
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
    </div>
  )
}
