import { useMutation } from "@apollo/client"
import { CREATE_POST } from "../../Graphql/GqlPostUser"


export const useCreatePost = ({title, content, authorId }) => {
  const [ createPost, {data, loading, error}] = useMutation(CREATE_POST, {
    variables: {
      title: title,
      content: content,
      authorId: authorId,
    }
  })

  return {
    data, 
    loading,
    error,
    createPost
  }
} 