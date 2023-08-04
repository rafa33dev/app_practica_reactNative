import { CREATE_COMMENT } from "../../Graphql/GqlComments"
import { useMutation } from "@apollo/client"

export const useCreateComment = () => {
  const [createComment, {data, loading, error }] = useMutation(CREATE_COMMENT)

  return {
    createComment,
    data,
    loading,
    error
  }
}