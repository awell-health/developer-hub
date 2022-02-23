export type MenuItemType = {
  title: string
  path?: string
  subMenu?: {
    title: string
    path: string
  }[]
}

export const navHeight = 16

export const menu: MenuItemType[] = [
  {
    title: 'Products',
    subMenu: [
      {
        title: 'Awell Studio',
        path: '/docs/getting-started',
      },
      {
        title: 'Orchestration API',
        path: '/docs/getting-started',
      },
      {
        title: 'Awell Care',
        path: '/docs/getting-started',
      },
      {
        title: 'Awell Score',
        path: '/docs/getting-started',
      },
    ],
  },
  {
    title: 'Use Cases',
    subMenu: [
      {
        title: 'To do',
        path: '/docs/getting-started',
      },
    ],
  },
  {
    title: 'Developers',
    subMenu: [
      {
        title: 'API Quickstart',
        path: '/docs/getting-started',
      },
      {
        title: 'API Reference',
        path: '/docs/getting-started',
      },
    ],
  },
  {
    title: 'Company',
    subMenu: [
      {
        title: 'About Us',
        path: '/docs/getting-started',
      },
      {
        title: 'Values',
        path: '/docs/getting-started',
      },
      {
        title: 'Careers',
        path: '/docs/getting-started',
      },
      {
        title: 'Blog',
        path: '/docs/getting-started',
      },
    ],
  },
  {
    title: 'Pricing',
    path: '/pricing',
  },
]
