import React,{useState} from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Appbar, Text, Headline} from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import {gql,useQuery} from '@apollo/client';
import AsyncStorage from '@react-native-community/async-storage';

const ShowCart = gql`
query Cart($cartId: String!) {
    cart(cart_id: $cartId) {
      items {
        id
        product {
          name
          sku
          thumbnail {
            url
          }
        }
        prices {
          price {
            value
            currency
          }
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
`;

const Cart = ({route}) => {
    const [cartId, setCartId] = useState('');
    AsyncStorage.getItem('idcart')
      .then((res) => {setCartId(res);
      })
      .catch((err) => console.log(err));
    const response = useQuery(ShowCart, {
      variables: {
        cartId: cartId
      },
      fetchPolicy: 'network-only',
    });
    if (cartId == null){
       return(<View style={styles.nocart}><Headline>Your cart is empty!</Headline></View>)
    }
    else{
    const {loading, error, data} = response;
    if (loading) {
      return null;
    }  
    if (error) {
      return <Text>Error...</Text>;
    }
    const cartitem=data.cart.items;
    const grandtotal=data.cart.prices.grand_total
    //console.log(cartitem);
    return (
    <>
        <Appbar.Header style={{backgroundColor:'#f23535'}}>
            <Appbar.Content title="Shoping Cart" style={{alignItems:'center'}}/>
        </Appbar.Header>
        <ScrollView>
        <View style={styles.headerContainer}>
            <Text style={{width:90, height:100}}>Total Price</Text>
            <Text style={{width:90, height:100}}>Price</Text>
            <Text style={{width:110, height:100}}>Qty</Text>
            <Text style={{width:110, height:100}}>Name</Text>
        </View>
        {cartitem.map((val) => {
        const noimage = 'https://swiftpwa.testingnow.me/assets/img/placeholder.png';
        if (val.product.thumbnail.url == null){
            img=noimage
        }
        else{
            img=val.product.thumbnail.url
        }
        const total= val.quantity*val.prices.price.value;
        return(
        <View style={{flex: 1, flexDirection: 'row'}} key={val.id}>
            <FastImage
                style={{width:100,height:200, marginTop:-30,shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,}}
                source={{
                uri: 'https://swiftpwa.testingnow.me/assets/img/placeholder.png',
                priority: FastImage.priority.low,
                cache: FastImage.cacheControl.immutable,
                }}
                resizeMode={FastImage.resizeMode.contain}
              />
            <Text style={styles.item}>{val.product.name}</Text>
            <Text style={styles.item}>{val.quantity}</Text>
            <Text style={styles.item}>{val.prices.price.value}000 IDR</Text>
            <Text style={styles.item}>{total}000 IDR</Text>
        </View>
        )})
        }
        <View style={styles.headerContainer}>
        <Text style={{width:90, height:100}}>{grandtotal.value}000 IDR</Text>
        <Text style={{width:90, height:100}}>Grand Total</Text>
        </View>
        </ScrollView>
    </>
    )
    }
}

const styles = StyleSheet.create({
    headerContainer: {
      flex: 0.04,
      flexDirection: 'row-reverse',
      backgroundColor: '#e6e2df',
      paddingVertical:10,
      height:40,
    },
    item: {
        flex:4,
        marginLeft:20,
        marginVertical:50,
        alignItems: 'center',
        width:100,
        height:60,
    },
    nocart:{
        marginVertical:300,
        alignItems: 'center',
        height:300,
        fontSize: 600,
    }
});

export default Cart;