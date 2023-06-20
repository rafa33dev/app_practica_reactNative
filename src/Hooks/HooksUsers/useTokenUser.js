import { useMutation } from "@apollo/client"
import { LOGIN_USER } from "../../Graphql/consultGqlUsers"

export const useTokenUser = ({email,password}) => {
  const [loginUser, {data, loading, error}] = useMutation(LOGIN_USER , {
    variables:{
      email: email,
      password: password
    }
  })

  
  return {data, loading, error, loginUser}
}