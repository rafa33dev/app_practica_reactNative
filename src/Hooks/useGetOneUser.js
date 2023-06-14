import { useQuery } from "@apollo/client"
import { GetOneUser } from "../Graphql/consultGQL"

export const useGetOneUser = (idUser) => {

  const {data, loading, error} = useQuery(GetOneUser,{
    variables:{
        userId: idUser
    }
  })
  
  return {data, loading, error}
}