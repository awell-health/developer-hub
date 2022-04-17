import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_SANDBOX_GRAPHQL_API_URL,
  cache: new InMemoryCache(),
  headers: {
    apiKey: process.env.NEXT_PUBLIC_SANDBOX_GRAPHQL_API_KEY || '',
  },
})

export default client
