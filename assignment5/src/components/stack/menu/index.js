import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as PaperProvider} from 'react-native-paper';
import SideMenu from '../../sidemenu';

const Stack = createStackNavigator();


const SideMenuStack = () => {
  return (
    <PaperProvider>
        <Stack.Navigator initialRouteName="Menu">
            <Stack.Screen 
            name="Menu" 
            component={SideMenu} 
            options={{
              headerShown: false,
            }}
            />
        </Stack.Navigator>
    </PaperProvider>
  )
}

export default SideMenuStack;