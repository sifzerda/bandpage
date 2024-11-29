import React, { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";
import YouTube from "react-youtube";
import { FaVolumeUp, FaVolumeMute, FaVolumeOff } from "react-icons/fa";

const MusicPlayer = ({ playlist }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.3);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showVolumeControl, setShowVolumeControl] = useState(false);

  const playerRef = useRef(null);

  const defaultSong = "8GW6sLrK40k"; // The YouTube video ID for the default song
  const isPlaylistEmpty = playlist.length === 0;
  const currentVideo = isPlaylistEmpty
    ? { videoId: defaultSong, title: "HOME - Resonance" }
    : playlist[currentIndex];

  const opts = {
    height: "0",
    width: "0",
    playerVars: {
      autoplay: 1,
      controls: 0,
    },
  };

  const onReady = (event) => {
    playerRef.current = event.target;
    playerRef.current.setVolume(volume * 100);
    if (currentVideo) {
      playerRef.current.loadVideoById(currentVideo.videoId);
    }
    setDuration(playerRef.current.getDuration()); // Set initial duration
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

  const togglePlayPause = () => {
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (playerRef.current) {
      playerRef.current.setVolume(newVolume * 100);
    }
  };

  const toggleVolumeControl = () => {
    setShowVolumeControl((prev) => !prev);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleProgressBarClick = (e) => {
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newProgress = (offsetX / rect.width) * duration;
    setCurrentTime(newProgress);
    if (playerRef.current) {
      playerRef.current.seekTo(newProgress, true);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef.current && isPlaying) {
        const current = playerRef.current.getCurrentTime();
        const total = playerRef.current.getDuration();

        console.log("Current Time:", current); // Debugging log
        console.log("Duration:", total); // Debugging log

        setCurrentTime(current);
        if (total > 0) {
          setDuration(total); // Set duration only if valid
        }
      }
    }, 500); // Check progress every 500ms

    return () => clearInterval(interval);
  }, [isPlaying]);

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="music-player-container">
<Draggable cancel=".progress-bar-container, .volume-control, .playlist-container">
  <div className="music-player">
    <div className="title-bar">
      <button
        className="playlist-toggle"
        onClick={() => setShowPlaylist((prev) => !prev)}
      >
        {showPlaylist ? "Hide Playlist" : "Playlist"}
      </button>
    </div>
    <div className="music-player-body">
      {currentVideo ? (
        <>
          <span className="now-playing-label">Now Playing:</span>
          <div className="title-x">
            <div className="title"> {currentVideo.title}</div>
          </div>
          <YouTube
            videoId={currentVideo.videoId}
            opts={opts}
            onReady={onReady}
          />
          <div
            className="progress-bar-container"
            onClick={handleProgressBarClick}
          >
            <div
              className="progress-bar"
              style={{ width: `${progress}%` }}
            ></div>
            <div className="progress-time">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>
          {/* Play/Pause controls */}
          <div className="controls">
            <button onClick={playPrevious} disabled={currentIndex === 0}>
              ⏮
            </button>
            <button onClick={togglePlayPause}>
              {isPlaying ? "⏸️" : "▶️"}
            </button>
            <button
              onClick={playNext}
              disabled={currentIndex === playlist.length - 1}
            >
              ⏭
            </button>
          </div>
          {/* Volume controls */}
          <div className="volume-controls">
            <button className="volume-toggle" onClick={toggleVolumeControl}>
              {volume === 0 ? (
                <FaVolumeMute />
              ) : volume <= 0.5 ? (
                <FaVolumeOff />
              ) : (
                <FaVolumeUp />
              )}
            </button>
            {showVolumeControl && (
              <div className="volume-control">
                <input
                  className="volume-slider"
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                />
              </div>
            )}
          </div>
        </>
      ) : (
        <p>No video selected</p>
      )}
    </div>
    {showPlaylist && (
      <div className="playlist-container">
        <ul>
          {isPlaylistEmpty ? (
            <li
              style={{
                fontWeight: currentIndex === 0 ? "bold" : "normal",
              }}
              onClick={() => setCurrentIndex(0)}
            >
              HOME - Resonance
            </li>
          ) : (
            playlist.map((video, index) => (
              <li
                key={index}
                style={{
                  fontWeight: index === currentIndex ? "bold" : "normal",
                }}
                onClick={() => setCurrentIndex(index)}
              >
                {video.title}
              </li>
            ))
          )}
        </ul>
      </div>
    )}
  </div>
</Draggable>
    </div>
  );
};

export default MusicPlayer;