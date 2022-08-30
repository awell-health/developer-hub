import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Fragment, useEffect, useState } from 'react'

import { useStories } from '@/hooks/useStories'
import { type Stories, type StoriesFilters } from '@/types/stories.types'

import { filterUniqueItems } from '../../utils/array/filterUniqueItems'
import { StoryCard } from './atoms/StoryCard'

const defaultFilters: StoriesFilters = [
  {
    id: 'category',
    name: 'Category',
    options: [],
  },
  {
    id: 'operations',
    name: 'Operations',
    options: [],
  },
]

export const StoryBrowser = () => {
  /** Filters & filter states */
  const [filters, setFilters] = useState(defaultFilters)
  const [categoryFilters, setCategoryFilters] = useState<string[]>([])
  const [operationsFilters, setOperationsFilters] = useState<string[]>([])

  const { stories } = useStories()
  const [filteredStories, setFilteredStories] = useState<Stories>([])

  useEffect(() => {
    setFilteredStories(stories)

    const operationFilters = stories
      .flatMap((story) =>
        story?.operations
          ? story?.operations.flatMap(
              (operation) =>
                `${operation.operationName} (${operation.type.toLowerCase()})`
            )
          : []
      )
      .filter(filterUniqueItems)
      .map((category) => {
        return {
          value: category.split('(')[0].trim(),
          label: category,
        }
      })

    const categoryFilters = stories
      .flatMap((story) => story?.categories || [])
      .filter(filterUniqueItems)
      .map((category) => {
        return {
          value: category,
          label: category,
        }
      })

    const newFilters = defaultFilters.map((f) => {
      if (f.id === 'category') {
        return {
          ...f,
          options: categoryFilters,
        }
      }
      if (f.id === 'operations') {
        return {
          ...f,
          options: operationFilters,
        }
      }

      return f
    })

    setFilters(newFilters)
  }, [stories])

  /** Handle filtering */
  useEffect(() => {
    const filteredStories = stories.filter((story) => {
      const shouldShowStoryBasedOnCategoryFilter = categoryFilters.length
        ? story?.categories?.some((category) =>
            categoryFilters.includes(category)
          )
        : true

      const shouldShowStoryBasedOnOperationsFilter = operationsFilters.length
        ? story?.operations?.some((operation) =>
            operationsFilters.includes(operation.operationName)
          )
        : true

      return (
        shouldShowStoryBasedOnCategoryFilter &&
        shouldShowStoryBasedOnOperationsFilter
      )
    })

    setFilteredStories(filteredStories)
  }, [categoryFilters, operationsFilters])

  const onSetFilter = (f: {
    filter: string
    option: string
    checked: boolean
  }) => {
    if (f.filter === 'category') {
      if (f.checked) {
        setCategoryFilters([...categoryFilters, f.option])
      } else {
        setCategoryFilters(categoryFilters.filter((c) => c !== f.option))
      }
    }

    if (f.filter === 'operations') {
      if (f.checked) {
        setOperationsFilters([...operationsFilters, f.option])
      } else {
        setOperationsFilters(operationsFilters.filter((c) => c !== f.option))
      }
    }
  }

  return (
    <div className="">
      <div>
        <main>
          <div className="">
            {/* Filters */}
            <section aria-labelledby="filter-heading" className="pt-6">
              <h2 id="filter-heading" className="sr-only">
                Story filters
              </h2>

              <div className="flex items-center justify-between">
                <Popover.Group className="flex items-baseline space-x-8">
                  {filters.map((filter, filterIdx) => (
                    <Popover
                      as="div"
                      key={filter.name}
                      id="menu"
                      className="relative z-10 inline-block text-left"
                    >
                      <div>
                        <Popover.Button className="group inline-flex items-center justify-center text-sm font-medium">
                          <span>{filter.name}</span>
                          {filterIdx === 0 && categoryFilters.length ? (
                            <span className="ml-1.5 rounded py-0.5 px-1.5 bg-gray-200 text-xs font-semibold tabular-nums">
                              {categoryFilters.length}
                            </span>
                          ) : null}
                          {filterIdx === 1 && operationsFilters.length ? (
                            <span className="ml-1.5 rounded py-0.5 px-1.5 bg-gray-200 text-xs font-semibold tabular-nums">
                              {operationsFilters.length}
                            </span>
                          ) : null}
                          <ChevronDownIcon
                            className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                        </Popover.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Popover.Panel className="origin-top-left absolute left-0 mt-2 bg-white rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <form className="space-y-4">
                            {filter.options.map((option) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={option.value}
                                  name={option.value}
                                  checked={[
                                    ...categoryFilters,
                                    ...operationsFilters,
                                  ].includes(option.value)}
                                  onChange={(e) =>
                                    onSetFilter({
                                      filter: filter.id,
                                      option: option.value,
                                      checked: e.target.checked,
                                    })
                                  }
                                  type="checkbox"
                                  className="h-4 w-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500"
                                />
                                <label
                                  htmlFor={option.value}
                                  className="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </form>
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                  ))}
                </Popover.Group>
              </div>
            </section>

            {/* Stories grid */}
            <section aria-labelledby="stories" className="mt-8">
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                {filteredStories.map((story) => (
                  <StoryCard story={story} key={story.id} />
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}
