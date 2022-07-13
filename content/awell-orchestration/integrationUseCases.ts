import { type SectionType, type TierType } from '../../src/types/useCases.types'

export const tiers: TierType[] = [
  {
    name: 'Hosted pathway',
    href: '/awell-orchestration/docs/use-cases/hosted-pathway',
    description:
      'Redirect users to an Awell pathway page without needing to build a front-end yourself. Ideal for patient onboarding flows.',
    effort: 1,
  },
  {
    name: 'Hosted activity',
    href: '/awell-orchestration/docs/use-cases/hosted-activity',
    description:
      'Send multiple stakeholders to an Awell-hosted page to complete activities in more elaborate pathways. Ideal for triage flows, outcomes / PROMs collection and more.',
    effort: 2,
  },
  {
    name: 'Custom integration',
    href: '/awell-orchestration/docs/use-cases/custom-integration',
    description:
      'Build your own UI on Awell Orchestration for full customization and flexibility.',
    effort: 3,
  },
]

export const sections: SectionType[] = [
  {
    name: 'Awell Studio (modelling)',
    features: [
      {
        name: 'Form actions',
        tiers: {
          'Hosted pathway': true,
          'Hosted activity': true,
          'Custom integration': true,
        },
      },
      {
        name: 'Message actions',
        tiers: {
          'Hosted pathway': true,
          'Hosted activity': true,
          'Custom integration': true,
        },
      },
      {
        name: 'Checklist actions',
        tiers: {
          'Hosted pathway': true,
          'Hosted activity': true,
          'Custom integration': true,
        },
      },
      {
        name: 'Calculation actions',
        tiers: {
          'Hosted pathway': true,
          'Hosted activity': true,
          'Custom integration': true,
        },
      },
      {
        name: 'API clal actions',
        tiers: {
          'Hosted pathway': true,
          'Hosted activity': true,
          'Custom integration': true,
        },
      },
      {
        name: 'Conditional transitions',
        tiers: {
          'Hosted pathway': true,
          'Hosted activity': true,
          'Custom integration': true,
        },
      },
      {
        name: 'Timing delays (step scheduling)',
        tiers: {
          'Hosted pathway': false,
          'Hosted activity': true,
          'Custom integration': true,
        },
      },
      {
        name: 'Multiple stakeholders',
        tiers: {
          'Hosted pathway': false,
          'Hosted activity': true,
          'Custom integration': true,
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
          'Hosted pathway': 'Awell branded',
          'Hosted activity': 'Awell branded',
          'Custom integration': true,
        },
      },
      {
        name: 'Authentication',
        tiers: {
          'Hosted pathway': 'Light',
          'Hosted activity': 'Full',
          'Custom integration': 'Full',
        },
      },
    ],
  },
]
