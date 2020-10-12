/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';

import {FlatList, Text, Button} from 'react-native';
import {gql, useQuery} from '@apollo/client';

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
  const {loading, error, data} = useQuery(categoryListSchema, {
    variables: {
      id: 2,
    },
  });

  // useEffect(() => {
  //   const getCategoryList = () => {
  //     client
  //       .query({
  //         query: categoryListSchema,
  //         variables: {
  //           id: 2,
  //         },
  //       })
  //       .then((res) => {
  //         let children = res.data.categoryList[0].children;
  //         setCategories(children);
  //       });
  //   };

  //   getCategoryList();
  // }, []);

  

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

  if (loading) return <Text>Loading...</Text>;

  return (
    <FlatList
      data={data.categoryList[0].children}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={3}
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={ListFooterComponent}
    />
  );
};

export default App;
