import {Text, View} from 'react-native';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import HomeScreen from './src/Screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SessionContextProvider } from './src/contexts/sessionContex';
import { GroupsNavigator } from './src/GroupsNavigator';
const client = new ApolloClient({
  uri: 'http://10.2.20.52:4000',
  cache: new InMemoryCache(),
});

const Stack = createNativeStackNavigator();

function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
         <SessionContextProvider>
          <GroupsNavigator />
         </SessionContextProvider>
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;
