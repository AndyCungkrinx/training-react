import React, {useState,useEffect} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Carousel, { Pagination } from 'react-native-x2-carousel';
import FastImage from 'react-native-fast-image';
import {gql} from '@apollo/client';
import {client} from '../../../../service';

const BANNER = gql`
query{
  getHomepageSlider{
    images{
      image_id
      mobile_image_url
    }
  }
}
`;


const Banner = () => {
  const [bannerslider, setBannerslider] = useState([]);

  useEffect(() => {
    const getHomepageSlider = () => {
      client
        .query({
          query: BANNER,
        })
        .then((res) => {
          let images = res.data.getHomepageSlider.images;
          setBannerslider(images);
        });
    };

    getHomepageSlider();
  }, []);
  
  const renderItem = val => (
      <FastImage
        style={styles.item}
        source={{
          uri: `${val.mobile_image_url}`,
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.contain}
        key={val.image_id}
      />
  );
  return (
    <View style={styles.container}>
      <Carousel
        pagination={Pagination}
        renderItem={renderItem}
        data={bannerslider}
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