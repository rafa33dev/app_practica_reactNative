import { useQuery } from "@apollo/client"
import { GetOneUser } from "../../Graphql/consultGqlUsers"

export const useGetOneUser = (idUser) => {

  const {data, loading, error} = useQuery(GetOneUser,{
    variables:{
        userId: idUser
    }
  })
  
  return {data, loading, error}
}