import { gql } from '@apollo/client';

// Existing Mutations

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const REMOVE_USER = gql`
  mutation removeUser {
    removeUser {
      _id
      username
    }
  }
`;
 
 // Add Video Mutation
export const ADD_VIDEO = gql`
mutation addVideo($videoId: String!, $title: String!, $comment: String) {
  addVideo(videoId: $videoId, title: $title, comment: $comment) {
    videoId
    title
    comment
  }
}
`;

// Remove Video Mutation
export const REMOVE_VIDEO = gql`
mutation removeVideo($videoId: String!) {
  removeVideo(videoId: $videoId) {
    videoId
    title
    comment
  }
}
`;
 