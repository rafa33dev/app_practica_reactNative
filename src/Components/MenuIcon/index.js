import { Box, HamburgerIcon, Menu } from "native-base"
import { Pressable } from "react-native"
import { useContext } from "react"
import { SessionContext } from "../../contexts/sessionContex"
import { useNavigation } from "@react-navigation/native"
import { Groups } from "../../Screens/GroupsScreens"
export const MenuIcon  = () => {
  const navigation = useNavigation()
  const {logout} = useContext(SessionContext)
  return(
    <Box w="90%" alignItems="center">
      <Menu
        w='190'
        
        trigger={triggerProps => {
          return <Pressable
            accessibilityLabel="More options menu"
            {...triggerProps}
          >
            <HamburgerIcon size={8}/>
          </Pressable>
        }}
      >
        <Menu.Item onPress={() => navigation.navigate(Groups.AccessGroup.profileUserScreen.name)}>Perfil</Menu.Item>
        <Menu.Item>Nunito Sans</Menu.Item>
        <Menu.Item>Settings</Menu.Item>
        <Menu.Item onPress={() => logout()}>Exit</Menu.Item>
      </Menu>
    </Box>
  )
}