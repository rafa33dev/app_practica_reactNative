import { useMutation} from "@apollo/client"
import { CREATE_POST ,GET_POST} from "../../Graphql/GqlPostUser"


export const useCreatePost = () => {
  const [ createPost, {data, loading, error}] = useMutation(CREATE_POST)

  return {
    data, 
    loading,
    error,
    createPost
  }
} 