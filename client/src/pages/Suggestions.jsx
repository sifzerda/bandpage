import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_VIDEOS, QUERY_ME } from "./../utils/queries";
import { REMOVE_VIDEO } from "./../utils/mutations";

const Suggestions = () => {
  // Fetch the list of videos
  const { loading: videosLoading, error: videosError, data: videosData, refetch } = useQuery(QUERY_VIDEOS);
  // Fetch the current logged-in user's details
  const { loading: meLoading, error: meError, data: meData } = useQuery(QUERY_ME);
  const [removeVideo] = useMutation(REMOVE_VIDEO);

  // Show loading states
  if (videosLoading || meLoading) return <p className="loading">Loading...</p>;

  // Show error messages if queries fail
  if (videosError) return <p className="no-results">Error loading videos: {videosError.message}</p>;
  if (meError) return <p className="no-results">Please log in to view the song suggestions</p>;

  // Get the current user's username
  const currentUser = meData?.me?.username;

  // Function to handle video deletion
  const handleDelete = async (videoId, username) => {
    if (username !== currentUser) {
      alert("You can only delete videos which you submitted.");
      return;
    }

    try {
      await removeVideo({ variables: { videoId } });
      refetch(); // Refetch videos after deletion
    } catch (err) {
      console.error("Error deleting video:", err);
    }
  };

  return (
    <div className="suggestions-container">
      <h1 className="title">Video Suggestions</h1>
      <div>
        {videosData?.getVideos?.length > 0 ? (
          <ul className="video-list">
            {videosData.getVideos.map((video) => (
              <li key={video.videoId} className="video-item">
                <h3 className="video-title">{video.title}</h3>
                <p className="video-user">Posted by: <strong>{video.username || "Anonymous"}</strong></p>

                {/* Embedded Video */}
                <iframe
                  title={video.title}
                  width="100%"
                  height="225"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="video-frame"
                ></iframe>

                {/* User comment */}
<p className="video-comment">{video.comment}</p>

                {/* Delete button */}
                <button
                  onClick={() => handleDelete(video.videoId, video.username)}
                  className="delete-button"
                >
                  Delete Post
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-videos">No videos found.</p>
        )}
      </div>
    </div>
  );
};

export default Suggestions;