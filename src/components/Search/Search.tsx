import { getAlgoliaResults } from '@algolia/autocomplete-js'
import algoliasearch from 'algoliasearch'

import { AlgoliaAutocomplete } from './AlgoliaSearch'
import { SearchResultItem } from './AlgoliaSearch/atoms'

export const Search = () => {
  if (!process.env.NEXT_PUBLIC_ALGOLIA_APP_ID) {
    throw new Error('NEXT_PUBLIC_ALGOLIA_APP_ID is not defined')
  }

  if (!process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY) {
    throw new Error('NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY is not defined')
  }

  const searchClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
  )

  return (
    <AlgoliaAutocomplete
      placeholder="Search"
      navigator={{
        navigate({ itemUrl }: { itemUrl: string }) {
          window.location.assign(itemUrl)
        },
        navigateNewTab({ itemUrl }: { itemUrl: string }) {
          const windowReference = window.open(itemUrl, '_blank', 'noopener')

          if (windowReference) {
            windowReference.focus()
          }
        },
        navigateNewWindow({ itemUrl }: { itemUrl: string }) {
          window.open(itemUrl, '_blank', 'noopener')
        },
      }}
      getSources={() => [
        {
          sourceId: 'pages',
          getItems({ query }: { query: string }) {
            return getAlgoliaResults({
              searchClient,
              queries: [
                {
                  indexName: 'awell_developers',
                  query,
                  params: {
                    hitsPerPage: 10,
                  },
                },
              ],
            })
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          getItemUrl({ item }: { item: any }) {
            return `/${item.slug}`
          },
          templates: {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            item({ item, components }: { item: any; components: any }) {
              return <SearchResultItem item={item} components={components} />
            },
          },
        },
      ]}
    />
  )
}
