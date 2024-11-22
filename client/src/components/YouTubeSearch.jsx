import React, { useState } from 'react';
import axios from 'axios';

const YouTubeSearch = ({ onSaveVideo, onAddToPlaylist }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [videos, setVideos] = useState([]);
  const [pageToken, setPageToken] = useState('');
  const [nextPageToken, setNextPageToken] = useState('');
  const [prevPageToken, setPrevPageToken] = useState('');

  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

  const fetchVideos = async (query, token = '') => {
    const API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&pageToken=${token}&key=${API_KEY}`;
    try {
      const response = await axios.get(API_URL);
      setVideos(response.data.items);
      setNextPageToken(response.data.nextPageToken);
      setPrevPageToken(response.data.prevPageToken || '');
    } catch (error) {
      console.error('Error fetching YouTube data', error);
    }
  };

  const handleSearch = () => {
    if (searchQuery) {
      fetchVideos(searchQuery);
    }
  };

  const handleSave = (videoId, title) => {
    const video = { videoId, title };
    if (onSaveVideo) {
      onSaveVideo(videoId, title); // Save single video to the player
    }
    if (onAddToPlaylist) {
      onAddToPlaylist(video); // Add video to the playlist
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search YouTube videos"
      />
      <button onClick={handleSearch}>Search</button>

      <div>
        <h3>Video Results:</h3>
        {videos.map((video) => (
          <div
            key={video.id.videoId}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px',
              border: '1px solid #ddd',
              padding: '5px',
              borderRadius: '5px',
            }}
          >
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              width="120"
              style={{ marginRight: '10px' }}
            />
            <div>
              <p>{video.snippet.title}</p>
              <button onClick={() => handleSave(video.id.videoId, video.snippet.title)}>
                Add to Playlist
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '20px' }}>
        <button
          onClick={() => fetchVideos(searchQuery, prevPageToken)}
          disabled={!prevPageToken}
        >
          Previous Page
        </button>
        <button
          onClick={() => fetchVideos(searchQuery, nextPageToken)}
          disabled={!nextPageToken}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default YouTubeSearch;