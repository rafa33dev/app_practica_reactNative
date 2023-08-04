import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  split,
} from '@apollo/client';
import {SwitchTheme} from './src/Components/SwitchTheme';
import * as eva from '@eva-design/eva';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {SessionContextProvider} from './src/contexts/sessionContex';
import {GroupsNavigator} from './src/GroupsNavigator';
import {createClient} from 'graphql-ws';
import {WebSocket} from 'ws';
import {GraphQLWsLink} from '@apollo/client/link/subscriptions';
import {SubscriptionProvider} from './src/contexts/SubcriptionPostsProvider';

const cl = createClient({
  webSocketImpl: WebSocket,
  url: 'ws://10.2.20.57:4001/gql',
});

const link = new GraphQLWsLink(cl);

const client = new ApolloClient({
  uri: 'http://10.2.20.57:4001/gql',
  cache: new InMemoryCache(),
});

client.setLink(link);

function App() {
  const mapping = eva.mapping;

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
                  <SubscriptionProvider>
                    <IconRegistry icons={EvaIconsPack} />
                    <GroupsNavigator />
                  </SubscriptionProvider>
                </ApplicationProvider>
              </NativeBaseProvider>
            )}
          </SwitchTheme>
        </SessionContextProvider>
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;
