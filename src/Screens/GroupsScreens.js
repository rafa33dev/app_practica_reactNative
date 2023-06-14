import HomeScreen from "./HomeScreen";
import HomeUsersScreen from "./HomeUserScreen";
import SignInScreen from "./SignInScreen";

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

  },

   AccessGroup: {
    'homeUserScreen': {
     name: 'homeUserScreen',
     title: 'user',
     component: HomeUsersScreen,
     backIcon : false
     },

  // 'home': {
  //   name: 'home',
  //  title: 'Main',
  //    component: HomeScreen,
  //     backIcon : false
  //  }
  // },
 }
}