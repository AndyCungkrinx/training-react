import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const Testing = () => {
  const [test, setTest] = useState('');

  const getItem = async () => {
    let aaa = await AsyncStorage.getItem('TESTING');
    setTest(aaa);
  };

  useEffect(() => {
    getItem();
  }, []);

  return <Text>{test}</Text>;
};

export default Testing;
