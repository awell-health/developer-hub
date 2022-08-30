import { webhooks } from '@/config/webhooks'

export const WebhooksList = () => {
  return (
    <>
      {webhooks.map((webhook) => (
        <div key={webhook.event}>
          <h2 id={webhook.event}>{webhook.event}</h2>
          <p>{webhook.description}</p>
        </div>
      ))}
    </>
  )
}
