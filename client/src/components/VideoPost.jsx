import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_VIDEOS } from './../utils/queries'; // Adjust path as needed

const VideoPost = ({ username }) => { // Add 'username' prop here
  console.log("Received username prop:", username); // Log the username prop for debugging

  // Fetch all videos using the QUERY_VIDEOS query
  const { data, loading, error } = useQuery(QUERY_VIDEOS);

  // Log data, loading, and error states to understand the query's behavior
  console.log("Query loading state:", loading);
  console.log("Query error state:", error);
  console.log("Query data:", data);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // If no videos are returned
  if (!data || !data.getVideos || data.getVideos.length === 0) {
    console.log("No videos found in the query result.");
    return <div>No videos available!</div>;
  }

  return (
    <div>
      <h3>Video List</h3>
      {data.getVideos.map((video) => {
        const { videoId, title, comment, username } = video;

        // Log each video object to ensure the expected fields exist
        console.log("Video data:", video);

        return (
          <div key={videoId}>
            <h4>{title}</h4>
            {comment && <p>{comment}</p>}
            <p>Video ID: {videoId}</p>
            <p>Posted by: {username || "Unknown"}</p> {/* Display username or a fallback */}
          </div>
        );
      })}
    </div>
  );
};

export default VideoPost;