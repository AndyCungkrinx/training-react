/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';

import {FlatList, Text, Button} from 'react-native';
import {client} from './service';
import {gql} from '@apollo/client';
import {ApolloProvider} from '@apollo/client';

const DATA = [
  {
    id: 1,
    title: 'Nasi goreng',
  },
  {
    id: 2,
    title: 'Nasi goreng 2',
  },
  {
    id: 3,
    title: 'Nasi goreng 3',
  },
  {
    id: 4,
    title: 'Nasi goreng 3',
  },
  {
    id: 5,
    title: 'Nasi goreng 3',
  },
];

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

const App = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategoryList = () => {
      client
        .query({
          query: categoryListSchema,
          variables: {
            id: 2,
          },
        })
        .then((res) => {
          let children = res.data.categoryList[0].children;
          setCategories(children);
        });
    };

    getCategoryList();
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <Button
        onPress={() => alert(item.id)}
        title={item.name}
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    );
  };

  const ListHeaderComponent = () => {
    return <Text>Header</Text>;
  };

  const ListFooterComponent = () => {
    return <Text>Footter</Text>;
  };

  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={3}
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={ListFooterComponent}
    />
  );
};

export default App;
