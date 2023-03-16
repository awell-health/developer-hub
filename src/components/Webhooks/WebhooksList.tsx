import { webhooks } from '@/config/webhooks'

export const WebhooksList = () => {
  return (
    <div className="properties-list m-0 mb-12 sm:max-w-[650px]">
      <div className="divide-y divide-slate-900/5 p-0 dark:divide-white/5">
        {webhooks.map((webhook) => (
          <div
            className="m-0 px-0 py-4 first:pt-0 last:pb-0"
            key={webhook.event}
          >
            <dl className="m-0 flex flex-wrap items-center gap-x-3 gap-y-2">
              <dt className="sr-only">Name</dt>
              <dd>
                <code className="text-xs bg-slate-100 text-slate-900 border border-slate-300 rounded-lg py-1 px-1.5 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700">
                  {webhook.event}
                </code>
              </dd>
              <dt className="sr-only">Payload</dt>
              <dd>
                <a
                  className="custom-link text-sm mt-0 mb-0 underline text-blue-600 dark:text-sky-400"
                  href={webhook.apiReferenceLink}
                >
                  View payload
                </a>
              </dd>
              <dt className="sr-only">Description</dt>
              <dd className="w-full flex-none [&>:first-child]:mt-0 [&>:last-child]:mb-0">
                <p
                  className="text-base mt-0 mb-0 text-slate-600 dark:text-slate-400"
                  dangerouslySetInnerHTML={{ __html: webhook.description }}
                />
              </dd>
            </dl>
          </div>
        ))}
      </div>
    </div>
  )
}
