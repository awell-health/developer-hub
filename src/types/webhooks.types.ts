type WebhookType = {
  event: string
  description: string
  eventVariables: {
    variableName: string
    jsonPath: string
  }[]
  comment: string
}

export type WebhooksType = Array<WebhookType>
