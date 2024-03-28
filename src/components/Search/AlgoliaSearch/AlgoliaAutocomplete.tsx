import { autocomplete } from '@algolia/autocomplete-js'
import React, { createElement, Fragment, useEffect, useRef } from 'react'
import { render } from 'react-dom'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AlgoliaAutocomplete = (props: any) => {
  const buttonRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!buttonRef.current) {
      return undefined
    }

    // Initialize autocomplete on the newly created container
    const search = autocomplete({
      debug: false,
      autoFocus: true,
      container: buttonRef.current,
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
      renderNoResults({ state }, root) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        render(`No results for "${state.query}".`, root)
      },
      ...props,
    })

    // Destroy the search instance in cleanup
    return () => {
      search.destroy()
    }
  }, [props])

  //@ts-expect-error not correctly typed yet
  return <div className="SearchButton" ref={buttonRef} />
}
