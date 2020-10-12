import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card, Title, Button } from 'react-native-paper';
import Carousel, { Pagination } from 'react-native-x2-carousel';
import FastImage from 'react-native-fast-image';
import data from '../../../components/feed/Banner';

const DATA = data.getHomepageSlider.images;

const Banner = () => {
  const renderItem = data => (
      <FastImage
        style={styles.item}
        source={{
          uri: `${data.mobile_image_url}`,
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.contain}
        key={data.image_id}
      />
  );
  return (
    <View style={styles.container}>
      <Carousel
        pagination={Pagination}
        renderItem={renderItem}
        data={DATA}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    width:1300,
    height: 220,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Banner;