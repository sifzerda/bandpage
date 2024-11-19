import React from 'react';
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

export default MusicPlayer;