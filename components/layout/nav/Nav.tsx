import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'

import { menu } from '../../../config/menu'
import { AppContext } from '../../../contexts/app/AppContext'
import awellLogo from '../../../public/awell-full-logo.svg'
import { DesktopMenu } from './DesktopMenu'
import { MobileMenu } from './MobileMenu'
import { Submenu } from './Submenu'

export const Nav = () => {
  const { appState, setAppState } = useContext(AppContext)

  const toggleMobileMenu = () =>
    setAppState({ ...appState, isMobileMenuOpen: !appState.isMobileMenuOpen })

  return (
    <>
      <nav className="fixed w-full md:w-11/12 lg:w-10/12 left-1/2 transform -translate-x-1/2 py-5 px-4 sm:px-8 mx-auto bg-white rounded-b-2xl drop-shadow-md">
        <div className="flex items-center justify-between mx-auto">
          <Link href="/">
            <a
              title="Awell Health"
              className="block max-w-full	h-auto w-32 leading-none"
            >
              <Image src={awellLogo} alt="Awell Health" />
            </a>
          </Link>
          {/* Hamburger to open mobile menu */}
          <div id="open-mobile-menu" className="lg:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className={`flex p-4 items-center text-gray-800 focus:outline-none focus:text-blue-700 ${
                !appState.isMobileMenuOpen ? 'block' : 'hidden'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          {/* Close mobile menu */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className={`p-4 items-center lg:hidden text-gray-800 focus:outline-none focus:text-blue-700 ${
              appState.isMobileMenuOpen ? 'block' : 'hidden'
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="hidden lg:block lg:flex links px-4 md:px-0 pb-8 md:pb-0">
            <DesktopMenu menu={menu} />
          </div>
          <div className="hidden lg:block">
            <Submenu />
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
