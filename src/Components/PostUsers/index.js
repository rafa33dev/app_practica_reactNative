import { FlatList, StyleSheet, Text, View } from "react-native"
import { useGetPosts } from "../../Hooks/HooksPosts/useGetPosts"
import { arrayPosts } from "../../Utils/arrayPosts/arrayPosts"

export const PostUsers = () => {
  const {data} = useGetPosts()
  const {userPosts} = arrayPosts(data)  

  const renderItem = ({ item }) => {
    return (
      <View style={styles.items}>
        {/* <Text>Title: {item.title}</Text> */}
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.contenPost}>{item.content}</Text>
        <View style= {styles.logo}></View>
      </View>
    );
  };

    
  return(
    <View style={styles.containerList}>
      <Text>
      publications
      </Text>
     <FlatList
      data={userPosts}
      renderItem={renderItem}
      keyExtractor={(item,index) => index.toString()}
     />
    </View>
  )
}

const styles = StyleSheet.create({
  containerList: {
    
    width: '100%'
  },

  items: {
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    alignItems: 'center',
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 15

  },

  name:{
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },

  contenPost: {
    color: 'white'
  },

  logo: {
    width: 20,
    height: 20,
    backgroundColor: 'steelblue',
    borderRadius: 100
  }

})