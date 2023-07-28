const { View, Text, Button, StyleSheet } = require("react-native")
import { useContext, useEffect } from "react"
import { SessionContext } from "../../contexts/sessionContex"
import { useNavigation } from "@react-navigation/native"
import { Groups } from "../GroupsScreens"
import { PostUsers } from "../../Components/PostUsers"
import { MenuIcon } from "../../Components/MenuIcon"
import { SubscriptionPosts } from "../../Components/SubcriptionPosts"
import { SubscriptionComment } from "../../Components/SubcriptionComment"


const HomeUsersScreen = () => {
  const {logout , user} = useContext(SessionContext)
  const {name, role,userId} = user
  const navigation = useNavigation()

  return(
    
    <View style= {styles.containerHome}>
      <View style={styles.menuIcon}>
        <MenuIcon navigation={navigation}/>
        <SubscriptionPosts userPost={userId} />
      </View>
      <Text style={styles.titleUser}>{role} Hello {name}</Text>
      <View style= {styles.containerPost}>
        <PostUsers />
      </View>
      <View style={styles.buttonExit}>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  titleUser : {
    top: 60,
    fontSize: 20,
    color: 'white'
  },
  containerHome : {
    flex: 1,
    alignItems: 'center',
    position:'relative'
    // backgroundColor: 'black'
  },

  containerPost : {
    width:'100%', 
    top: 100,
    padding: 10
  },

  menuIcon:{
    paddingHorizontal: 5,
    top: 50,
    flexDirection: 'row',
    justifyContent:'space-around',
  }

})


export default HomeUsersScreen
