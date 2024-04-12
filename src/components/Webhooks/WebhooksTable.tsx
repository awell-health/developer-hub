import Link from 'next/link'

import { webhooks } from '@/config/webhooks'

export const WebhooksTable = () => {
  return (
    <div className="flex flex-col">
      <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <table className="ignore-default-style min-w-full divide-y divide-slate-300 dark:divide-slate-500">
            <thead>
              <tr className="text-slate-900 dark:text-white text-base font-semibold">
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left sm:pl-6 md:pl-0"
                >
                  Event
                </th>
                <th scope="col" className="py-3.5 px-3 text-left">
                  Description
                </th>
                <th
                  scope="col"
                  className="relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0"
                >
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {webhooks.map((webhook) => (
                <tr
                  key={webhook.event}
                  className="text-slate-900 dark:text-slate-100"
                >
                  <td className="whitespace-nowrap font-semibold py-4 pl-4 pr-3 sm:pl-6 md:pl-0">
                    {webhook.event}
                  </td>
                  <td className="whitespace-nowrap py-4 px-3 text-base">
                    {webhook.description}
                  </td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm sm:pr-6 md:pr-0">
                    <Link
                      href={webhook.apiReferenceLink}
                      title={`View payload of ${webhook.event}`}
                      className="custom-link font-semibold text-blue-600 dark:text-sky-400 hover:text-blue-900 dark:hover:text-sky-500"
                    >
                      View payload
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
