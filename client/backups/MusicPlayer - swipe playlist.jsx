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
    ? { videoId: defaultSong, title: "Default Song" }
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
        setCurrentTime(playerRef.current.getCurrentTime());
        setDuration(playerRef.current.getDuration());
      }
    }, 500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="music-player-container">
      <Draggable cancel=".progress-bar-container, .volume-control">
        <div className="music-player">
          <div className="title-bar">
            <button
              className="playlist-toggle"
              onClick={() => setShowPlaylist((prev) => !prev)}
            >
              {showPlaylist ? "Hide Playlist" : "Show Playlist"}
            </button>
          </div>
          <div className="music-player-body">
            {currentVideo ? (
              <>
                <div className="title">Now Playing: {currentVideo.title}</div>
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
                <div className="controls">
                  <button onClick={playPrevious} disabled={currentIndex === 0}>
                    ⏮ Previous
                  </button>
                  <button onClick={togglePlayPause}>
                    {isPlaying ? "Pause" : "Play"}
                  </button>
                  <button
                    onClick={playNext}
                    disabled={currentIndex === playlist.length - 1}
                  >
                    Next ⏭
                  </button>
                  <button
                    className="volume-toggle"
                    onClick={toggleVolumeControl}
                  >
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
          <div
            className={`playlist-container ${
              showPlaylist ? "visible" : "hidden"
            }`}
          >
            <h3>Playlist</h3>
            <ul>
              {playlist.map((video, index) => (
                <li
                  key={index}
                  style={{
                    fontWeight: index === currentIndex ? "bold" : "normal",
                  }}
                  onClick={() => setCurrentIndex(index)}
                >
                  {video.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default MusicPlayer;









CSS for MusicPlayer.jsx

/* Import Google fonts - Josefin+Sans, Outfit, Source Code Pro, Rubik, Jersey 10, Space Grotesk */
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');
@import url('https://fonts.googleapis.com/css2?&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Rubik+Mono+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

:root {
  --blue: #2684ff;
  --lblue: #4f9bff;
  --light-blue: #87f7f1;
  --volt: #c8ff00;
  --dark-blue: #000102;
  --yellow: #e5dc15;
  --dark-yellow: #c2bb11;
  --bootstrap-dark: #212529;
  --bootstrap-lighter: #364459;
  --bootstrap-lightest: #96a4b3;
  --cyan: #01fff7;
  --light-red: #f02652;
  --gold: #ffc107;
  --creepy-green: #9cffd9;
  --creepy-green2:  #cefff4;
  --midnight: rgb(8, 29, 88);
  --flame: #ff3300;
  --flame2: #e5ff00;
  --flame3: #ff5e00;
  --asteroid-canvas: #15151F;
}

#root {
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.card {
  padding: 2em;
}

/* --------------------- custom -----------------------*/

body {
  padding-bottom: 60px; /* Add padding equal to the music player's height to avoid overlapping content */
}

/* Ensure the entire page fills the viewport */
html, body {
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
}

/* Main content of the page */
#root, .main-content {
  flex: 1; /* Allows content to grow and push the footer down */
  display: flex;
  flex-direction: column;
}

.main-content {
padding-bottom: 30px; /* Add some space at the bottom */
}

/* --------------------- header -----------------------*/

header {
  background-color: #222; /* Optional: Customize */
  color: white; /* Optional: Customize */
  padding: 20px 0;
  text-align: center;
}

/* ------------------- nav tabs -----------------------*/

.nav-tabs {
  display: flex;
  width: 100%;
}

.right-username {
  margin-left: auto; /* Pushes this item to the right side */
}


/* --------------------- footer -----------------------*/

footer {
  background-color: #222; /* Optional: Customize */
  color: white; /* Optional: Customize */
  padding: 20px 0;
  margin-top: auto; /* Push the footer to the bottom */
  text-align: center;
}

/* --------------------- calender -----------------------*/

.calendar {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centers the content horizontally */
  justify-content: flex-start; /* Aligns items to the top */
  margin-top: 20px; /* Adds some space at the top if needed */
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr); /* 7 days a week */
  gap: 5px;
}

.calendar-day {
  border: 1px solid #000000;
  border-radius: 5px;
  padding: 10px;
  min-height: 100px;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  background-color: rgb(182, 222, 245);
  position: relative;
}

.date-label {
  font-weight: bold;
  margin-bottom: 5px;
}

.note-row {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 10px;
}

.note-row-item {
  padding: 6px;
  border: 2px solid #555555;
  border-radius: 3px;
  text-align: center;
  font-size: 15px;
  cursor: pointer;
}

.note-row-item.normal {
  background-color: white;
}

.note-row-item.green {
  background-color:  rgb(170, 252, 116); /* Light green */
  color: black;
}

.note-row-item.red {
  background-color: #f08181; /* Light red */
  color: black;
}

.note-field {
  display: flex;
  align-items: center;
  gap: 10px;
}

.note-label {
  font-weight: bold;
  width: 80px; /* Adjust width as needed for alignment */
}

.note-input {
  flex-grow: 1;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
  padding: 5px;
  font-size: 14px;
}

.note-input:disabled {
  background-color: #e9ecef;
  color: #6c757d;
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.calendar-header h2 {
  margin: 0;
  font-size: 1.5rem;
}

.calendar-header button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.calendar-header button:hover {
  background-color: #0056b3;
}

.calendar-day.past-day {
  background-color: #f0f0f0;
  pointer-events: none; /* Prevent all interactions */
  color: #aaa;
}

.calendar-day.current-day {
  background-color: #fff9c4; /* Yellow highlight */
  border: 4px dashed #007bff;
}

/* buttons: save */

.save-button {
  width: 150px; /* Set a fixed width for the button */
  margin-top: 20px;
  padding: 12px 24px;
  background-color: #4caf50;
  color: white;
  border: 2px solid #000000;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08); /* 3D shadow effect */
  transition: all 0.2s ease-in-out; /* Smooth transition for hover and click */
}

.save-button:hover {
  background-color: #45a049;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12); /* Hover shadow */
  transform: translateY(-2px); /* Lift the button on hover */
}

.save-button:active {
  background-color: #388e3c;
  box-shadow: inset 0 4px 6px rgba(0, 0, 0, 0.2), 0 2px 3px rgba(0, 0, 0, 0.1); /* Depress shadow when clicked */
  transform: translateY(2px); /* Button appears pressed down */
}

div.color-box {
  display: flex;
  justify-content: center;
  gap: 10px;
}

p.red-text {
  color: rgb(0, 0, 0);
  border: 2px solid black;
  background-color: rgb(255, 148, 148);
  padding: 5px;
}

p.green-text {
  color: rgb(0, 0, 0);
  border: 2px solid black;
  background-color: rgb(191, 255, 148);
  padding: 5px;
}

p.white-text {
  color: rgb(0, 0, 0);
  border: 2px solid black;
  background-color: rgb(255, 255, 255);
  padding: 5px;
}

/* buttons: next previous */

.calendar-header button {
  background-color: #4466ff; 
  color: white;              /* White text */
  font-size: 16px;           /* Font size */
  padding: 10px 20px;        /* Padding for button */
  border: 2px solid rgb(0, 0, 0);             /* Remove border */
  border-radius: 5px;        /* Rounded corners */
  cursor: pointer;           /* Pointer cursor */
  transition: background-color 0.3s ease; /* Smooth transition on hover */
}

/* Hover effect for the buttons */
.calendar-header button:hover {
  background-color: #72f6ff; 
  color: rgb(0, 0, 0);    
}

/* Styling for the month heading (centered) */
.calendar-header h2 {
  font-size: 24px;
  font-weight: bold;
  margin: 0 20px;  /* Spacing between buttons and heading */
}

/* --------------------- music player -----------------------*/

.music-player {
  width: 300px;
  align-items: center;
  /* Center content horizontally */
  text-align: center;
  padding: 13px;
  border: 2px solid #00FF00;
  background: #333;
  color: #00FF00;
  border-radius: 10px;
  background: #2a2a2a;
  color: #fff;
  box-shadow: 0 0 20px #00FF00;
  font-family: 'VT323', monospace;
  cursor: grab;
}

.title-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background-color: #444;
  color: #fff;
}

.title {
  display: inline-block;
  width: 105%;
  /* has to be slightly bigger so text scroll disappears fully*/
  animation: marquee 15s linear infinite;
  color: #00FF00;
  white-space: nowrap;
  /* Prevent text from wrapping */
}

@keyframes marquee {
  0% {
      transform: translateX(100%);
  }

  100% {
      transform: translateX(-100%);
  }
}

.controls {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  /* Center content horizontally */
}

.play-pause-controls {
  display: inline-block;
  text-align: center;
  flex: 1;
}

.volume-controls {
  position: absolute;
  right: 10px;
  /* Adjust the space from the right edge */
  text-align: center;
}

.control-button {
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #48ff00;
  margin: 0 10px;
  /* Space between buttons */
  border: 2px solid rgb(60, 255, 0);
  border-radius: 5px;
  padding: 2px 8px;
}

.control-button:hover {
  color: #0056b3;
}

.volume-toggle {
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #007bff;
}

.volume-toggle:hover {
  color: #00e1ff;
}

.volume-control {
  margin-top: 5px;
  /* Space between toggle button and slider */
}

.volume-slider {
  width: 100px;
  /* Adjust width as needed */
}

.volume-control {
  position: absolute;
  bottom: 50%;
  /* Adjust based on your layout */
  right: 0;
  transform: translateY(50%);
  /* Center vertically relative to button */
  display: flex;
  align-items: center;
  z-index: 10;
  /* Ensure it's above other elements */
}

.progress-bar-container {
  width: 100%;
  background: #ddd;
  height: 8px;
  border-radius: 5px;
  margin: 10px 0;
  position: relative;
}

.progress-bar {
  height: 100%;
  background: #007bff;
  border-radius: 5px;
  width: 0%;
  /* Will be dynamically updated */
  transition: width 0.2s;
}

.progress-time {
  position: absolute;
  top: 10px;
  right: 0;
  font-size: 12px;
  color: #333;
}

.music-player:active {
  cursor: grabbing;
}

.music-player-header {
  background: #444;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  border-radius: 10px 10px 0 0;
  user-select: none;
}

.music-player-body {
  padding: 10px;
}

.track-info {
  margin-bottom: 10px;
}

.track-name,
.artist-name {
  margin: 0;
}

.controls {
  display: flex;
  justify-content: space-around;
}

.control-btn {
  background: #555;
  border: none;
  border-radius: 5px;
  color: #fff;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.control-btn:hover {
  background: #777;
}

/* ------------- mp is on top of other page contents -------------*/

.music-player-container {
  position: fixed; /* Ensures the music player stays in place */
  bottom: 0; /* Anchors the player to the bottom of the viewport */
  left: 0;
  right: 0;
  z-index: 1000; /* Ensures it appears on top of other content */
  padding: 10px; /* Optional: Add padding for better aesthetics */
}

.music-player {
  background-color: #222;
  color: white;
  width: 300px;
  border: 1px solid #444;
  border-radius: 10px;
  overflow: hidden;
}

.music-player-header {
  background-color: #444;
  padding: 10px;
  text-align: center;
  font-size: 1.2em;
  border-bottom: 1px solid #555;
}

.music-player-body {
  padding: 10px;
}

.controls {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

.playlist-container {
  position: absolute;
  top: 50px; /* Below the button */
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
  background-color: #222;
  color: white;
  padding: 10px;
  border: 1px solid #555;
}

.playlist-toggle {
  background-color: #222;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.playlist-toggle:hover {
  background-color: #555;
}

.playlist-container.visible {
  right: 0;
}

.playlist-container.hidden {
  right: -300px;
}

/*
.playlist {
  max-height: 150px;  Limit the height 
  overflow-y: auto; 
  margin-top: 10px;
  padding: 10px;
  background-color: #333;
  border-top: 1px solid #555;
} 
*/

.playlist h3 {
  margin-top: 0;
  font-size: 1.1em;
  color: #ddd;
}

.playlist ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.playlist li {
  padding: 5px 0;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.playlist li:hover {
  background-color: #555;
}

.progress-bar-container {
  cursor: pointer;
}