import React from 'react';
import {FlatList} from 'react-native';

const DATA = [
    {
      id: 1,
      name: 'Nasi goreng'
    },
    {
      id: 2,
      name: 'Teh obeng'
    },
    {
      id: 3,
      name: 'Mie goreng'
    }
];

const BerandaScreen = () => {
  return (
    <FlatList
      data={DATA}
      keyExtractor={({item, index}) => index.toString()}
      renderItem={}
      renderItem={({item, index}) => {
        return <Text>test</Text>;
      }}
    />
  );
};

export default BerandaScreen;
