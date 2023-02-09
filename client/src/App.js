import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider} from '@apollo/client'
import {setContext} from '@apollo/client/link/context'
import auth from './utils/auth'

const httpLink = createHttpLink({
  uri: '/graphql'
})

const authLink = setContext((_, { headers}) => {
  const token = auth.getToken()
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})
const client = new ApolloClient({
  link: authLink.concat(hhtpLink),
  cache: new InMemoryCache()
})


function App() {
  return (
    null
  );
}

export default App;
