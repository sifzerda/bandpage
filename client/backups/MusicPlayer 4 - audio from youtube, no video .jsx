import React, { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";
import YouTube from "react-youtube";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null); // Create a reference for the YouTube player instance

  // Set the YouTube video ID from the provided URL
  const videoId = "8GW6sLrK40k"; // The YouTube video ID

  const opts = {
    height: "0", // Hide the video display
    width: "0", // Hide the video display
    playerVars: {
      autoplay: 1, // Auto-play the audio
      controls: 0, // Hide the controls
      showinfo: 0, // Hide video info
      modestbranding: 1, // Reduce branding
      rel: 0, // Disable related videos
      iv_load_policy: 3, // Disable annotations
    },
  };

  // YouTube player ready callback to store the player instance
  const onReady = (event) => {
    playerRef.current = event.target; // Store the YouTube player instance
    console.log("Player ready"); // Debugging log
    if (isPlaying) {
      playerRef.current.playVideo();
    }
  };

  const onPlay = () => {
    if (playerRef.current) {
      playerRef.current.playVideo(); // Use the YouTube player instance to play the video
      setIsPlaying(true);
    }
  };

  const onPause = () => {
    if (playerRef.current) {
      playerRef.current.pauseVideo(); // Use the YouTube player instance to pause the video
      setIsPlaying(false);
    }
  };

  return (
    <Draggable>
      <div className="music-player">
        <div className="music-player-header">🎵 Music Player</div>
        <div className="music-player-body">
          <div className="track-info">
            <p className="track-name">Track: Resonance</p>
            <p className="artist-name">Artist: HOME</p>
          </div>
          <div className="youtube-player">
            <YouTube
              videoId={videoId}
              opts={opts}
              onReady={onReady} // Initialize the player when ready
            />
          </div>
          <div className="controls">
            <button className="control-btn" onClick={onPause}>
              ⏮
            </button>
            <button
              className="control-btn"
              onClick={isPlaying ? onPause : onPlay}
            >
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