import './App.css';
import { Outlet } from 'react-router-dom';
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import MusicPlayer from './components/MusicPlayer';
import Footer from './components/Footer';

import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
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

function App() {
  const [savedVideo, setSavedVideo] = useState(null);

  const handleSaveVideo = (videoId, title) => {
    setSavedVideo({ videoId, title });
  };

  return (
    <ApolloProvider client={client}>
      <>
        <header className="header">
          <Header />
          <Navigation />
        </header>

        <main className="main-content">
          {/* MusicPlayer is persistent across all pages */}
          <MusicPlayer savedVideo={savedVideo} />

          {/* Outlet renders the routed components */}
          <Outlet context={{ handleSaveVideo }} />
        </main>

        <Footer />
      </>
    </ApolloProvider>
  );
}

export default App;