import { useMutation } from "@apollo/client"
import { CREATE_USER } from "../../Graphql/consultGqlUsers"

export const useCreateUser = () => {
  const [createUser,{data, loading, error}] = useMutation(CREATE_USER)

  return {data, loading, error, createUser}
}