import {useQuery} from '@apollo/client'
import {GetUsers} from '../Graphql/consultGQL'

export const useGetUsers = () => {
  const {loading, error, data} = useQuery(GetUsers)
  return {loading, data, error}
}
