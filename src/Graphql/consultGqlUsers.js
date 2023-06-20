import {gql} from '@apollo/client';

export const GetUsers = gql`
  query Users {
    Users {
      id
      name
      username
    }
  }
`;

export const GetOneUser = gql`
 query User($userId : ID!){
   User(id: $userId){
    id
    name
    username
    email
    website
   }
 }
`




export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
  Login(email: $email, password: $password)
}

`

export const CREATE_USER = gql`
mutation CreateUser($input: CreateUser!) {
  CreateUser(input: $input) {
    id
    name
    username
    email
    website
    avatar
    role
  }
}

`