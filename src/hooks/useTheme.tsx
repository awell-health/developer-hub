import { useState } from 'react'

type ThemeType = 'light' | 'dark'

const DEFAULT_THEME: ThemeType = 'light'

export const useTheme = (): {
  theme: ThemeType
  changeTheme: () => void
} => {
  const [theme, setTheme] = useState<ThemeType>(DEFAULT_THEME)

  function changeTheme() {
    if (theme === 'light') {
      document.querySelector('html')?.classList?.add?.('dark')
      setTheme('dark')
    } else {
      document.querySelector('html')?.classList?.remove?.('dark')
      setTheme('light')
    }
  }

  return { theme, changeTheme }
}
