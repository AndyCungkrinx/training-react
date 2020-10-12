/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {client} from './service';
import {gql} from '@apollo/client';

import {VirtualizedList, View, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Testing from './Testing';

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    height: 150,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  title: {
    fontSize: 32,
  },
});

const categoryListSchema = gql`
query getCategory($id: String) {
  categoryList(filters: {ids: {eq: $id}}) {
    id
    name
    children {
      id
      name
    }
  }
}
`;

const takeEmptyCart = gql`
  mutation takeEmptyCart($input: createEmptyCartInput) {
    createEmptyCart(input: $input)
  }
`;

const App = () => {
  const DATA = [];
  const [cartId, setCartId] = useState(null);

  //Query
  /*useEffect(() => {
    const getCategoryList = () => {
      client
        .query({
          query: categoryListSchema,
        })
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
    };

    getCategoryList();
  }, []);*/

  //Mutation
  useEffect(() => {
    client
      .mutate({
        mutation: takeEmptyCart,
        variables: {
          input: {},
        },
      })
      .then((res) => console.log(res));
  }, []);

  
  //Async Storage
  useEffect(() => {
    const getCartId = async () => {
      let cartId = await AsyncStorage.getItem('CART_ID');
      console.log(cartId);
    };

    client
      .mutate({
        mutation: takeEmptyCart,
        variables: {
          input: {},
        },
      })
      .then((res) => {
        let cartIdRes = res.data.createEmptyCart;
        setCartId(cartIdRes);
        // AsyncStorage.removeItem('CART_ID');
      });
    getCartId();
  }, []);

  const getItem = (data, index) => {
    return {
      id: Math.random().toString(12).substring(0),
      title: `Item ${index + 1}`,
    };
  };

  const getItemCount = (data) => {
    return 50;
  };

  const Item = ({title}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  };

  const testing = async () => {
    AsyncStorage.setItem('TESTING', 'AAAAA');
    let data = await AsyncStorage.getItem('TESTING');
    console.log(data);
  };

  return (
    <>
    <Text>{cartId}</Text>
    <Text>{'Test'}</Text>
    <Testing />
    <VirtualizedList
      data={DATA}
      initialNumToRender={4}
      renderItem={({item}) => <Item title={item.title} />}
      keyExtractor={(item) => item.id}
      getItemCount={getItemCount}
      getItem={getItem}
    />
    </>
  );
};

export default App;
