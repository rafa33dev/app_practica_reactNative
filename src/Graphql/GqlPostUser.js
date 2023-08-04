import { gql } from "@apollo/client";

export const GET_POSTS = gql`
query GetPosts {
  GetPosts {
    id
    title
    content
    commentCount
    author {
      id
      name
      avatar
    }
    comments {
      content
      author {
        name
      }
      createdAt
      updatedAt
    }
    createdAt
    updatedAt
  }
}
`

export const CREATE_POST = gql`
mutation CreatePost($input: CreatePost!) {
  CreatePost(input: $input) {
    id
    title
    content
    author {
      name
      id
      username
    }
  }
}

`



