import React, {useEffect, useState} from 'react';
import { StyleSheet,ScrollView} from 'react-native';
import { Card, Title, Text } from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import {gql, useQuery} from '@apollo/client';
import {client} from '../../../../service';

const PRODUCTS = gql`
query ( $id:String!) {
  products(filter:{category_id: {eq: $id}}) {
    items {
      id	
      name
      sku
      sale
      description{
        html
      }
      more_info{
        label
        value
      }
      media_gallery{
        label
        url
      }
      small_image{
        url
        label
      }
      price_range {
        maximum_price {
          final_price {
            value
            currency
          }
        }
      }
    }
  }
}
`;

const SectionTwo = ({navigation}) => {
  const [tops, setTops] = useState([]);
  const {loading, error, data} = useQuery(PRODUCTS, {
    variables: {
      id: 30,
    },
  });
  if (loading) {
    return null;
  }  if (error) {
    return <Text>Error...</Text>;
  } 
  //console.log(data);
  const items = data.products.items;
  //console.log(items);
  const title="Women Sale";
  
  return(
    <>
      <Card style={{paddingTop:30,paddingBottom: 10}}>
        <Title style={styles.title}>{title}</Title>
        <ScrollView horizontal style={{paddingVertical: 10}}>
          {
            items.map((item) =>(
              <Card.Content 
              key={item.sku} 
              style={styles.container}
              onPress={() => navigation.navigate('ProductDetail', { category_id: `${category.id}`, sku:  `${item.sku}`})}
              >
                <FastImage
                style={styles.item}
                source={{
                uri: `${item.small_image.url}`,
                priority: FastImage.priority.high,
                cache: FastImage.cacheControl.immutable,
                }}
                resizeMode={FastImage.resizeMode.contain}
                />
                <Title style={styles.text}>{item.name}</Title>
              </Card.Content>
            ))
          }
        </ScrollView>
      </Card>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin:5,
    padding: 20,
    width:200,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  item: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    fontSize: 16,
    fontFamily: 'sans-serif-light',
  },
  title:{
    textAlignVertical: "center",
    textAlign: "center",
    margin: 'auto',
    fontSize: 24,
    fontFamily: 'Roboto',

  }
});

export default SectionTwo;