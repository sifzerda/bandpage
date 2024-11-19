import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // URL to the audio file (replace with the desired audio URL)
  const audioUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"; 

  const onPlay = () => {
    const audio = document.getElementById("audio-player");
    audio.play();
    setIsPlaying(true);
  };

  const onPause = () => {
    const audio = document.getElementById("audio-player");
    audio.pause();
    setIsPlaying(false);
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
          <div className="audio-player">
            <audio id="audio-player" src={audioUrl} />
          </div>
          <div className="controls">
            <button className="control-btn" onClick={onPause}>⏮</button>
            <button className="control-btn" onClick={isPlaying ? onPause : onPlay}>
              {isPlaying ? "⏸" : "⏯"}
            </button>
            <button className="control-btn">⏭</button>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default MusicPlayer;