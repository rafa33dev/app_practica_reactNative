import { useSubscription } from "@apollo/client"
import { CREATE_NEW_COMMENT_SUBCRIPTION } from "../../../Graphql/GqlComments"

export const useNewCommet = () => {
  const {data, loading, error} = useSubscription(CREATE_NEW_COMMENT_SUBCRIPTION) 
    if (data) {
      console.log('esta es la dtata',data);
    }
 
  return{
    data,
    loading,
    error   
  }

}