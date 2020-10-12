import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {Text} from 'react-native-paper';
import {gql, useQuery} from '@apollo/client';
import client from '../../services';

const GET_PRODUCTS = gql`
  query getProducts {
    products(filter: {category_id: {eq: "2"}}) {
      items {
        id
        name
      }
    }
  }
`;

const ProfileScreen = () => {
  const [productsPromise, setProductPromises] = useState([]);
  const {loading, error, data} = useQuery(GET_PRODUCTS);

  useEffect(() => {
    const getProducts = () => {
      client
        .query({
          query: GET_PRODUCTS,
        })
        .then((result) => {
          let products = result.data.products;
          setProductPromises(products.items);
        })
        .catch((err) => console.log('err', err));
    };

    getProducts();
  }, []);

  const renderItem = ({item}) => {
    return <Text>{item.name}</Text>;
  };

  const renderPromises = () => {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={productsPromise}
          renderItem={renderItem}
          style={{
            height: 300,
          }}
        />
      </View>
    );
  };

  const renderHooks = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
      <FlatList
        data={data.products.items}
        renderItem={renderItem}
        style={{
          height: 300,
        }}
      />
    );
  };

  return (
    <>
      {/* {renderPromises()} */}
      {renderHooks()}
    </>
  );
};

export default ProfileScreen;
