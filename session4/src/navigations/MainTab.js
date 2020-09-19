import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack'
import AccountStack from './AccountStack'

const Tab = createBottomTabNavigator();


const MainTab = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeStack}/>
      <Tab.Screen name="Account" component={AccountStack} />
    </Tab.Navigator>
  )
}

export default MainTab