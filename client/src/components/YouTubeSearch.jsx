import React, { useState, useEffect } from 'react';
import axios from 'axios';

const YouTubeSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null); // Start with a placeholder video
  const [selectedVideoTitle, setSelectedVideoTitle] = useState(''); // Store the title of the selected video
  const [pageToken, setPageToken] = useState('');
  const [nextPageToken, setNextPageToken] = useState('');
  const [prevPageToken, setPrevPageToken] = useState('');

  const API_KEY = 'AIzaSyCcKs8Miz82FFDXZb6zU9Yfgkt0JZzdiWg';

  const fetchVideos = async (query, token = '') => {
    const API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&pageToken=${token}&key=${API_KEY}`;
    
    try {
      const response = await axios.get(API_URL);
      setVideos(response.data.items);
      setNextPageToken(response.data.nextPageToken);
      setPrevPageToken(response.data.prevPageToken || '');
      setPageToken(response.data.prevPageToken || ''); // For initial pagination
    } catch (error) {
      console.error('Error fetching YouTube data', error);
    }
  };

  const handleSearch = async () => {
    if (searchQuery) {
      fetchVideos(searchQuery);
      setSelectedVideo(null); // Reset selected video when new search is done
      setSelectedVideoTitle(''); // Reset video title on new search
    }
  };

  const handleVideoSelect = (videoId, title) => {
    setSelectedVideo(videoId);
    setSelectedVideoTitle(title); // Update the title of the selected video
  };

  const handlePrevPage = () => {
    if (prevPageToken) {
      fetchVideos(searchQuery, prevPageToken);
    }
  };

  const handleNextPage = () => {
    if (nextPageToken) {
      fetchVideos(searchQuery, nextPageToken);
    }
  };

  useEffect(() => {
    // Initialize with the provided video before search
    setSelectedVideo('8GW6sLrK40k'); // Provided video ID as the placeholder
    setSelectedVideoTitle('HOME - Resonance'); // Title for the placeholder video
  }, []);

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
        {/* Show the placeholder video above the playlist */}
        <h3>Now Playing:</h3>

        {/* Display selected video title below Now Playing */}
        {selectedVideoTitle && (
          <p><strong>{selectedVideoTitle}</strong></p>
        )}

        <iframe
          width="360"
          height="202"
          src={selectedVideo ? `https://www.youtube.com/embed/${selectedVideo}` : 'https://www.youtube.com/embed/8GW6sLrK40k'}
          frameBorder="0"
          allowFullScreen
          title="YouTube Video"
        ></iframe>

      </div>

      <div>
        {videos.length > 0 && (
          <div>
            <h3>Video Playlist:</h3>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
              <button onClick={handlePrevPage} disabled={!prevPageToken}>
                &lt; Previous
              </button>
              <button onClick={handleNextPage} disabled={!nextPageToken}>
                Next &gt;
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {videos.map((video) => (
                <div
                  key={video.id.videoId}
                  onClick={() => handleVideoSelect(video.id.videoId, video.snippet.title)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
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
                    style={{ marginRight: '10px', borderRadius: '5px' }}
                  />
                  <div>{video.snippet.title}</div>
                </div>
              ))}
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default YouTubeSearch;