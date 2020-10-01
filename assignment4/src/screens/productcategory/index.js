import React from 'react';
import { Appbar, Text, Card, Title, Divider} from 'react-native-paper';
import { View, ScrollView, StyleSheet } from 'react-native';
import data from '../../components/feed/CategoryList';
import FastImage from 'react-native-fast-image';

const ProductCategory = ({ navigation, route }) => {
  const { child_id } = route.params;
  const category = data.categoryList;
  
  const ListCategory = () => {
    return(
    <>
    {category.filter(valx => valx.id == child_id).map(val => {
      const product = val.products.items;
      const children = val.children;
      //console.log(children);
      return (
        <View key={val.id}>
        <ScrollView horizontal>
          {children.map((child,index) => (
            <Card style={styles.bannercontainer} key={index}>
              <Card.Content style={styles.banner}>
                <Card.Cover source={{ uri: 'https://bassamalthawadi.com/en/wp-content/uploads/2014/04/dummy-image-green-e1398449160839.jpg' }} style={{width:'100%',height:200}} />
                <Title>{child.name}</Title>
              </Card.Content>
            </Card>
          ))}
        </ScrollView>
        <View style={{marginTop:10}}>
          <Title style={styles.title}>{val.name}</Title>
          <Divider/>
        </View>
        <View style={styles.container}>
          {product.map((item) => (
            <Card 
            style={styles.productcontainer} 
            key={item.sku}
            onPress={() => navigation.navigate('ProductDetail', { category_id: `${val.id}`, sku:  `${item.sku}`})} 
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
                  {item.price_range.maximum_price.final_price.value}00 {item.price_range.maximum_price.final_price.currency}
                </Text>
              </Card.Actions>
            </Card>
          ))}
        </View>
        </View>
      )
    })}
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

  }
});

export default ProductCategory;