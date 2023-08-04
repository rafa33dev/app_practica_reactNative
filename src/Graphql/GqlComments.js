import {gql} from '@apollo/client';

export const CREATE_COMMENT = gql`
mutation CreateComment($input: CreateComment) {
  CreateComment(input: $input) {
    id
    content
    author {
      id
      name
      avatar
    }
    createdAt
    updatedAt
  }
}
`;

export const GetComment_Post = gql`
query GetPostComments($postId: ID!) {
  GetPostComments(postId: $postId) {
    id
    content
    author {
      id
      name
      avatar
    }
  }
}
`;

export const CREATE_NEW_COMMENT_SUBCRIPTION = gql`
  subscription NewComment($postId: ID!, $userId: ID!) {
    NewComment(postId: $postId, userId: $userId) {
      id
      content
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_NEW_POST_SUBCRIPTION = gql`
subscription NewPost($userId: ID!) {
  NewPost(userID: $userId) {
    id
    title
    content
    author {
      id
      name
      avatar
    }
    createdAt
    updatedAt
  }
}
`

export const CREATE_COUNT_POST_NOTIFICATION = gql`
subscription Subscription {
  CountPost
}
`