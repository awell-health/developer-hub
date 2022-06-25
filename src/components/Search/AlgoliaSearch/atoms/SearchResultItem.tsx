/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

export const SearchResultItem = ({
  item,
  components,
}: {
  item: any
  components: any
}) => {
  return (
    <a href={`/${item.slug}`} title={item.title} className="flex flex-col">
      <div className="font-semibold text-lg text-slate-800 dark:text-slate-100">
        <components.Highlight hit={item} attribute="title" tagName="mark" />
      </div>
      <div className="text-sm font-normal text-slate-500">
        <components.Highlight hit={item} attribute="space" tagName="mark" />
      </div>
      <div className="pt-1 text-base text-slate-700 dark:text-slate-300">
        <components.Highlight
          hit={item}
          attribute="description"
          tagName="mark"
        />
      </div>
    </a>
  )
}
