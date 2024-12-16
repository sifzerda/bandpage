import React, { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";
import YouTube from "react-youtube";
import { DragDropContext, Droppable, Draggable as DnDItem } from "react-beautiful-dnd";
import { FaVolumeUp, FaVolumeMute, FaVolumeOff } from "react-icons/fa";

const MusicPlayer = ({ playlist, setPlaylist }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.3); // Default volume is 30%
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

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
    playerRef.current.setVolume(volume * 100); // Set initial volume
    if (currentVideo) {
      playerRef.current.loadVideoById(currentVideo.videoId);
    }
    setDuration(playerRef.current.getDuration());
  };

  const onEnd = () => {
    if (currentIndex < playlist.length - 1) {
      setCurrentIndex((prev) => prev + 1); // Move to the next video
    } else {
      setIsPlaying(false); // Stop playback if at the end of the playlist
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

  const handleDelete = (indexToDelete) => {
    setPlaylist((prevPlaylist) => {
      const newPlaylist = prevPlaylist.filter((_, index) => index !== indexToDelete);

      // Adjust currentIndex if the deleted song was the current song
      if (indexToDelete === currentIndex) {
        return newPlaylist.length > 0 ? newPlaylist : [];
      }
      setCurrentIndex((prevIndex) => (prevIndex > indexToDelete ? prevIndex - 1 : prevIndex));
      return newPlaylist;
    });
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(playlist);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setPlaylist(items);

    // Adjust currentIndex if needed
    if (result.source.index === currentIndex) {
      setCurrentIndex(result.destination.index);
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleProgressBarChange = (e) => {
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newProgress = (offsetX / rect.width) * 100;
    const newTime = (newProgress / 100) * duration;
    if (playerRef.current) {
      playerRef.current.seekTo(newTime, true); // Use seekTo to change the video time
    }
    setCurrentTime(newTime);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    handleProgressBarChange(e);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleProgressBarChange(e);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const toggleMute = () => {
    setIsMuted(prevState => {
      const newMuteState = !prevState;
      if (newMuteState) {
        setVolume(0); // Mute the volume
      } else {
        setVolume(0.3); // Set to default volume when unmuted
      }
      return newMuteState;
    });
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value / 100;
    setVolume(newVolume);
    if (newVolume > 0 && isMuted) {
      setIsMuted(false); // Unmute if the volume is adjusted
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef.current && isPlaying) {
        const current = playerRef.current.getCurrentTime();
        const total = playerRef.current.getDuration();

        setCurrentTime(current);
        if (total > 0) {
          setDuration(total);
        }
      }
    }, 500);

    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    if (playerRef.current) {
      // Update volume when the volume or mute state changes
      if (isMuted) {
        playerRef.current.setVolume(0);
      } else {
        playerRef.current.setVolume(volume * 100);
      }
    }
  }, [volume, isMuted]);

  const progress = duration ? (currentTime / duration) * 100 : 0;

  // RENDER ---------------------------------------------------//

  return (
    <div className="music-player-container">
      <Draggable cancel=".progress-bar-container, .volume-controls, .playlist-container">
        <div className="music-player">
          <div className="title-bar">
            <button
              className="playlist-toggle"
              onClick={() => setShowPlaylist((prev) => !prev)}
            >
              {showPlaylist ? "Hide Playlist" : "Playlist"}
            </button>
{/*-------------------------------------------------------------------------------*/ }
          </div>
          <div className="music-player-body">
            {currentVideo ? (
              <>
                <span className="now-playing-label">Now Playing:</span>
                <div className="title-x">
                  <div className="marquee-text">
                    <div className="title rainbow-text">{currentVideo.title}</div>
                  </div>
                </div>
                <YouTube
                  videoId={currentVideo.videoId}
                  opts={opts}
                  onReady={onReady}
                  onEnd={onEnd} // Trigger playNext when video ends
                />
                <div
                  className="progress-bar-container"
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                >
                  <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                  <div className="progress-time">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </div>
                </div>
                {/* Playback Controls ------------------------------------ */}
                <div className="controls">
                  <button
                    className="press-play"
                    onClick={playPrevious}
                    disabled={currentIndex === 0}
                  >
                    ⏮
                  </button>
                  <button className="press-play" onClick={togglePlayPause}>
                    {isPlaying ? "⏸️" : "▶️"}
                  </button>
                  <button
                    className="press-play"
                    onClick={playNext}
                    disabled={currentIndex === playlist.length - 1}
                  >
                    ⏭
                  </button>
                </div>

                {/* Volume Control ------------------------------------ */}
                <div className="volume-controls">
                  <button className="control-button" onClick={toggleMute}>
                    {isMuted ? <FaVolumeMute /> : volume < 0.5 ? <FaVolumeOff /> : <FaVolumeUp />}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={isMuted ? 0 : volume * 100} // If muted, set slider to 0
                    onChange={handleVolumeChange}
                    className="volume-slider"
                  />
                </div>
                {/* Playlist ------------------------------------ */}
              </>
            ) : (
              <p>No video selected</p>
            )}
          </div>
          {showPlaylist && (
            <DragDropContext onDragEnd={handleDragEnd}>
              <Droppable droppableId="playlist">
                {(provided) => (
                  <ul
                    className="playlist-container"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {playlist.map((video, index) => (
                      <DnDItem key={video.videoId} draggableId={video.videoId} index={index}>
                        {(provided) => (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              ...provided.draggableProps.style,
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              fontWeight: index === currentIndex ? "bold" : "normal",
                              backgroundColor: "#f0f0f0",
                              padding: "8px",
                              marginBottom: "4px",
                              borderRadius: "4px",
                            }}
                          >
                            <span onClick={() => setCurrentIndex(index)}>{video.title}</span>
                            <button onClick={() => handleDelete(index)}>🗑️</button>
                          </li>
                        )}
                      </DnDItem>
                    ))}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </DragDropContext>
          )}
        </div>
      </Draggable>

    </div>
  );
};

export default MusicPlayer;