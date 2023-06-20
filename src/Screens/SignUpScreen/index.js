import { Text, View ,StyleSheet} from "react-native"
import { FormSignUp } from "../../Components/FormSignUp/FormSignUp"

const SignUpScreen = () => {
  return(
    <View style={styles.containerSignIn}>
      <Text style={styles.titleLogin}>Sign Up</Text>
      <FormSignUp />
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

export default SignUpScreen