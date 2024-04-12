import { Markprompt, openMarkprompt } from '@markprompt/react'
import Link from 'next/link'
import { FC, useEffect } from 'react'

import { getReferenceHref } from '@/utils/markprompt'

export const SearchButton: FC = () => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (
        (event.key === 'k' && event.ctrlKey) ||
        (event.key === 'k' && event.metaKey)
      ) {
        event.preventDefault()
        openMarkprompt()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div data-heap="open-search-bar">
      <Markprompt
        projectKey={process.env.NEXT_PUBLIC_MARKPROMPT_TOKEN ?? ''}
        defaultView="search"
        branding={{ show: false }}
        chat={{
          enabled: true,
          placeholder: 'Send a message',
          model: 'gpt-4',
          systemPrompt:
            'You are a friendly AI who loves to help people find the information they need!',
          avatars: {
            assistant:
              'https://res.cloudinary.com/da7x4rzl4/image/upload/v1712948134/Developer%20portal/shelly.svg',
          },
        }}
        feedback={{ enabled: true }}
        references={{
          display: 'end',
          getHref: (ref) => getReferenceHref(ref.file.path),
          getLabel: (ref) => ref.file.title,
        }}
        search={{
          enabled: true,
          limit: 10,
          askLabel: 'Ask Shelly',
          provider: {
            name: 'algolia',
            apiKey: process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY ?? '',
            appId: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID ?? '',
            indexName: 'awell_developers',
            searchParameters: {
              replaceSynonymsInHighlight: true,
              synonyms: true,
            },
          },
          //@ts-expect-error todo
          getHref: (result) => `/${result.slug}`,
          //@ts-expect-error todo
          getHeading: (result) => result.title,
          //@ts-expect-error todo
          getSubtitle: (result) => result.space,
          //@ts-expect-error todo
          getTitle: (result) => result.description || undefined,
        }}
        close={{ visible: false }}
        linkAs={Link}
      >
        <button id="searchButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            style={{ strokeWidth: '2.5px', width: 16, height: 16 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <span>Search documentation</span>
          <kbd>
            <span>⌘ K</span>
          </kbd>
        </button>
      </Markprompt>
    </div>
  )
}
