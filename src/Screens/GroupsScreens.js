import HomeScreen from "./HomeScreen";
import HomeUsersScreen from "./HomeUserScreen";
import ProfileUserScreen from "./ProfileUserScreen";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";

export const Groups = {
  AuthGroup: {
    'home': {
      name: 'home',
      title: 'Main',
      component: HomeScreen,
      backIcon : false
    },
    'login': {
      name: 'login',
      title: 'Main',
      component: SignInScreen,
      backIcon : false
    },

    'signUp': {
      name: 'signUp',
      title: 'signUp',
      component: SignUpScreen,
      backIcon : false
    },

  },

   AccessGroup: {
    'homeUserScreen': {
     name: 'homeUserScreen',
     title: 'user',
     component: HomeUsersScreen,
     backIcon : false,
     showHeader: true,
     moreIcon: true,

     },

   'profileUserScreen': {
    name: 'home',
    title: 'Main',
    component: ProfileUserScreen,
    backIcon : false
  
  },
 }
}