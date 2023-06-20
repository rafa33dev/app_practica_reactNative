const { View, Text, StyleSheet } = require("react-native")
import { FormSignIn } from "../../Components/FormSignIn/FormSignIn"

const SignInScreen = () => {
  return(
    <View style={styles.containerSignIn}>
      <Text style={styles.titleLogin}>Login</Text>
      <FormSignIn />
    </View>
  )
}

const styles = StyleSheet.create({
  titleLogin:{
    fontSize : 25
  },
  containerSignIn:{
    backgroundColor: 'steelblue', 
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}) 

export default SignInScreen