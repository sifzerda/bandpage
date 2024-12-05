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

// Playlist Mutations

// Add a new playlist to a user
export const ADD_PLAYLIST = gql`
  mutation addPlaylist($userId: ID!, $name: String!) {
    addPlaylist(userId: $userId, name: $name) {
      name
      songs {
        videoId
        title
      }
    }
  }
`;

// Add a song to an existing playlist
export const ADD_SONG_TO_PLAYLIST = gql`
  mutation addSongToPlaylist($userId: ID!, $playlistName: String!, $videoId: String!, $title: String!) {
    addSongToPlaylist(userId: $userId, playlistName: $playlistName, videoId: $videoId, title: $title) {
      name
      songs {
        videoId
        title
      }
    }
  }
`;

// Remove a song from a playlist
export const REMOVE_SONG_FROM_PLAYLIST = gql`
  mutation removeSongFromPlaylist($userId: ID!, $playlistName: String!, $videoId: String!) {
    removeSongFromPlaylist(userId: $userId, playlistName: $playlistName, videoId: $videoId) {
      name
      songs {
        videoId
        title
      }
    }
  }
`;

// Remove a playlist from a user
export const REMOVE_PLAYLIST = gql`
  mutation removePlaylist($userId: ID!, $playlistName: String!) {
    removePlaylist(userId: $userId, playlistName: $playlistName) {
      name
      songs {
        videoId
        title
      }
    }
  }
`;