import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_VIDEOS } from './../utils/queries';  // Adjust path as needed

const VideoPost = () => {
  // Fetch all videos using the QUERY_VIDEOS query
  const { data, loading, error } = useQuery(QUERY_VIDEOS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // If no videos are returned
  if (!data || !data.getVideos || data.getVideos.length === 0) {
    console.log('No videos found.');
    return <div>No videos available!</div>;
  }

  return (
    <div>
      <h3>Video List</h3>
      {data.getVideos.map((video) => {
        const { videoId, title, comment } = video;

        return (
          <div key={videoId}>
            <h4>{title}</h4>
            {comment && <p>{comment}</p>}
            <p>Video ID: {videoId}</p>

          </div>
        );
      })}
    </div>
  );
};

export default VideoPost;