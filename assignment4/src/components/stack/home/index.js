import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as PaperProvider} from 'react-native-paper';
import Home from '../../../screens/home';
import Cart from '../../../screens/cart';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <PaperProvider>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
            name="Home" 
            component={Home} 
            options={{
              headerShown: false,
              tabBarVisible: false,
              }}
            />
            <Stack.Screen name="Cart" component={Cart}
            options={{
              tabBarVisible: false,
              headerShown: false,
            }}
            />
        </Stack.Navigator>
    </PaperProvider>
  )
}

export default HomeStack;