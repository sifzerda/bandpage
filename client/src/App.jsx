import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import MusicPlayer from "./components/MusicPlayer";
import Footer from "./components/Footer";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({ uri: "/graphql" });

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: { ...headers, authorization: token ? `Bearer ${token}` : "" },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// Define the initial pre-loaded playlist
const initialPlaylist = [
/*  { videoId: "8GW6sLrK40k", title: "Resonance - HOME" }, */
/*   { videoId: "dwDns8x3Jb4", title: "Around The World - Daft Punk" }, */
  { videoId: "cOnT6k8itRE", title: "Kerosene - Rachel Lorin" },
  { videoId: "jWbgYLlWJk8", title: "Static Space Lovers - Foster The People" },
  { videoId: "csfirVLj4MI", title: "Shakin' - Rooney" },
];

function App() {
  const [playlist, setPlaylist] = useState(initialPlaylist); // Playlist state
  const [selectedVideo, setSelectedVideo] = useState(null); // Currently selected video

  // Function to add a video to the playlist
  const handleAddToPlaylist = (video) => {
    setPlaylist((prevPlaylist) => [...prevPlaylist, video]);
  };

  // Function to set a selected video (for display purposes)
  const handleSelectVideo = (video) => {
    setSelectedVideo(video);
  };

  return (
    <ApolloProvider client={client}>
      <>
        <header className="header">
          <Header />
          <Navigation />
        </header>

        <main className="main-content">
          <div>
            {/* Music Player with Playlist */}
            <MusicPlayer playlist={playlist} setPlaylist={setPlaylist} />
          </div>

          {/* Pass playlist functions and data via Outlet Context */}
          <Outlet context={{ handleAddToPlaylist, handleSelectVideo, selectedVideo, playlist }} />
        </main>

        <Footer />
      </>
    </ApolloProvider>
  );
}

export default App;