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
  if (videosLoading || meLoading) return <p>Loading...</p>;

  // Show error messages if queries fail
  if (videosError) return <p>Error loading videos: {videosError.message}</p>;
  if (meError) return <p>Please log in to view the song suggestions</p>;

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
    <div>
      <h1>Video Suggestions</h1>
      <div>
        {videosData?.getVideos?.length > 0 ? (
          <ul className="no-bullets">
            {videosData.getVideos.map((video) => (
              <li key={video.videoId} style={{ marginBottom: "20px" }}>
                <h3>{video.title}</h3>
                <p>{video.comment}</p>
                <p>Posted by: {video.username || "Anonymous"}</p>
                
                {/* Thumbnail with link to the video 
                <a
                  href={`https://www.youtube.com/watch?v=${video.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                    alt={`Thumbnail for ${video.title}`}
                    style={{ width: "100%", maxWidth: "400px", cursor: "pointer" }}
                  />
                </a> 
                */}

                {/* Optional: Embed the video directly */}
                <iframe
                  title={video.title}
                  width="400"
                  height="225"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ marginTop: "10px" }}
                ></iframe>

                {/* Delete button */}
                <button
                  onClick={() => handleDelete(video.videoId, video.username)}
                  style={{
                    marginTop: "10px",
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    cursor: "pointer",
                  }}
                >
                  Delete Post
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No videos found.</p>
        )}
      </div>
    </div>
  );
};

export default Suggestions;