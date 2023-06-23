import { CREATE_COMMENT } from "../../Graphql/GqlComments"
import { useMutation } from "@apollo/client"

export const useCreateComment = ({postId, content, userId}) => {
  const [createComment, {data, loading, error }] = useMutation(CREATE_COMMENT, {
    variables: {
      postId: postId,
      content: content,
      userId: userId
    }
  })

  return {
    createComment,
    data,
    loading,
    error
  }
}