import { useMutation } from "@apollo/client"
import { LOGIN_USER } from "../../Graphql/consultGqlUsers"

export const useTokenUser = () => {
  const [loginUser, {data, loading, error}] = useMutation(LOGIN_USER)
  
  return {data, loading, error, loginUser}
}