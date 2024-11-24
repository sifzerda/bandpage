import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client'; 
import { ADD_VIDEO } from './../utils/mutations';   
import axios from 'axios';

const YouTubeSearch = ({ onSaveVideo, onAddToPlaylist }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [videos, setVideos] = useState([]);
  const [pageToken, setPageToken] = useState('');
  const [nextPageToken, setNextPageToken] = useState('');
  const [prevPageToken, setPrevPageToken] = useState('');
  const navigate = useNavigate();

  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

  // Mutation to add video
  const [addVideo, { data, loading, error }] = useMutation(ADD_VIDEO);

  // Function to fetch videos from the YouTube API
  const fetchVideos = async (query, token = '') => {
    const API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&pageToken=${token}&key=${API_KEY}`;
    try {
      const response = await axios.get(API_URL);
      setVideos(response.data.items);
      setNextPageToken(response.data.nextPageToken);
      setPrevPageToken(response.data.prevPageToken || '');
      console.log("Fetched videos:", response.data.items);
    } catch (error) {
      console.error('Error fetching YouTube data', error);
    }
  };

  const handleSearch = () => {
    console.log('Searching for videos with query:', searchQuery);
    if (searchQuery) {
      fetchVideos(searchQuery);
    }
  };

  const handleSave = (videoId, title) => {
    console.log('Saving video with ID:', videoId, 'and title:', title);
    if (onSaveVideo) {
      onSaveVideo(videoId, title);
    }
    if (onAddToPlaylist) {
      onAddToPlaylist({ videoId, title });
    }
  };

  const handlePost = async (video) => {
    console.log("Posting video:", video);
  
    try {
      // Make the GraphQL mutation call 
      console.log("Making GraphQL mutation with variables:", {
        videoId: video.id.videoId,
        title: video.snippet.title,
        comment: 'Posted from YouTube search',
      });
  
      const response = await addVideo({
        variables: {
          videoId: video.id.videoId,
          title: video.snippet.title,
          comment: 'Posted from YouTube search',
        },
      });
  
      console.log('Mutation response:', response);
  
      if (response && response.data && response.data.addVideo) {
        console.log('Video posted:', response.data.addVideo);
        navigate('/Suggestions');
      } else {
        console.error("No video data returned in mutation response.");
      }
    } catch (err) {
      console.error('Error posting video:', err);
    }
  
    // Log any GraphQL mutation errors
    if (error) {
      console.error('GraphQL Mutation Error:', error);
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

              <button onClick={() => handlePost(video)}>Post</button>
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