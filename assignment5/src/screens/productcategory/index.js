import React, { Children } from 'react';
import { Appbar, Text, Card, Title, Divider} from 'react-native-paper';
import { View, ScrollView, StyleSheet } from 'react-native';
//import data from '../../components/feed/CategoryList';
import FastImage from 'react-native-fast-image';
import {gql,useQuery} from '@apollo/client';

const PRODUCTS = gql`
query ( $id:String!) {
  products(filter:{category_id: {eq: $id}}) {
    items {
      id	
      name
      sku
      sale
      categories{
        id
        name
      }
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
  categoryList(filters: { ids: { eq: $id }}) {
    id
    level
    name
    children {
      id
      name
    }
	}
}
`;

const ProductCategory = ({ navigation, route }) => {
  const { child_id } = route.params;
  // Product
  const {loading, error, data} = useQuery(PRODUCTS, {
    variables: {
      id: child_id,
    },
  });
  if (loading) {
    return null;
  }  if (error) {
    return <Text>Error...</Text>;
  }

  //console.log(data);
  const items = data.products.items;
  const category = data.products.items[0].categories;
  const subtitle = data.categoryList;
  //console.log(items);
  //console.log(category);
  //console.log(subtitle)
  
  const ListCategory = () => {
    return(
    <>
    <View>
      <ScrollView horizontal>
        {category.map((val,index) => {
          return (
            <Card style={styles.bannercontainer} key={val.id}>
              <Card.Content style={styles.banner}>
                <Card.Cover source={{ uri: 'https://bassamalthawadi.com/en/wp-content/uploads/2014/04/dummy-image-green-e1398449160839.jpg' }} style={{width:'100%',height:200}} key={Math.random().toString(5).substring(0)}/>
                <Title>{val.name}</Title>
              </Card.Content>
            </Card>
          )
        })}
      </ScrollView>
      {subtitle.map((valx,index) => {
          return(
            <>
            <View key={valx.id} style={{alignItems:'center'}}>
              <Title style={styles.subtitle}>{valx.name}</Title>
            </View>
            <Divider/>
            </>
          )
      })}
      <View style={styles.container}>
        {items.map((item) => (
          <>
          <Card 
          style={styles.productcontainer} 
          key={item.sku}
          onPress={() => navigation.navigate('ProductDetail', { sku:  `${item.sku}`})} 
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
            <Card.Actions>
              <Text>
                {item.price_range.maximum_price.final_price.value}000 {item.price_range.maximum_price.final_price.currency}
              </Text>
            </Card.Actions>
          </Card>
          </>
          ))}
      </View>
    </View>
    </>
    );
}
  
  return (
    <>
    <Appbar.Header style={{backgroundColor:'#f23535'}}>
      <Appbar.Content title="Product Categories" style={{alignItems:'center'}} />
    </Appbar.Header>
    <ScrollView>
      <ListCategory />
    </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  bannercontainer: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    marginHorizontal:10,
    padding: 10,
    width:500,
    height:280,
    elevation: 5,
  },
  banner: {
    marginTop:0,
    width: 500,
    height:200,
    alignItems: 'center',
  },
  container: {
    flex:1,
    marginTop:10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap:'wrap',
  },
  productcontainer: {
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin:5,
    padding: 20,
    height:260,
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
    height: 150,
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

  },
  subtitle:{
    textAlignVertical: "center",
    textAlign: "center",
    margin: 'auto',
    paddingVertical:20,
    fontSize: 22,
    fontFamily: 'Roboto',
    color:'red',
    width:'100%',
    backgroundColor:'#d4d4d4',
  }
});

export default ProductCategory;