import React, {
  ReactElement,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import { AppContext } from '@/contexts/app/AppContext'

type TabProps = {
  label: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any
}

export type TabsProps = {
  children: ReactElement<TabProps> | Array<ReactElement<TabProps>>
  selectedTab?: string
  onChange?: (activeLabel: string) => void
  className?: string
}

export const Tabs = ({
  children,
  selectedTab,
  onChange,
  className = '',
}: TabsProps) => {
  const { setTableOfContents } = useContext(AppContext)
  const tabsRef = useRef<HTMLDivElement | null>(null)
  const childrenAsArray = useMemo(
    () => (Array.isArray(children) ? children : [children]),
    [children]
  )

  const firstTabLabel = childrenAsArray[0]?.props?.label as string

  const [activeTab, setActiveTab] = useState<string>(
    selectedTab ?? firstTabLabel
  )

  useEffect(() => {
    if (selectedTab) {
      setActiveTab(selectedTab)
    }
  }, [selectedTab])

  const onTabClick = (tabLabel: string) => {
    setActiveTab(tabLabel)
    onChange?.(tabLabel)
  }

  useEffect(() => {
    const contentRoot = document.getElementById('content-wrapper')
    if (!contentRoot) return

    const allHeadings = Array.from(
      contentRoot.querySelectorAll('h2[id], h3[id]')
    ) as Array<HTMLHeadingElement>

    const visibleHeadings = allHeadings.filter((heading) => {
      const container = heading.closest('.awell-tabs') as HTMLDivElement | null
      if (!container) return true
      return container === tabsRef.current
    })

    const tocArray = visibleHeadings.map((h) => ({
      title: h.textContent?.trim() || '',
      link: `#${h.id}`,
      level: h.tagName.toLowerCase() as 'h2' | 'h3',
    }))

    setTableOfContents('', tocArray)
  }, [activeTab, setTableOfContents])

  return (
    <div
      ref={tabsRef}
      className={`awell-tabs relative z-10 rounded-xl shadow-lg xl:ml-0 border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 ${className}`}
    >
      <div className="relative flex text-slate-500 dark:text-slate-400 text-sm leading-6 border-b border-slate-200 dark:border-slate-500/30">
        <ul className="flex">
          {childrenAsArray.map((child) => {
            const label = child.props.label as string
            const isActive = activeTab === label
            const baseClassName =
              'mt-2 flex-none text-slate-500 dark:text-slate-400 px-4 py-2 flex items-center cursor-pointer border-b-2 border-transparent'
            const activeClassName =
              'mt-2 flex-none text-sky-600 dark:text-sky-300 px-4 py-2 flex items-center cursor-pointer border-b-2 border-sky-600/70 dark:border-sky-300'

            return (
              <li
                key={label}
                className={isActive ? activeClassName : baseClassName}
                onClick={() => onTabClick(label)}
              >
                {label}
              </li>
            )
          })}
        </ul>
      </div>

      <div className="relative p-4">
        {childrenAsArray.map((child) => {
          if (child.props.label !== activeTab) return undefined
          return child
        })}
      </div>
    </div>
  )
}

export const Tab = ({ children }: TabProps) => {
  return <>{children}</>
}
