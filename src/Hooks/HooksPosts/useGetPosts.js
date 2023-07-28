import { useQuery } from "@apollo/client"
import { GET_POSTS } from "../../Graphql/GqlPostUser"
import { useEffect } from "react"
export const useGetPosts = () => {
  const {data, loading, error, refetch} = useQuery(GET_POSTS)
  
  return{data, loading, error, refetch}
}

