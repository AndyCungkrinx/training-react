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

const App = () => {
  console.log('HERE', Platform.OS)
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <MainNav />
      </NavigationContainer>
    </>
  );
};

export default App;
