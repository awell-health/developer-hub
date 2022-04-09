import { autocomplete } from '@algolia/autocomplete-js'
import React, {
  createElement,
  Fragment,
  useContext,
  useEffect,
  useRef,
} from 'react'
import { render } from 'react-dom'

import { AppContext } from '../../../contexts/app/AppContext'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AlgoliaAutocomplete = (props: any) => {
  const { toggleIsSearching } = useContext(AppContext)

  const containerRef = useRef<HTMLElement | null>(null)

  const useClickOutside = (ref: React.MutableRefObject<HTMLElement | null>) => {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      const handleClickOutside = (event: MouseEvent) => {
        //@ts-expect-error not correctly typed yet
        if (ref.current && !ref.current.contains(event.target)) {
          toggleIsSearching()
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

  useClickOutside(containerRef)

  useEffect(() => {
    if (!containerRef.current) {
      return undefined
    }

    // Initialize autocomplete on the newly created container
    const search = autocomplete({
      debug: true,
      autoFocus: true,
      container: containerRef.current,
      panelContainer: containerRef.current,
      renderer: { createElement, Fragment },
      // Autocomplete render()
      // https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-js/autocomplete/#param-render
      render({ children }, root) {
        // react-dom render
        // https://reactjs.org/docs/react-dom.html#render
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        render(children, root)
      },
      ...props,
    })

    // Destroy the search instance in cleanup
    return () => {
      search.destroy()
    }
  }, [props])

  //@ts-expect-error not correctly typed yet
  return <div className="DocSearch-Modal" ref={containerRef} />
}
