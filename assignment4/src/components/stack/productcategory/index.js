import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as PaperProvider} from 'react-native-paper';
import ProductCategory from '../../../screens/productcategory';

const Stack = createStackNavigator();

const ProductCategoryStack = () => {
  return (
    <PaperProvider>
        <Stack.Navigator>
            <Stack.Screen name="Product Category" component={ProductCategory}
            options={{
              tabBarVisible: false,
            }}
             />
        </Stack.Navigator>
    </PaperProvider>
  )
}

export default ProductCategoryStack;