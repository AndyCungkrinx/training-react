import React, {useState, useEffect, useCallback} from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  StatusBar,
  VirtualizedList,
} from 'react-native';
import {Modal, Portal, Button, Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import Item from '../../components/Item';
import Dummy from '../../helpers/Dummy';
import {gql, useQuery} from '@apollo/client';

export const GET_TOKEN = gql`
  query GetToken {
    token @client
  }
`;
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const HomeScreen = () => {
  const {data, loading, error} = useQuery(GET_TOKEN);
  const [visible, setVisible] = useState(false);
  const [visibleVirtual, setVisibleVirtual] = useState(false);
  const navigation = useNavigation();

  const renderItem = ({item}) => {
    return (
      <>
        <Text>{item.title}</Text>
      </>
    );
  };

  const flatList = () => {
    return (
      <View style={{backgroundColor: '#FFF'}}>
        <FlatList data={Dummy.items} renderItem={renderItem} />
      </View>
    );
  };

  const renderItemVirtual = ({item}) => {
    return <Item title={item.title} />;
  };

  const getItem = (data, index) => {
    return {
      id: Math.random().toString(12).substring(0),
      title: `Item ${index + 1}`,
    };
  };

  const virtualList = () => {
    return (
      <View style={{backgroundColor: '#FFF'}}>
        <VirtualizedList
          data={Dummy.itemsMany()}
          initialNumToRender={4}
          renderItem={renderItemVirtual}
          keyExtractor={(item, index) => 'virtual-' + index}
          getItem={getItem}
          removeClippedSubviews={true}
          getItemCount={() => {
            return Dummy.itemsMany().length;
          }}
        />
      </View>
    );
  };

  const renderModal = () => {
    return (
      <Portal>
        <Modal visible={visible} onDismiss={() => setVisible(false)}>
          {flatList()}
        </Modal>
      </Portal>
    );
  };

  const renderModalVirtualized = () => {
    return (
      <Portal>
        <Modal
          visible={visibleVirtual}
          onDismiss={() => setVisibleVirtual(false)}>
          {virtualList()}
        </Modal>
      </Portal>
    );
  };

  const renderName = () => {
    console.log('data', data);
    return <Text>{JSON.stringify(data)}</Text>;
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
      }}>
      <Button mode="contained" onPress={() => setVisible(true)}>
        Flatlist
      </Button>
      <Button mode="contained" onPress={() => setVisibleVirtual(true)}>
        Virtualized
      </Button>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate('Profile');
        }}>
        Apollo Client
      </Button>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate('Redux');
        }}>
        Apollo Client Redux
      </Button>
      {renderModal()}
      {renderModalVirtualized()}
      {renderName()}
    </SafeAreaView>
  );
};

export default HomeScreen;
