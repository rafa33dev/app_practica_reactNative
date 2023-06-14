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
    phone
    website
   }
 }
`


export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
  Login(email: $email, password: $password)
}

`