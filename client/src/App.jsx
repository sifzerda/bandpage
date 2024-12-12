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
  { videoId: "jWbgYLlWJk8", title: "Static Space Lovers - Foster The People" },
 { videoId: "Tce06Ijzli8", title: "Past Lives - BØRNS" },
  { videoId: "csfirVLj4MI", title: "I'm Shakin' - Rooney" },
  { videoId: "YHoGXDYGkIw", title: "Levitate - Twenty One Pilots" }, 
  { videoId: "tfr-h6BaYN8", title: "Let It Happen (Soulwax Remix) - Tame Impala" },
  { videoId: "3gCxSWYWqug", title: "Real Window - Quantum Lovers" },
  { videoId: "r4zNUgEJpQI", title: "Là haut - L'impératrice" },
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