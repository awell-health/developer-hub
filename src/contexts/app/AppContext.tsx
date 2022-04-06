import { useRouter } from 'next/router'
import React, { ReactNode, useCallback, useEffect, useState } from 'react'

interface AppContextStateType {
  isMobileSideMenuOpen: boolean
  isMobileMainMenuOpen: boolean
  toggleMobileMainMenu: () => void
  toggleMobileSideMenu: () => void
}

const initialState: AppContextStateType = {
  isMobileSideMenuOpen: false,
  isMobileMainMenuOpen: false,
  toggleMobileMainMenu: () => null,
  toggleMobileSideMenu: () => null,
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
  const [isMobileMainMenuOpen, setIsMainMobileMenuOpen] = useState<boolean>(
    initialState.isMobileMainMenuOpen
  )

  const toggleMobileSideMenu = () =>
    setIsSideMobileMenuOpen(!isMobileSideMenuOpen)

  const toggleMobileMainMenu = () =>
    setIsMainMobileMenuOpen(!isMobileMainMenuOpen)

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

  return (
    <AppContext.Provider
      value={{
        isMobileSideMenuOpen,
        toggleMobileSideMenu,
        toggleMobileMainMenu,
        isMobileMainMenuOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
