import { SafeAreaView,View, Text } from "react-native"
import { ProfileUser } from "../../Components/ProfileUser"

const ProfileUserScreen = () => {
  return(
    <SafeAreaView>
      <View>
        <ProfileUser />
      </View>
    </SafeAreaView>
  )
}

export default ProfileUserScreen