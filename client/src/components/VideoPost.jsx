import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import { QUERY_VIDEOS } from './../utils/queries'; // Adjust path as needed

const VideoPost = ({ username }) => { // Add 'username' prop here

  // Fetch all videos using the QUERY_VIDEOS query
  const { data, loading, error } = useQuery(QUERY_VIDEOS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // If no videos are returned
  if (!data || !data.getVideos || data.getVideos.length === 0) {
    return <div>No videos available!</div>;
  }

  return (
    <div>
      <h3>Video List</h3>
      {data.getVideos.map((video) => {
        const { videoId, title, comment, username } = video;

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

// Add prop type validation for the 'username' prop
VideoPost.propTypes = {
  username: PropTypes.string,
};

export default VideoPost;