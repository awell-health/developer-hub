import { Space } from '@/types/space.types'

export type CategoryType = {
  name: string
  href: string
  description: string
  useWhen: string
  effort: number
}

export type SectionType = {
  name: string
  features: Array<{
    name: string
    join?: boolean
    categories: {
      [key in string]: boolean | string
    }
  }>
}

export const sessionsAndLink: CategoryType[] = [
  {
    name: 'Hosted Pages Links',
    href: `/${Space.AWELL_ORCHESTRATION}/docs/activities/awell-hosted-pages/hosted-activity-guide`,
    description: 'Get a shareable, static link generated by Awell',
    useWhen: `You want to <strong>get started quickly</strong>.<br><br>
    Awell <strong>communicates directly</strong> with the stakeholder (e.g. via SMS or email).`,
    effort: 1,
  },
  {
    name: 'Sessions',
    href: `/${Space.AWELL_ORCHESTRATION}/docs/activities/awell-hosted-pages/hosted-pathway-guide`,
    description: `Create a session via Awell's API which returns a session URL`,
    useWhen:
      'You prefer <strong>complete control</strong> over the creation of sessions and care about <strong>limited validity</strong> of links.',
    effort: 3,
  },
]

export const sections: SectionType[] = [
  {
    name: 'Details',
    features: [
      {
        name: 'Prerequisites',
        join: true,
        categories: {
          join: `There is a <strong>care flow started</strong>**.`,
        },
      },
      {
        name: 'Trigger',
        join: true,
        categories: {
          join: `There is a <strong>new activity</strong> in the care flow that<br/><strong>needs completion by a stakeholder</strong>.`,
        },
      },
      {
        name: 'Trigger sent to',
        categories: {
          Sessions: `Your system (e.g. via API call action, webhook, ...).`,
          'Hosted Pages Links':
            'Your system (e.g. via API call action, webhook, ...) or directly to the stakeholder (e.g. SMS/email).',
        },
      },
      {
        name: 'URL created by',
        categories: {
          Sessions: `You, <strong>programmatically</strong> via Awell's API (<a href="/awell-orchestration/api-reference/mutations/start-hosted-pages-session" title="Read more">read more</a>).`,
          'Hosted Pages Links':
            'Awell but <strong>configured by you in Awell Studio</strong> when designing the care flow (<a href="https://help.awellhealth.com/en/articles/8205630-care-flow-design-when-using-hosted-pages" title="Read more">read more</a>).',
        },
      },
      {
        name: 'URL generated when',
        categories: {
          Sessions: `<strong>Just-In-Time</strong>, when a stakeholder clicks a Call To Action button.`,
          'Hosted Pages Links':
            '<strong>Upfront</strong>, when care flow is started. The URL is immediately included in the payload sent to your system or notification to the stakeholder.',
        },
      },
      {
        name: 'Scope',
        join: true,
        categories: {
          join: 'Only gives access to activities for a<br/><strong>single stakeholder</strong> in a <strong>single care flow</strong>.',
        },
      },
      {
        name: 'Expiration',
        categories: {
          Sessions: 'Yes, after <strong>60 minutes</strong>.',
          'Hosted Pages Links':
            "No, never. It's a <strong>static link</strong>.",
        },
      },
      {
        name: 'Set success/cancel URLs',
        categories: {
          Sessions: 'Yes, full control.',
          'Hosted Pages Links': 'Limited control but improved support coming.',
        },
      },
      {
        name: 'Webhook support',
        categories: {
          Sessions: true,
          'Hosted Pages Links': false,
        },
      },
      {
        name: 'Multi-language support',
        join: true,
        categories: {
          join: true,
        },
      },
    ],
  },
]
