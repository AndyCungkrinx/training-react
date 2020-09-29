import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as PaperProvider} from 'react-native-paper';
import Category from '../../../screens/category';
import ProductCategory from '../../../screens/productcategory';

const Stack = createStackNavigator();


const CategoryStack = () => {
  return (
    <PaperProvider>
        <Stack.Navigator>
            <Stack.Screen 
            name="Category" 
            component={Category} 
            options={{
              headerShown: false,
              }}
            />
        </Stack.Navigator>
    </PaperProvider>
  )
}

export default CategoryStack;