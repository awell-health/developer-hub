export type TierType = {
  name: string
  href: string
  description: string
}

export type SectionType = {
  name: string
  features: Array<{
    name: string
    tiers: {
      [key in string]: boolean | string
    }
  }>
}
