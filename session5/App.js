/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';

import {client} from './service';
import {ApolloProvider} from '@apollo/client';

import Testing from './Testing';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Testing />
    </ApolloProvider>
  );
};

export default App;
