import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as PaperProvider} from 'react-native-paper';
import Home from '../../../screens/home';
import Category from '../../../screens/category';
import SideMenu from '../../../components/sidemenu';
import ProductCategory from '../../../screens/productcategory';

const Stack = createStackNavigator();


const HomeStack = () => {
  return (
    <PaperProvider>
        <Stack.Navigator>
            <Stack.Screen 
            name="Home" 
            component={Home} 
            options={{
              headerShown: false,
              
              }}
            />
          <Stack.Screen 
            name="Category" 
            component={Category} 
            options={{
              headerShown: false,
              tabBarVisible: false,
              }}
            />
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

export default HomeStack;