import React, { useState, useEffect, useRef } from 'react';
import Draggable from 'react-draggable';
import YouTube from 'react-youtube';

const MusicPlayer = ({ savedVideo }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  const opts = {
    height: '0',
    width: '0',
    playerVars: {
      autoplay: 1,
      controls: 0,
      showinfo: 0,
      modestbranding: 1,
      rel: 0,
      iv_load_policy: 3,
    },
  };

  const onReady = (event) => {
    playerRef.current = event.target;
    if (isPlaying) {
      playerRef.current.playVideo();
    }
  };

  const onPlay = () => {
    if (playerRef.current) {
      playerRef.current.playVideo();
      setIsPlaying(true);
    }
  };

  const onPause = () => {
    if (playerRef.current) {
      playerRef.current.pauseVideo();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    if (savedVideo && playerRef.current) {
      playerRef.current.loadVideoById(savedVideo.videoId);
      setIsPlaying(true);
    }
  }, [savedVideo]);

  return (
    <Draggable>
      <div className="music-player">
        <div className="music-player-header">🎵 Music Player</div>
        <div className="music-player-body">
          <div className="track-info">
            <p className="track-name">Track: {savedVideo?.title || 'No track selected'}</p>
          </div>
          <div className="youtube-player">
            <YouTube videoId={savedVideo?.videoId || ''} opts={opts} onReady={onReady} />
          </div>
          <div className="controls">
            <button onClick={onPause}>⏮</button>
            <button onClick={isPlaying ? onPause : onPlay}>
              {isPlaying ? '⏸' : '⏯'}
            </button>
            <button>⏭</button>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default MusicPlayer;