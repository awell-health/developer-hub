import Highlight, { defaultProps } from 'prism-react-renderer'
import { useContext, useEffect, useState } from 'react'

import { darkTheme, lightTheme } from '../../../../config/prism'
import { ThemeContext } from '../../../../hooks/useTheme'
import { CopyButton } from '../../../Button/variants'
import { ExpandCollapseButton } from './atoms/ExandCollapseButton'

interface CodeProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any
  className: string
  numberOfLinesPreview?: number
}

export const Code = ({
  children,
  className,
  numberOfLinesPreview = 15,
}: CodeProps) => {
  const { theme } = useContext(ThemeContext)
  const [showExpandCollapseButton, setShowExpandeCollapseButton] =
    useState<boolean>(false)
  const [showAll, setIsShowAll] = useState<boolean>(true)
  const language = className.replace(/language-/, '')

  const [code] = Array.isArray(children) ? children : [children]

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
      className={`relative ${
        showExpandCollapseButton ? 'withCollapseExpandButton' : ''
      }`}
    >
      <div className="absolute right-4 top-4">
        <CopyButton content={code} />
      </div>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <Highlight
        {...defaultProps}
        theme={theme === 'light' ? lightTheme : darkTheme}
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
                    className="CodeLine"
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
      {showExpandCollapseButton && (
        <ExpandCollapseButton
          onClick={toggleShowAll}
          expanded={showAll ? true : false}
        />
      )}
    </div>
  )
}
