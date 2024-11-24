// Suggestions.jsx
import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_VIDEOS } from './../utils/queries'; // import the QUERY_VIDEOS query

const Suggestions = () => {
  // Run the query using the useQuery hook
  const { loading, error, data } = useQuery(QUERY_VIDEOS);

  // Show loading state while the query is being fetched
  if (loading) return <p>Loading videos...</p>;

  // Show error message if the query fails
  if (error) return <p>Error: {error.message}</p>;

  // Display the list of videos once data is fetched
  return (
    <div>
      <h1>Video Suggestions</h1>
      <div>
        {data.getVideos.length > 0 ? (
          <ul>
            {data.getVideos.map((video) => (
              <li key={video.videoId}>
                <h3>{video.title}</h3>
                <p>{video.comment}</p>
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