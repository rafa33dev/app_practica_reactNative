import {gql} from '@apollo/client';

export const CREATE_COMMENT = gql`
  mutation CreateComment($postId: ID!, $content: String!, $userId: ID!) {
    CreateComment(postId: $postId, content: $content, userId: $userId) {
      content
      createdAt
    }
  }
`;

export const GetComment_Post = gql`
  query Post($postId: ID!) {
    Post(id: $postId) {
      comments {
        content
        author {
          name
        }
      }
    }
  }
`;

export const CREATE_NEW_COMMENT_SUBCRIPTION = gql`
  subscription NewComment($postId: ID!) {
    NewComment(postID: $postId) {
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
    content
    id
  }
}


`