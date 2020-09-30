import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as PaperProvider} from 'react-native-paper';
import Category from '../../../screens/category';
import ProductCategory from '../../../screens/productcategory';

const Stack = createStackNavigator();


const CategoryStack = () => {
  return (
    <PaperProvider>
        <Stack.Navigator initialRouteName="Category">
            <Stack.Screen 
            name="Category" 
            component={Category} 
            options={{
              headerShown: false,
              }}
            />
            <Stack.Screen name="ProductCategory" component={ProductCategory}
            options={{
              tabBarVisible: false,
              headerShown: false,
            }}
             />
        </Stack.Navigator>
    </PaperProvider>

  )
}

export default CategoryStack;