import { GetComment_Post } from "../../Graphql/GqlComments"
import { useQuery } from "@apollo/client"

export const useGetCommentPost = (postId) => {
  const { data, loading, error} = useQuery(GetComment_Post, {
    variables: {
      postId: postId
    }
  })
  
  return {
    data, 
    loading,
    error
  }
} 