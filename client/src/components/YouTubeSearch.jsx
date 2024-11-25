import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { ADD_VIDEO } from "./../utils/mutations";
import { QUERY_ME } from "./../utils/queries";
import axios from "axios";

const YouTubeSearch = ({ onSaveVideo, onAddToPlaylist }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [videos, setVideos] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]); // State to store search history
  const [pageToken, setPageToken] = useState("");
  const [nextPageToken, setNextPageToken] = useState("");
  const [prevPageToken, setPrevPageToken] = useState("");
  const navigate = useNavigate();

  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

  // Fetch logged-in user's data
  const { data: userData } = useQuery(QUERY_ME);

  // Mutation to add video
  const [addVideo, { data, loading, error }] = useMutation(ADD_VIDEO);

  // Function to fetch videos from the YouTube API
  const fetchVideos = async (query, token = "") => {
    const API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&pageToken=${token}&key=${API_KEY}`;
    try {
      const response = await axios.get(API_URL);
      setVideos(response.data.items);
      setNextPageToken(response.data.nextPageToken);
      setPrevPageToken(response.data.prevPageToken || "");
      console.log("Fetched videos:", response.data.items);
    } catch (error) {
      console.error("Error fetching YouTube data", error);
    }
  };

  const handleSearch = () => {
    if (searchQuery) {
      fetchVideos(searchQuery);

      // Update the search history, ensuring no duplicates
      setSearchHistory((prevHistory) => {
        if (!prevHistory.includes(searchQuery)) {
          return [searchQuery, ...prevHistory].slice(0, 10); // Limit to 10 entries
        }
        return prevHistory;
      });
    }
  };

  const handleSave = (videoId, title) => {
    if (onSaveVideo) {
      onSaveVideo(videoId, title);
    }
    if (onAddToPlaylist) {
      onAddToPlaylist({ videoId, title });
    }
  };

  const handlePost = async (video) => {
    const username = userData?.me?.username; // Extract the username from the user's data
  
    if (!username) {
      alert("You must be logged in to post a video to the suggestions page");
      return; // Exit the function early if user is not logged in
    }
  
    try {
      const response = await addVideo({
        variables: {
          videoId: video.id.videoId,
          title: video.snippet.title,
          comment: "Posted from YouTube search",
          username: username, // Include username in the mutation
        },
      });
  
      if (response?.data?.addVideo) {
        console.log("Video posted successfully");
        navigate("/Suggestions");
      } else {
        console.error("No video data returned in mutation response.");
      }
    } catch (err) {
      console.error("Error posting video:", err);
    }
  
    if (error) {
      console.error("GraphQL Mutation Error:", error);
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

      {/* Search History */}
      <div>
        <h4>Search History:</h4>
        {searchHistory.length > 0 ? (
          <ul>
            {searchHistory.map((query, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    setSearchQuery(query); // Set the search bar text to the selected query
                    fetchVideos(query); // Re-fetch videos for this query
                  }}
                  style={{
                    background: "none",
                    border: "none",
                    color: "blue",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                >
                  {query}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No previous searches.</p>
        )}
      </div>

      <div>
        <h3>Video Results:</h3>
        {videos.map((video) => {
          const videoId = video.id?.videoId; // Safely extract videoId
          if (!videoId) return null; // Skip rendering if videoId is missing

          return (
            <div
              key={videoId}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
                border: "1px solid #ddd",
                padding: "5px",
                borderRadius: "5px",
              }}
            >
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                width="120"
                style={{ marginRight: "10px" }}
              />
              <div>
                <p>{video.snippet.title}</p>
                <button onClick={() => handleSave(videoId, video.snippet.title)}>
                  Add to Playlist
                </button>
                <button onClick={() => handlePost(video)}>Post</button>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: "20px" }}>
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