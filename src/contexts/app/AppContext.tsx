import React, { ReactNode, useState } from 'react'

type AppStateType = {
  isMobileMenuOpen: boolean
}

interface AppContextStateType {
  appState: AppStateType
  setAppState: (newAppState: AppStateType) => void
}

const initialState: AppStateType = {
  isMobileMenuOpen: false,
}

export const AppContext = React.createContext<AppContextStateType>({
  appState: initialState,
  setAppState: () => null,
})

interface AppProviderProps {
  children: ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [appState, setAppState] = useState<AppStateType>(initialState)

  return (
    <AppContext.Provider value={{ appState, setAppState }}>
      {children}
    </AppContext.Provider>
  )
}
