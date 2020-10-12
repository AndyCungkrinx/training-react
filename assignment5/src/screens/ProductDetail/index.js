import React, {useState,useEffect} from 'react';
import { View, ScrollView, StyleSheet } from "react-native";
import { Appbar, Paragraph, Avatar, Button, Text, Card, Title, Divider} from 'react-native-paper';
import NumericInput from 'react-native-numeric-input';
import {gql,useQuery,useMutation} from '@apollo/client';
import AsyncStorage from '@react-native-community/async-storage';

const PRODUCTS = gql`
query ( $sku:String!) {
  products(filter:{sku: {eq: $sku}}) {
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
}
`;

const ADDCART = gql`
mutation ( $sku:String!, $qty:Float!,$cartId:String! ) {
  addSimpleProductsToCart(
    input: {
      cart_id: $cartId
      cart_items: [
        {
          data: {
            quantity: $qty
            sku: $sku
          }
        }
      ]
    }
  )
  {
    cart{
      items {
        id
        product {
          name
          sku
        }
        quantity
      }
      prices {
        grand_total {
          value
          currency
        }
      }
    }
  } 
}
`;
const takeEmptyCart = gql`
  mutation {
    createEmptyCart
  }
`;

const LeftContent = props => <Avatar.Icon {...props} icon="cards-outline" style={{backgroundColor:'#eb5834'}} />

const ContentProduct =({sku,navigation}) =>{
    const [Qty, setQty] = useState(1);
    useEffect(() => {
      console.log('Quantity: ', Qty);
    }, [Qty])

    // Product
    const {loading, error, data} = useQuery(PRODUCTS, {
      variables: {
        sku: sku,
      },
    });
    if (loading) {
      return null;
    }  if (error) {
      return <Text>Error...</Text>;
    }
    const items = data.products.items;
    //console.log(items);
    return(
      <View>
        {items.map((item) => {
        const img = item.media_gallery;
        //console.log(img);
        return (
        <Card key={item.sku}>
          <ScrollView horizontal>
            {img.map((x,index) => (
            <View style={styles.bannercontainer} key={index+1}>
              <Card.Content style={styles.banner}>
                <Card.Cover source={{ uri: `${x.url}` }} style={{height: 250, width:200}}/>
              </Card.Content>
            </View>
            ))}
          </ScrollView>
          <Divider style={{marginTop:10}}/>
          <Card.Title title={item.name} left={LeftContent} style={styles.title} />
          <Divider style={{marginTop:10}}/>
          <Card.Content>
            <Title style={styles.h4}>
              SKU: #{sku}
            </Title>
          <Title style={styles.h3}>
          {item.price_range.maximum_price.final_price.value}000 {item.price_range.maximum_price.final_price.currency}
          </Title>
          <Divider style={{marginTop:10}}/>
          <Paragraph style={{paddingVertical:20,}}>{item.description.html}</Paragraph>
        </Card.Content>
        <Divider style={{marginTop:10}}/>
          <View>
            <Card.Content style={styles.cartbox}>
              <NumericInput 
              value={Qty} 
              minValue={1}
              maxValue={10}
              onChange={Qty => setQty(Qty)}
              onLimitReached={() => alert("Minimum 0 and Maximum 10")}
              totalWidth={150} 
              totalHeight={40} 
              iconSize={25}
              step={1}
              valueType='real'
              rounded 
              textColor='#B0228C' 
              iconStyle={{ color: 'white' }} 
              rightButtonBackgroundColor='#EA3788' 
              leftButtonBackgroundColor='#E56B70'
              />
              <AddCart
              image={item.small_image.url}
              qty={Qty}
              sku={item.sku}
              name={item.name}
              price={item.price_range.maximum_price.final_price.value}
              navigation={navigation}
              />
            </Card.Content>
          </View>
        </Card>
        )
      })}
    </View>
    )
}

const AddCart = ({qty,sku,image,name,price,navigation}) => {
    //const [cartId, setCartId] = useState(null);
    const [getCartId] = useMutation(takeEmptyCart);
    const [addCart] = useMutation(ADDCART);
    
    const handleAdd = async () => {
      let cartId = await AsyncStorage.getItem('idcart');
      if (cartId === null) {
        await getCartId()
          .then((res) => {
            const idcart = res.data.createEmptyCart;
            console.log(idcart);
            cartId = AsyncStorage.setItem('idcart', idcart);
          })
          .catch((err) => console.log(err));
      }
  
      addCart({
        variables: {
            cartId,
            sku,
            qty:qty,
        },
      })
        .then((res) => console.log(cartId))
        .catch((err) => console.log(err));
      alert('Berhasil menambahkan ke shoping cart');
    };
    return (
    <Button 
      icon='cart-plus' 
      style={styles.addcart}
      mode='outlined' 
      color='#f23535'
      onPress={() => handleAdd()}>
      Add To Cart
    </Button>
    )
}

const ProductDetail = ({route,navigation}) => {
    const { sku } = route.params;
    return(
    <>
        <Appbar.Header style={{backgroundColor:'#f23535'}}>
            <Appbar.Content title="Detail Product" style={{alignItems:'center'}} />
            <Appbar.Action icon='cart' onPress={() => navigation.navigate('Cart')} />
        </Appbar.Header>
        <ScrollView>
            <ContentProduct sku={sku} navigation={navigation} />
        </ScrollView>
    </>
    )
}


const styles = StyleSheet.create({
    bannercontainer: {
      flex: 1,
      backgroundColor: '#ffff',
      alignItems: 'center',
      marginHorizontal:5,
      padding: 10,
      width:500,
      height:280,
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
    h4:{
      fontSize: 14,
      fontFamily: 'sans-serif-light',
    },
    h3:{
        fontSize: 18,
        fontFamily: 'sans-serif-light',
        color: '#d64f1a',
      },
    title:{
      textAlignVertical: "center",
      textAlign: "center",
      margin: 'auto',
      fontSize: 20,
      fontFamily: 'sans-serif-light',
  
    },
    cartbox:{
      flex: 1,
      alignItems: 'center',
      marginHorizontal:5,
      padding: 10,
      width:500,
      height:300,
      marginTop:20,
    },
    addcart:{
      textAlignVertical: "center",
      textAlign: "center",
      alignItems:'center',
      marginTop:10,
      fontSize: 40,
      paddingTop:5,
      fontFamily: 'sans-serif-light',
      width:180,
      height:50,
    }
  });

export default ProductDetail;
