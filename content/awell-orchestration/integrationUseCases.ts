import { Space } from '@/types/space.types'

import { type SectionType, type TierType } from '../../src/types/useCases.types'

export const tiers: TierType[] = [
  {
    name: 'Hosted Pathway',
    href: `/${Space.AWELL_ORCHESTRATION}/docs/activities/awell-hosted-pages/hosted-pathway-guide`,
    description:
      'Redirect users to an Awell page without needing to build a front-end yourself. Ideal for patient onboarding flows.',
    effort: 1,
  },
  {
    name: 'Hosted Activity',
    href: `/${Space.AWELL_ORCHESTRATION}/docs/activities/awell-hosted-pages/hosted-activity-guide`,
    description:
      'Send multiple stakeholders to an Awell-hosted page to complete activities in more elaborate pathways. Ideal for triage flows, outcomes / PROMs collection and more.',
    effort: 2,
  },
]

export const sections: SectionType[] = [
  {
    name: 'Awell Studio (modelling)',
    features: [
      {
        name: 'Form actions',
        tiers: {
          'Hosted Pathway': true,
          'Hosted Activity': true,
        },
      },
      {
        name: 'Message actions',
        tiers: {
          'Hosted Pathway': true,
          'Hosted Activity': true,
        },
      },
      {
        name: 'Checklist actions',
        tiers: {
          'Hosted Pathway': true,
          'Hosted Activity': true,
        },
      },
      {
        name: 'Calculation actions',
        tiers: {
          'Hosted Pathway': true,
          'Hosted Activity': true,
        },
      },
      {
        name: 'API call actions',
        tiers: {
          'Hosted Pathway': true,
          'Hosted Activity': true,
        },
      },
      {
        name: 'Conditional transitions',
        tiers: {
          'Hosted Pathway': true,
          'Hosted Activity': true,
        },
      },
      {
        name: 'Timing delays (step scheduling)',
        tiers: {
          'Hosted Pathway': false,
          'Hosted Activity': true,
        },
      },
      {
        name: 'Multiple stakeholders',
        tiers: {
          'Hosted Pathway': false,
          'Hosted Activity': true,
        },
      },
    ],
  },
  {
    name: 'Orchestration',
    features: [
      {
        name: 'UI customization',
        tiers: {
          'Hosted Pathway': 'Yes, but limited (logo, color, page title)',
          'Hosted Activity': 'Yes, but limited (logo, color, page title)',
        },
      },
      {
        name: 'Authentication',
        tiers: {
          'Hosted Pathway': 'Light (session based)',
          'Hosted Activity': 'Light (session based)',
        },
      },
    ],
  },
]
