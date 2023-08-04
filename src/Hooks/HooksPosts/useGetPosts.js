import { useQuery } from "@apollo/client"
import { GET_POSTS } from "../../Graphql/GqlPostUser"

export const useGetPosts = () => {
  const {data, loading, error, refetch} = useQuery(GET_POSTS)
  
  return{data, loading, error, refetch}
}

