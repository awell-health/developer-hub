import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import {
  postmanMacCollectionLink,
  postmanWebCollectionLink,
} from '../../../config/postmanLinks'

interface Props {
  postmanUrl?: string
}

const PostmanButton = ({ postmanUrl }: { postmanUrl: string }) => {
  return (
    <Link href={postmanUrl}>
      <a
        title="Open in postman"
        target="_blank"
        className="inline-flex items-center px-4 py-2 text-xs font-semibold bg-[#ff6c37] text-white border border-orange-500 rounded-lg focus:outline-none hover:bg-orange-600 focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-orange-300"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          preserveAspectRatio="none"
          viewBox="0 0 330 330"
          focusable="false"
          className="w-3 h-3 mr-2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M37.728,328.12c2.266,1.256,4.77,1.88,7.272,1.88c2.763,0,5.522-0.763,7.95-2.28l240-149.999  c4.386-2.741,7.05-7.548,7.05-12.72c0-5.172-2.664-9.979-7.05-12.72L52.95,2.28c-4.625-2.891-10.453-3.043-15.222-0.4  C32.959,4.524,30,9.547,30,15v300C30,320.453,32.959,325.476,37.728,328.12z" />
        </svg>
        Open in Postman
      </a>
    </Link>
  )
}

const PostmanSelect = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  const useClickOutside = (ref: React.MutableRefObject<HTMLElement | null>) => {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      const handleClickOutside = (event: MouseEvent) => {
        //@ts-expect-error not correctly typed yet
        if (ref.current && !ref.current.contains(event.target)) {
          setIsOpen(false)
        }
      }
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }

  useClickOutside(ref)

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center px-4 py-2 text-xs font-semibold bg-[#ff6c37] text-white border border-orange-500 rounded-lg focus:outline-none hover:bg-orange-600 focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-orange-300"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            preserveAspectRatio="none"
            viewBox="0 0 330 330"
            focusable="false"
            className="w-3 h-3 mr-2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M37.728,328.12c2.266,1.256,4.77,1.88,7.272,1.88c2.763,0,5.522-0.763,7.95-2.28l240-149.999  c4.386-2.741,7.05-7.548,7.05-12.72c0-5.172-2.664-9.979-7.05-12.72L52.95,2.28c-4.625-2.891-10.453-3.043-15.222-0.4  C32.959,4.524,30,9.547,30,15v300C30,320.453,32.959,325.476,37.728,328.12z" />
          </svg>
          Run in Postman
          {/* <!-- Heroicon name: solid/chevron-down --> */}
        </button>
      </div>

      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } origin-top-right absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        <div className="py-1" role="none">
          <Link href={postmanWebCollectionLink}>
            <a
              target="_blank"
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-slate-100"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-0"
            >
              Open in Postman Web
            </a>
          </Link>
          <Link href={postmanMacCollectionLink}>
            <a
              target="_blank"
              className="text-gray-700 block px-4 py-2 text-sm  hover:bg-slate-100"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-1"
            >
              Open in Postman for Mac/Windows
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export const OpenInPostman = ({ postmanUrl }: Props) => {
  if (postmanUrl) {
    return <PostmanButton postmanUrl={postmanUrl} />
  }

  return <PostmanSelect />
}
