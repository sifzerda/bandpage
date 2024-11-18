import { gql } from '@apollo/client';

export const ADD_THOUGHT = gql`
  mutation addThought($userId: ID!, $thoughtText: String!, $pageParams: String!) {
    addThought(userId: $userId, thoughtText: $thoughtText, pageParams: $pageParams) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      pageParams
    }
  }
`;

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

export const REMOVE_THOUGHT = gql`
  mutation removeThought($thoughtId: ID!) {
    removeThought(thoughtId: $thoughtId) {
      _id
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