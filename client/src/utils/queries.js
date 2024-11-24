import { gql } from '@apollo/client';

// Existing Queries

export const QUERY_USER = gql`
  query getUser($userId: ID!) {
    user(userId: $userId) {
      _id
      username
      email
    }
  }
`;

export const QUERY_USERS = gql`
{
  users {
    _id
    username
    email
  }
}
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;
 
// Fetch all videos
export const QUERY_VIDEOS = gql`
  query getVideos {
    getVideos {
      videoId
      title
      comment
    }
  }
`;

 