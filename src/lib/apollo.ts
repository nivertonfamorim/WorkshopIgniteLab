import { ApolloClient, InMemoryCache } from "@apollo/client"; 

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4obz7qa1siw01xx3dfr0beg/master',
  cache: new InMemoryCache()
})