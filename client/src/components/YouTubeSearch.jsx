import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { ADD_VIDEO } from "./../utils/mutations";
import { QUERY_ME } from "./../utils/queries";
import axios from "axios";
import { toast } from "react-toastify";

const YouTubeSearch = ({ onSaveVideo, onAddToPlaylist }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]); // State for autocomplete suggestions
  const [videos, setVideos] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  const [pageToken, setPageToken] = useState("");
  const [nextPageToken, setNextPageToken] = useState("");
  const [prevPageToken, setPrevPageToken] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false); // Show confirmation dialog
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

  const fetchSuggestions = async (query) => {
    if (!query) {
      setSuggestions([]); // Clear suggestions if query is empty
      return;
    }
    const API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&type=video&key=${API_KEY}`;
    try {
      const response = await axios.get(API_URL);
      setSuggestions(response.data.items);
    } catch (error) {
      console.error("Error fetching YouTube suggestions", error);
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

    toast.success(`Added "${title}" to your playlist!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handlePost = async (video) => {
    const username = userData?.me?.username;

    if (!username) {
      toast.error("You must be logged in to post a video.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    if (!video.comment.trim()) {
      setShowConfirmation(true); // Show confirmation dialog
      return;
    }

    try {
      await addVideo({
        variables: {
          videoId: video.id.videoId,
          title: video.snippet.title,
          comment: video.comment || "Posted from YouTube search", // Use custom comment or default
          username,
        },
      });
      toast.success(`Posted "${video.snippet.title}" successfully!`);
      video.comment = ""; // Clear the comment after posting
    } catch (err) {
      toast.error("Error posting the video. Please try again.");
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
          onChange={(e) => {
            setSearchQuery(e.target.value);
            fetchSuggestions(e.target.value); // Fetch suggestions on input change
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          placeholder="Search YouTube videos..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {suggestions.length > 0 && (
        <div className="autocomplete-suggestions">
          <ul>
            {suggestions.map((suggestion) => (
              <li key={suggestion.id.videoId}>
                <button className='suggestion-btn'
                  onClick={() => {
                    setSearchQuery(suggestion.snippet.title);
                    fetchVideos(suggestion.snippet.title);
                  }}
                >
                  {suggestion.snippet.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

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
        <br></br>
        <h3>Video Results:</h3>

        <div className="pagination">
  {prevPageToken && <button onClick={() => fetchVideos(searchQuery, prevPageToken)}>Previous</button>}
  {nextPageToken && <button onClick={() => fetchVideos(searchQuery, nextPageToken)}>Next</button>}
</div>

        {videos.map((video) => {
          const videoId = video.id?.videoId;
          if (!videoId) return null;

          return (
            <div key={videoId} className="video-result">
              <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noopener noreferrer">
                <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} width="160" height="90" />
              </a>

              <div>
                <h4>{video.snippet.title}</h4>
                <input
                  type="text"
                  value={video.comment}
                  onChange={(e) => (video.comment = e.target.value)} // Update the comment for this specific video
                  placeholder="Add a custom comment (optional)"
                  className="comment-input"
                />
                <button onClick={() => handleSave(videoId, video.snippet.title)}>Add to Playlist</button>
                <button onClick={() => handlePost(video)}>Post</button>
              </div>
            </div>
          );
        })}
      </div>

      {showConfirmation && (
        <div className="confirmation-dialog">
          <p>Do you want to leave a comment?</p>
          <button
            onClick={() => {
              setShowConfirmation(false);
            }}
          >
            No
          </button>
          <button onClick={() => handlePost(video)}>Yes</button>
        </div>
      )}
    </div>
  );
};

export default YouTubeSearch;