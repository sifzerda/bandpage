import React, { useState, useRef } from "react";
import Draggable from "react-draggable";
import YouTube from "react-youtube";

const MusicPlayer = ({ playlist }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const playerRef = useRef(null);

  const currentVideo = playlist[currentIndex] || null;

  const opts = {
    height: "0", // Hide video display
    width: "0", // Hide video display
    playerVars: {
      autoplay: 1,
      controls: 0,
    },
  };

  const onReady = (event) => {
    playerRef.current = event.target;
    if (currentVideo) {
      playerRef.current.loadVideoById(currentVideo.videoId);
    }
  };

  const playNext = () => {
    if (currentIndex < playlist.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const playPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <Draggable>
      <div className="music-player-container">
      <div className="music-player">
        <div className="music-player-header">🎵 Music Player</div>
        <div className="music-player-body">
          {currentVideo ? (
            <>
              <p>Now Playing: {currentVideo.title}</p>
              <YouTube videoId={currentVideo.videoId} opts={opts} onReady={onReady} />
            </>
          ) : (
            <p>No video selected</p>
          )}
          <div className="controls">
            <button onClick={playPrevious} disabled={currentIndex === 0}>
              ⏮ Previous
            </button>
            <button onClick={playNext} disabled={currentIndex === playlist.length - 1}>
              Next ⏭
            </button>
          </div>
        </div>
        <div className="playlist">
          <h3>Playlist</h3>
          <ul>
            {playlist.map((video, index) => (
              <li
                key={index}
                style={{ fontWeight: index === currentIndex ? "bold" : "normal" }}
              >
                {video.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
    </Draggable>
  );
};

export default MusicPlayer;