import { FC } from 'react'

interface Property {
  key: string
  type: string
  description: string
  required?: boolean
  readMoreLink?: string
}

interface PropertiesProps {
  properties: Array<Property>
}

const Property: FC<{ property: Property }> = ({ property }) => {
  return (
    <div className="m-0 px-0 py-4 first:pt-0 last:pb-0">
      <dl className="m-0 flex flex-wrap items-center gap-x-3 gap-y-2">
        <dt className="sr-only">Name</dt>
        <dd>
          <code className="text-xs bg-slate-100 text-slate-900 border border-slate-300 rounded-lg py-1 px-1.5 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700">
            {property.key}
          </code>
        </dd>
        <dt className="sr-only">Type</dt>
        <dd className="font-mono text-xs text-slate-400 dark:text-slate-500">
          {property.type}
        </dd>
        <dt className="sr-only">Description</dt>
        <dd className="w-full flex-none [&>:first-child]:mt-0 [&>:last-child]:mb-0">
          <p
            className="text-base mt-0 mb-0 text-slate-600 dark:text-slate-400"
            dangerouslySetInnerHTML={{ __html: property.description }}
          />
        </dd>
      </dl>
    </div>
  )
}

export const Properties: FC<PropertiesProps> = ({ properties }) => {
  const sortedProperties = properties.sort((a, b) => {
    const keyA = a.key.toUpperCase()
    const keyB = b.key.toUpperCase()
    return keyA < keyB ? -1 : keyA > keyB ? 1 : 0
  })

  return (
    <div className="properties-list m-0 mb-12 sm:max-w-[650px]">
      <div>
        <h4>Required properties</h4>
        <div className="divide-y divide-slate-900/5 p-0 dark:divide-white/5">
          {sortedProperties
            .filter((property) => property.required === true)
            .map((property) => (
              <Property key={property.key} property={property} />
            ))}
        </div>
      </div>
      <div className="mt-8">
        <h4>Optional properties</h4>
        <div className="divide-y divide-slate-900/5 p-0 dark:divide-white/5">
          {sortedProperties
            .filter((property) => property.required !== true)
            .map((property) => (
              <Property key={property.key} property={property} />
            ))}
        </div>
      </div>
    </div>
  )
}
