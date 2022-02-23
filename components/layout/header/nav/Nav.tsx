import Link from 'next/link'
import { useContext } from 'react'

import { menu } from '../../../../content/menu'
import { AppContext } from '../../../../contexts/app/AppContext'
import { DesktopMenu } from './DesktopMenu'
import { MobileMenu } from './MobileMenu'

export const Nav = () => {
  const { appState, setAppState } = useContext(AppContext)

  const toggleMobileMenu = () =>
    setAppState({ ...appState, isMobileMenuOpen: !appState.isMobileMenuOpen })

  return (
    <>
      <nav className="w-full px-4 sm:px-8 border-b border-gray-200">
        <div className="flex items-center justify-between mx-auto">
          <Link href="/">
            <a
              title="Nick"
              className="font-inter text-xl md:text-2xl text-pink-500 no-underline font-bold uppercase hover:text-yellow-500"
            >
              <span className="logo-effect">NCKHELL</span>
            </a>
          </Link>
          {/* Hamburger open */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className={`flex p-4 items-center md:hidden text-gray-500 focus:outline-none focus:text-gray-700 ${
              !appState.isMobileMenuOpen ? 'block' : 'hidden'
            }`}
          >
            <svg
              className="w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              height={20}
              width={20}
            >
              <g transform="matrix(0.8333333333333334,0,0,0.8333333333333334,0,0)">
                <circle cx={12} cy={12} r={9} style={{ fill: '#FAF77D' }} />
                <path
                  d="M21 7H3m18 5H3m18 5H3"
                  style={{
                    fill: 'none',
                    stroke: '#191919',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                  }}
                />
              </g>
            </svg>
          </button>
          {/* Hamburger closed */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className={`lg:flex p-4 items-center lg:hidden text-gray-500 focus:outline-none focus:text-gray-700 ${
              appState.isMobileMenuOpen ? 'block' : 'hidden'
            }`}
          >
            <svg
              className="w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              height={20}
              width={20}
            >
              <g transform="matrix(0.8333333333333334,0,0,0.8333333333333334,0,0)">
                <circle cx={12} cy={12} r={11} style={{ fill: '#FAF77D' }} />
                <path
                  d="m23.5.5-23 23m23 0L.5.5"
                  style={{
                    fill: 'none',
                    stroke: '#191919',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                  }}
                />
              </g>
            </svg>
          </button>
          <div className="hidden md:block md:flex links px-4 md:px-0 pb-8 md:pb-0">
            <DesktopMenu menu={menu} />
          </div>
        </div>
      </nav>
      <div
        className={`w-full px-4 sm:px-8 flex-grow ${
          appState.isMobileMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <MobileMenu menu={menu} />
      </div>
    </>
  )
}
