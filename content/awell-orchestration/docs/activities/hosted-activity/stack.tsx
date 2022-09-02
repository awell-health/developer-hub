import { type StackType } from '../../../../../src/types/useCases.types'

export const stack: StackType[] = [
  {
    frontEnd: { label: 'HTML', disabled: true },
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
  // {
  //   frontEnd: { label: 'React', disabled: true },
  //   backEnd: [
  //     { label: 'Node', disabled: false },
  //     { label: 'Ruby', disabled: true },
  //     { label: 'PHP', disabled: true },
  //     { label: 'Phyton', disabled: true },
  //     { label: 'Go', disabled: true },
  //     { label: '.NET', disabled: true },
  //     { label: 'Java', disabled: true },
  //   ],
  // },
  // {
  //   frontEnd: { label: 'Next.js', disabled: false },
  //   backEnd: [],
  // },
]
