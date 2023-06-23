import { gql } from "@apollo/client";

export const CREATE_COMMENT = gql`
mutation CreateComment($postId: ID!, $content: String!, $userId: ID!) {
  CreateComment(postId: $postId, content: $content, userId: $userId) {
    content
    createdAt
  }
}

`