import React from "react";
import Draggable from "react-draggable";
import YouTube from "react-youtube";

const MusicPlayer = () => {
  const opts = {
    height: "200",
    width: "300",
    playerVars: {
      autoplay: 0, // Set to 1 to autoplay
    },
  };

  const onPlay = (event) => {
    event.target.playVideo();
  };

  const onPause = (event) => {
    event.target.pauseVideo();
  };

  return (
    <Draggable>
      <div className="music-player">
        <div className="music-player-header">🎵 Music Player</div>
        <div className="music-player-body">
          <div className="track-info">
            <p className="track-name">Track: Chill Vibes</p>
            <p className="artist-name">Artist: LoFi Beats</p>
          </div>
          <div className="youtube-player">
            <YouTube
              videoId="5qap5aO4i9A" // Replace with the desired YouTube video ID
              opts={opts}
              onReady={onPlay}
            />
          </div>
          <div className="controls">
            <button className="control-btn" onClick={onPause}>⏮</button>
            <button className="control-btn" onClick={onPlay}>⏯</button>
            <button className="control-btn">⏭</button>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default MusicPlayer;