import { useRouter } from 'next/router'
import React, { ReactNode, useCallback, useEffect, useState } from 'react'
import slugify from 'slugify'

import { SpaceType } from '@/types/space.types'

import { type MenuType } from '../../types/menu.types'
import { TableOfContentsType } from '../../types/toc.types'

interface AppContextStateType {
  menu: MenuType
  space: SpaceType
  isMobileSideMenuOpen: boolean
  isMobileMainMenuOpen: boolean
  setMenu: (menu: MenuType) => void
  toggleMobileMainMenu: () => void
  toggleMobileSideMenu: () => void
  tableOfContents: TableOfContentsType | null
  setTableOfContents: (
    content: string,
    tocArray?: { title: string; link: string; level: 'h2' | 'h3' }[]
  ) => void
}

const initialState: AppContextStateType = {
  menu: [],
  space: 'awell-orchestration',
  isMobileSideMenuOpen: false,
  isMobileMainMenuOpen: false,
  setMenu: () => null,
  toggleMobileMainMenu: () => null,
  toggleMobileSideMenu: () => null,
  tableOfContents: null,
  setTableOfContents: () => null,
}

export const AppContext = React.createContext<AppContextStateType>(initialState)

interface AppProviderProps {
  children: ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const router = useRouter()

  const [isMobileSideMenuOpen, setIsSideMobileMenuOpen] = useState<boolean>(
    initialState.isMobileSideMenuOpen
  )
  const [toc, setToc] = useState<TableOfContentsType | null>(
    initialState.tableOfContents
  )
  const [isMobileMainMenuOpen, setIsMainMobileMenuOpen] = useState<boolean>(
    initialState.isMobileMainMenuOpen
  )
  const [space, setSpace] = useState(initialState.space)

  const [menu, setNewMenu] = useState<MenuType>(initialState.menu)

  const toggleMobileSideMenu = () =>
    setIsSideMobileMenuOpen(!isMobileSideMenuOpen)

  const toggleMobileMainMenu = () =>
    setIsMainMobileMenuOpen(!isMobileMainMenuOpen)

  const setMenu = (menu: MenuType) => setNewMenu(menu)

  const setTableOfContents = (
    content: string,
    tocArray?: { title: string; link: string; level: 'h2' | 'h3' }[]
  ) => {
    if (tocArray) {
      setToc(tocArray)
    } else {
      const regexp = new RegExp(/^(### |## )(.*)\n/, 'gm')
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      const headings = [...content.matchAll(regexp)]

      let tableOfContents: TableOfContentsType = []

      if (headings.length) {
        tableOfContents = headings.map((heading) => {
          const headingText = heading[2].trim()
          const headingLevel = heading[1].trim() === '##' ? 'h2' : 'h3'
          const headingLink = slugify(headingText, {
            lower: true,
            strict: true,
          })

          return {
            title: headingText,
            link: `#${headingLink}`,
            level: headingLevel,
          }
        })

        setToc(tableOfContents)
      } else {
        setToc(null)
      }
    }
  }

  const hideMenu = useCallback(() => {
    setIsSideMobileMenuOpen(false)
    setIsMainMobileMenuOpen(false)
  }, [setIsSideMobileMenuOpen, setIsMainMobileMenuOpen])

  useEffect(() => {
    // subscribe
    router.events.on('routeChangeStart', hideMenu)

    // unsubscribe
    return () => router.events.off('routeChangeStart', hideMenu)
  }, [hideMenu, router.events])

  useEffect(() => {
    if (router.asPath.includes('awell-orchestration')) {
      setSpace('awell-orchestration')
    } else {
      setSpace('awell-score')
    }
  }, [router.asPath])

  return (
    <AppContext.Provider
      value={{
        menu,
        setMenu,
        space,
        isMobileSideMenuOpen,
        toggleMobileSideMenu,
        toggleMobileMainMenu,
        isMobileMainMenuOpen,
        tableOfContents: toc,
        setTableOfContents,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
