import '@markprompt/css'

import { Markprompt } from '@markprompt/react'

export default function ComingSoon() {
  return (
    <Markprompt
      projectKey="sk_test_l4M3JFLmPPeXPpWTNwPr5UzhZ8UrQ8vR"
      search={{
        enabled: true,
        provider: {
          name: 'algolia',
          apiKey: process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || '',
          appId: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
          indexName: 'awell_developers',
        },
        getHref: (result) => result.href,
        getHeading: (result) => result.pageTitle,
        getTitle: (result) => result.pageDescription,
        getSubtitle: (result) => result.pageContent,
      }}
    />
  )
}
