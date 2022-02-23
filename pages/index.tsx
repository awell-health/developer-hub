import { ReactNode } from 'react'

import { Layout } from '../components/layout'

export default function Home() {
  return <p>Hello world</p>
}

Home.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>
}
