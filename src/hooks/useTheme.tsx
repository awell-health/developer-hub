import { createContext, ReactNode, useState } from 'react'

interface ThemeContextStateType {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

const initialState: ThemeContextStateType = {
  isDarkMode: false,
  toggleDarkMode: () => null,
}

export const ThemeContext = createContext<ThemeContextStateType>(initialState)

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Uncomment to re-install dark theme

  // useEffect(() => {
  //   // Check local storage or system preference and set initial mode
  //   const prefersDarkMode = window.matchMedia(
  //     '(prefers-color-scheme: dark)'
  //   ).matches
  //   const savedMode = localStorage.getItem('theme')

  //   setIsDarkMode(
  //     savedMode === 'dark' || (savedMode === null && prefersDarkMode)
  //   )
  // }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
