import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, Text, Headline} from 'react-native-paper';
import FastImage from 'react-native-fast-image';

const Cart = ({route}) => {
    if (route.params == undefined){
      return(<View style={styles.nocart}><Headline>Your cart is empty!</Headline></View>)
    }
    else{
    const {name,qty,price,image} = route.params;
    const total= qty*price;
    return (
    <>
        <Appbar.Header style={{backgroundColor:'#f23535'}}>
            <Appbar.Content title="Cart" style={{alignItems:'center'}}/>
        </Appbar.Header>
        <View style={styles.headerContainer}>
            <Text style={{width:90}}>Total Price</Text>
            <Text style={{width:90}}>Price</Text>
            <Text style={{width:110}}>Qty</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
            <FastImage
                style={{width:100,height:200, marginTop:-30}}
                source={{
                uri: `${image}`,
                priority: FastImage.priority.high,
                cache: FastImage.cacheControl.immutable,
                }}
                resizeMode={FastImage.resizeMode.contain}
              />
            <Text style={styles.item}>{name}</Text>
            <Text style={styles.item}>{qty}</Text>
            <Text style={styles.item}>{price}00</Text>
            <Text style={styles.item}>{total}00 IDR</Text>
      </View>
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
    },
    item: {
        flex:4,
        marginLeft:20,
        marginVertical:50,
        alignItems: 'center',
        width:100,
        height:150,
    },
    nocart:{
        marginVertical:300,
        alignItems: 'center',
        height:300,
        fontSize: 600,
    }
});

export default Cart;