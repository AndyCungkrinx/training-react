import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BerandaScreen from '../screens/Beranda';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import ReduxScreen from '../screens/Redux';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Beranda">
      <Stack.Screen name="Beranda" component={BerandaScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Redux" component={ReduxScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
