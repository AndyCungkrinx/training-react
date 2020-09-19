import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home'
import Detail from '../screens/Detail'
import AccountStack from './AccountStack'

const Stack = createStackNavigator();


const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Account" component={AccountStack} />
    </Stack.Navigator>
  )
}

export default HomeStack