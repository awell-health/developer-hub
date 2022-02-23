export type MenuItemType = {
  title: string
  path?: string
}

interface MenuItem extends MenuItemType {
  routes: MenuItemType[]
}

export const menu: MenuItem[] = [
  {
    title: 'Why Awell?',
    routes: [
      {
        title: 'Installation',
        path: '/docs/getting-started',
      },
      {
        title: 'Upgrade to v1',
        path: '/docs/migration',
      },
    ],
  },
  {
    title: 'Products',
    routes: [
      {
        title: 'Installation',
        path: '/docs/getting-started',
      },
      {
        title: 'Upgrade to v1',
        path: '/docs/migration',
      },
    ],
  },
  {
    title: 'Company',
    routes: [
      {
        title: 'Installation',
        path: '/docs/getting-started',
      },
      {
        title: 'Upgrade to v1',
        path: '/docs/migration',
      },
    ],
  },
  {
    title: 'Pricing',
    routes: [
      {
        title: 'Installation',
        path: '/docs/getting-started',
      },
      {
        title: 'Upgrade to v1',
        path: '/docs/migration',
      },
    ],
  },
]
