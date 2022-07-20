import React, { ReactElement, useEffect, useState } from 'react'

import { CopyButton } from '../Button/variants'
import { CodeTab } from './atoms'
import { type CodeBlockProps } from './atoms/CodeBlock'

interface CodeTabsProps {
  children: ReactElement<CodeBlockProps> | Array<ReactElement<CodeBlockProps>>
  selectedTab?: string
}

export const CodeTabs = ({ selectedTab, children }: CodeTabsProps) => {
  const [activeTab, setActiveTab] = useState(
    Array.isArray(children)
      ? children[0].props.fileName
      : children.props.fileName
  )

  useEffect(() => {
    if (selectedTab) {
      setActiveTab(selectedTab)
    }
  }, [selectedTab])

  const childrenAsArray = Array.isArray(children) ? children : [children]

  const onTabClick = (tabLabel: string) => {
    setActiveTab(tabLabel)
  }

  return (
    <div className="code-block relative z-10 col-span-3 bg-slate-800 rounded-xl shadow-lg xl:ml-0 dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10">
      <div className="relative flex text-slate-400 text-xs leading-6">
        <ul className="flex">
          {childrenAsArray.map((child) => {
            const label = child.props.fileName

            return (
              <CodeTab
                isActive={activeTab === label}
                key={label}
                label={label}
                onClick={onTabClick}
              />
            )
          })}
        </ul>
        <div className="flex-auto flex pt-2 rounded-tr-xl overflow-hidden">
          <div className="flex-auto -mr-px bg-slate-700/50 border border-slate-500/30 rounded-tl" />
        </div>
        <div className="absolute top-2 right-0 h-8 flex items-center pr-4">
          <div className="relative flex -mr-2">
            <CopyButton
              content={
                childrenAsArray.find(
                  (child) => child.props.fileName == activeTab
                )?.props.children || ''
              }
            />
          </div>
        </div>
      </div>
      <div className="relative">
        {childrenAsArray.map((child) => {
          if (child.props.fileName !== activeTab) return undefined
          return child
        })}
      </div>
    </div>
  )
}
