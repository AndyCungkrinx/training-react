import * as React from 'react';
import { StyleSheet,ScrollView } from 'react-native';
import { Card, Title } from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import data from '../../../components/feed/SectionTwo';

const SectionOne = () => {
  const category = data.categoryList;
  //console.log(category);
  //const product = data.categoryList[0].products.items;
  //console.log(product);
  return(
    <>
    {category.map((category) => {
      return (
          <Card key={category.id} style={{paddingTop:30,paddingBottom: 10}}>
            <Title style={styles.title}>{category.name}</Title>
            <ScrollView horizontal style={{paddingVertical: 10}}>
            {
              category.products.items.map((item) =>(
                <Card.Content key={item.sku} style={styles.container}>
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
      );
    })}
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

export default SectionOne;