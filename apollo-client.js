import { ApolloClient, InMemoryCache } from '@apollo/client'

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_SANDBOX_GRAPHQL_API_URL,
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      apiKey: process.env.NEXT_PUBLIC_SANDBOX_GRAPHQL_API_KEY,
    },
  }
})

const client = new ApolloClient({
  uri: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

export default client
