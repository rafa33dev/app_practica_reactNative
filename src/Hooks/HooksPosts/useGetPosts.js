import { useQuery } from "@apollo/client"
import { GET_POST } from "../../Graphql/GqlPostUser"
export const useGetPosts = () => {
  const {data, loading, error} = useQuery(GET_POST)

  return{data, loading, error}
}

