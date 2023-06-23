import { gql } from "@apollo/client";

export const GET_POST = gql`
  query GetUsers {
    GetUsers {
      name
      posts {
        id
        title
        content
      }
    }
  }

`

export const CREATE_POST = gql`
mutation CreatePost($title: String!, $content: String!, $authorId: ID!) {
  CreatePost(title: $title, content: $content, authorId: $authorId) {
    id
    title
    content
  }
}

`



