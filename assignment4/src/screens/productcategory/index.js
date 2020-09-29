import React from 'react';
import { Appbar} from 'react-native-paper';
import { Text, View } from 'react-native';

const ProductCategory = ({ route }) => {
  const { id } = route.params
  return (
    <>
    <Appbar.Header>
      <Appbar.Content title="Product Categories" style={{alignItems:'center'}} />
    </Appbar.Header>
    <View>
      <Text>ProductCategory</Text>
      <Text>{`This is param form Category List ${id}`}</Text>
    </View>
    </>
  )
}

export default ProductCategory;