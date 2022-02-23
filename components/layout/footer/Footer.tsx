import { ReactNode, useContext } from 'react'

import { AppContext } from '../../../contexts/app/AppContext'

interface FooterProps {
  children?: ReactNode
}

export const Footer = ({ children }: FooterProps) => {
  const { appState } = useContext(AppContext)

  console.log(appState)

  return <footer>{children}</footer>
}
