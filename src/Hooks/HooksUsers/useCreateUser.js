import { useMutation } from "@apollo/client"
import { CREATE_USER } from "../../Graphql/consultGqlUsers"

export const useCreateUser = ({ name, email, website, password, role}) => {
  console.log(name);
  const [createUser,{data, loading, error}] = useMutation(CREATE_USER, {
    variables: {
    input: {  
      name:name,
      role:role,
      email: email,
      website: website,
      password : password
    }
  }
  })

  return {data, loading, error, createUser}
}