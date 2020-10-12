/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar} from 'react-native';
import MainNav from './src/components/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {client} from './service';
import {ApolloProvider} from '@apollo/client';

const App = () => {
  console.log('Training react assignment-5', Platform.OS)
  return (
    <ApolloProvider client={client}>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer>
          <MainNav />
        </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
