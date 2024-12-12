import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { ADD_VIDEO } from "./../utils/mutations";
import { QUERY_ME } from "./../utils/queries";
import axios from "axios";

const YouTubeSearch = ({ onSaveVideo, onAddToPlaylist }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [videos, setVideos] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  const [pageToken, setPageToken] = useState("");
  const [nextPageToken, setNextPageToken] = useState("");
  const [prevPageToken, setPrevPageToken] = useState("");
  const navigate = useNavigate();

  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  const { data: userData } = useQuery(QUERY_ME);
  const [addVideo] = useMutation(ADD_VIDEO);

  const fetchVideos = async (query, token = "") => {
    const API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&pageToken=${token}&key=${API_KEY}`;
    try {
      const response = await axios.get(API_URL);
      setVideos(response.data.items);
      setNextPageToken(response.data.nextPageToken);
      setPrevPageToken(response.data.prevPageToken || "");
    } catch (error) {
      console.error("Error fetching YouTube data", error);
    }
  };

  const handleSearch = () => {
    if (searchQuery) {
      fetchVideos(searchQuery);
      setSearchHistory((prev) => {
        if (!prev.includes(searchQuery)) {
          return [searchQuery, ...prev].slice(0, 10);
        }
        return prev;
      });
    }
  };

  const handleSave = (videoId, title) => {
    if (onSaveVideo) onSaveVideo(videoId, title);
    if (onAddToPlaylist) onAddToPlaylist({ videoId, title });
  };

  const handlePost = async (video) => {
    const username = userData?.me?.username;

    if (!username) {
      alert("You must be logged in to post a video.");
      return;
    }

    try {
      await addVideo({
        variables: {
          videoId: video.id.videoId,
          title: video.snippet.title,
          comment: "Posted from YouTube search",
          username,
        },
      });
    } catch (err) {
      console.error("Error posting video:", err);
    }
  };

  return (
    <div className="youtube-search">
      <h1>YouTube Search</h1>
      <div className="search-bar">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          placeholder="Search YouTube videos..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {searchHistory.length > 0 && (
        <div className="search-history">
          <h4>Search History:</h4>
          <ul>
            {searchHistory.map((query, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    setSearchQuery(query);
                    fetchVideos(query);
                  }}
                >
                  {query}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <h3>Video Results:</h3>
        {videos.map((video) => {
          const videoId = video.id?.videoId;
          if (!videoId) return null;

          return (
            <div key={videoId} className="video-result">
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                width="160"
                height="90"
              />
              <div>
                <h4>{video.snippet.title}</h4>
                <button onClick={() => handleSave(videoId, video.snippet.title)}>
                  Add to Playlist
                </button>
                <button onClick={() => handlePost(video)}>Post</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default YouTubeSearch;