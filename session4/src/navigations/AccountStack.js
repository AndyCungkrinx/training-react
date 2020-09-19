import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Acccount from '../screens/Account'

const Stack = createStackNavigator();


const AccountStack = () => {
  return (
    <Stack.Navigator initialRouteName="Acccount">
      <Stack.Screen name="Acccount" component={Acccount} />
    </Stack.Navigator>
  )
}

export default AccountStack