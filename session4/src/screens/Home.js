import React from 'react';
import { Text, View, Button, Image } from 'react-native';

const Home = ({ navigation }) => {
  return (
      <View style={{height:100, paddingTop: 20}}>
          <Text style={{textAlign:'center', fontSize:20, height:30}}>Welcome To Our Homepage</Text>
          <Image
        source={{
          uri:
            'https://www.ecommercenext.org/wp-content/uploads/2020/06/snapchat-repeat-bg.png',
        }}
        style={{resizeMode: 'contain', width: '100%',height:'100%', paddingTop: '66.66%'}}
      />
      <Button
        title="Go To Detail" 
        onPress={() => navigation.navigate('Detail', { id: 1 })}  
      />
      </View>
  )
}

export default Home