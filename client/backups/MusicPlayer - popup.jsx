import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

const MusicPlayer = () => {
  return (
    <Draggable>
      <div className="music-player">
        <div className="music-player-header">🎵 Music Player</div>
        <div className="music-player-body">
          <div className="track-info">
            <p className="track-name">Track: Chill Vibes</p>
            <p className="artist-name">Artist: LoFi Beats</p>
          </div>
          <div className="controls">
            <button className="control-btn">⏮</button>
            <button className="control-btn">⏯</button>
            <button className="control-btn">⏭</button>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

const App = () => {
  const [popup, setPopup] = useState(null);

  const openMusicPlayerWindow = () => {
    const playerWindow = window.open(
      '',
      'Music Player',
      'width=300,height=400,left=100,top=100'
    );

    playerWindow.document.title = 'Music Player';

    const cleanup = () => {
      setPopup(null);
      playerWindow.close();
    };

    // Render MusicPlayer into the new window
    ReactDOM.createRoot(playerWindow.document.body).render(
      <React.StrictMode>
        <MusicPlayer />
        <button onClick={cleanup}>Close</button>
      </React.StrictMode>
    );

    setPopup(playerWindow);
  };

  useEffect(() => {
    return () => {
      if (popup) {
        popup.close();
      }
    };
  }, [popup]);

  return (
    <div className="app">
      <button onClick={openMusicPlayerWindow}>Open Music Player</button>
    </div>
  );
};

export default App;