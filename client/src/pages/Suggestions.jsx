import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_VIDEOS } from "./../utils/queries"; // Import the QUERY_VIDEOS query

const Suggestions = () => {
  // Run the query using the useQuery hook
  const { loading, error, data } = useQuery(QUERY_VIDEOS);

  // Debugging: Log the state of the query
  console.log("QUERY_VIDEOS loading:", loading);
  console.log("QUERY_VIDEOS error:", error);
  console.log("QUERY_VIDEOS data:", data);

  // Show loading state while the query is being fetched
  if (loading) {
    console.log("Loading videos...");
    return <p>Loading videos...</p>;
  }

  // Show error message if the query fails
  if (error) {
    console.error("Error fetching videos:", error.message);
    return <p>Error: {error.message}</p>;
  }

  // Debugging: Log the list of videos returned from the query
  if (data?.getVideos) {
    console.log("Fetched videos from QUERY_VIDEOS:", data.getVideos);
  }

  // Display the list of videos once data is fetched
  return (
    <div>
      <h1>Video Suggestions</h1>
      <div>
        {/* Debugging: Ensure the array length is correct */}
        {data?.getVideos?.length > 0 ? (
          <ul>
            {data.getVideos.map((video) => {
              console.log("Rendering video:", video);
              return (
                <li key={video.videoId}>
                  <h3>{video.title}</h3>
                  <p>{video.comment}</p>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>No videos found.</p>
        )}
      </div>
    </div>
  );
};

export default Suggestions;