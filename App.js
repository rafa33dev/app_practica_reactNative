import {ApplicationProvider, IconRegistry} from '@ui-kitten/components'
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'
import {EvaIconsPack} from '@ui-kitten/eva-icons'
import {SwitchTheme} from './src/Components/SwitchTheme'
import * as eva from '@eva-design/eva'
import { NativeBaseProvider } from 'native-base'
import {NavigationContainer} from '@react-navigation/native'
import {SessionContextProvider} from './src/contexts/sessionContex'
import {GroupsNavigator} from './src/GroupsNavigator'
import { SafeAreaView } from 'react-native'
const client = new ApolloClient({
  uri: 'http://10.2.20.52:4000',
  cache: new InMemoryCache(),
});



function App() {
  const mapping = eva.mapping

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <SessionContextProvider>
          <SwitchTheme>
            {({switchTheme}) => (
              <NativeBaseProvider>
                <ApplicationProvider
                  {...eva}
                  mapping={mapping}
                  theme={eva[switchTheme]}>
                    <IconRegistry icons={EvaIconsPack} />
                    <GroupsNavigator />
                </ApplicationProvider>
              </NativeBaseProvider>
            )}
          </SwitchTheme>
        </SessionContextProvider>
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App
