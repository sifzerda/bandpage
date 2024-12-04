import { gql } from '@apollo/client';

// User Authentication Mutations

// Log in a user
export const LOGIN = gql`
  mutation login($username: String!) {
    login(username: $username) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// Register a new user
export const ADD_USER = gql`
  mutation addUser($username: String!) {
    addUser(username: $username) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// Remove the currently logged-in user
export const REMOVE_USER = gql`
  mutation removeUser {
    removeUser {
      _id
      username
    }
  }
`;

// Video Mutations

// Add a new video
export const ADD_VIDEO = gql`
  mutation addVideo($videoId: String!, $title: String!, $comment: String, $username: String) {
    addVideo(videoId: $videoId, title: $title, comment: $comment, username: $username) {
      videoId
      title
      comment
      username
      createdAt
      updatedAt
    }
  }
`;

// Remove an existing video
export const REMOVE_VIDEO = gql`
  mutation removeVideo($videoId: String!) {
    removeVideo(videoId: $videoId) {
      videoId
      title
      comment
      username
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_CALENDAR = gql` 
mutation UPDATE_CALENDAR($state: CalendarStateInput!) {
  updateCalendar(state: $state) {
    success
    message
  }
}
`;