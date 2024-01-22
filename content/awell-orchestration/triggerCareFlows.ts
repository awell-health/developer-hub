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
    name: 'Awell Care',
    href: `/${Space.AWELL_ORCHESTRATION}/docs/activities/awell-hosted-pages/hosted-activity-guide`,
    description: 'Manageable up to couple 100/year',
    useWhen: `You're using Awell Care to operate care flows`,
    effort: 1,
  },
  {
    name: 'Sharing link',
    href: `/${Space.AWELL_ORCHESTRATION}/docs/activities/awell-hosted-pages/hosted-pathway-guide`,
    description: `[0, ∞]`,
    useWhen: 'Supports patient self-enrollment',
    effort: 1,
  },
  {
    name: 'Awell API',
    href: `/${Space.AWELL_ORCHESTRATION}/docs/activities/awell-hosted-pages/hosted-pathway-guide`,
    description: `[0, ∞]`,
    useWhen: 'You want maximum control and flexibility',
    effort: 3,
  },
  {
    name: 'Incoming webhook',
    href: `/${Space.AWELL_ORCHESTRATION}/docs/activities/awell-hosted-pages/hosted-pathway-guide`,
    description: `[0, ∞]`,
    useWhen: 'Trigger based on events in 3rd party systems',
    effort: 2,
  },
  {
    name: 'FTP Connector',
    href: `/${Space.AWELL_ORCHESTRATION}/docs/activities/awell-hosted-pages/hosted-pathway-guide`,
    description: `[100, ∞]`,
    useWhen: 'Start flows in batch using a csv file',
    effort: 1,
  },
  {
    name: 'ADT feed',
    href: `/${Space.AWELL_ORCHESTRATION}/docs/activities/awell-hosted-pages/hosted-pathway-guide`,
    description: `[0, ∞]`,
    useWhen: 'Start flows based on ADT messages',
    effort: 2,
  },
]

export const sections: SectionType[] = [
  {
    name: 'Details',
    features: [
      {
        name: 'Human trigger',
        categories: {
          'Awell Care': true,
          'Sharing link': true,
          'Awell API': 'Not always',
          'Incoming webhook': false,
          'FTP Connector': true,
          'ADT feed': false,
        },
      },
      {
        name: 'Patient self-enrollment',
        categories: {
          'Awell Care': false,
          'Sharing link': true,
          'Awell API': true,
          'Incoming webhook': false,
          'FTP Connector': false,
          'ADT feed': false,
        },
      },
      {
        name: 'Real-time',
        categories: {
          'Awell Care': true,
          'Sharing link': true,
          'Awell API': true,
          'Incoming webhook': true,
          'FTP Connector': false,
          'ADT feed': true,
        },
      },
      {
        name: 'Batch',
        categories: {
          'Awell Care': false,
          'Sharing link': false,
          'Awell API': true,
          'Incoming webhook': false,
          'FTP Connector': true,
          'ADT feed': false,
        },
      },
    ],
  },
]
