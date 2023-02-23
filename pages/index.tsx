import { Space } from '@/types/space.types'

export default function Home() {
  return <div />
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: `/${Space.AWELL_ORCHESTRATION}`,
      permanent: false,
    },
  }
}
