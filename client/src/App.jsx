import './App.css';
// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import Header from './components/Header';
import MusicPlayer from './components/MusicPlayer';
import Footer from './components/Footer';

import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// content //

function App() {
  return (
    <ApolloProvider client={client}>
      <>
        <header className="header">
          <Header />
          <Navigation />
        </header>

          <main className="main-content">

{/* ---- outside react-router so will persist after nav tabs switched*/}
          <MusicPlayer /> 
{/* -----------------------------------------------------------------*/}

            <Outlet />
          </main>

        <Footer />
      </>
    </ApolloProvider>
  );
}

export default App;