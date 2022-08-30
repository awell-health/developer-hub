import { type StackType } from '../../../../../src/types/useCases.types'

export const stack: StackType[] = [
  {
    frontEnd: {
      label: 'Hide',
      disabled: false,
      hide: true,
    },
    backEnd: [
      { label: 'Node', disabled: false },
      { label: 'Ruby', disabled: true },
      { label: 'PHP', disabled: true },
      { label: 'Phyton', disabled: true },
      { label: 'Go', disabled: true },
      { label: '.NET', disabled: true },
      { label: 'Java', disabled: true },
    ],
  },
]
