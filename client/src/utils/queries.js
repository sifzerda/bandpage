import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query getUser($userId: ID!) {
    user(userId: $userId) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        thoughtAuthor
        createdAt
        pageParams
      }
    }
  }
`;

export const QUERY_USERS = gql`
{
  users {
    _id
    username
    email
    thoughts {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      pageParams
    }
  }
}
`;

export const QUERY_THOUGHTS = gql`
  query getThoughts {
    thoughts {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      pageParams
    }
  }
`;

export const QUERY_THOUGHT = gql`
  query getThought($thoughtId: ID!) {
    thought(thoughtId: $thoughtId) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      pageParams
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        thoughtAuthor
        createdAt
        pageParams
      }
    }
  }
`;

export const QUERY_THOUGHTS_PAGE = gql`
  query getThoughtsByPage($pageParams: String!) {
    thoughtsPage(pageParams: $pageParams) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      pageParams
    }
  }
`;

