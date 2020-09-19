/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Form = ({ style, textButton, isShow }) => {
  if(isShow) {
    return (
      <View style={style}>
        <View style={{backgroundColor: 'white', borderColor:'grey', padding:5}}>
          <TextInput placeholder="Hello Who Are You?" style={{height:50, borderWidth: 1}}/>
          <TextInput secureTextEntry placeholder="Password" style={{height:50, borderWidth: 1}}/>
          <Button title={textButton} onPress={() => alert ('Thanks For Login')}/>
        </View> 
      </View>
    )
  }
  return null
}

const RenderIf = ({ condition, children }) => {
  if(condition){
    return children
  }
  return null
}

const HorizontalScrollView = () => {
  return (
    <ScrollView horizontal>
          <View style={[styles.box, color === 'red' ? styles.red : styles.purple ]}></View>
          <View style={{flex: 2, height: 200, width: 600, backgroundColor: 'blue'}}></View>
          <View style={{flex: 2, height: 200, width: 600, backgroundColor: 'green'}}></View>
          <View style={{flex: 2, height: 200, width: 600, backgroundColor: 'yellow'}}></View>
    </ScrollView> 
  )
}

const RenderCategory = ({ categories,index}) => {
  if(categories && categories.length > 0){
    return (
      <ScrollView horizontal style={{ height: 220 }}>
          {
            categories.map((category) => {
              return (
                <View key={index}>
                  <View style={{ width:100, height:100, backgroundColor: 'grey' }} />
                  <Text>{category.name}</Text>
                </View>
              )
            })
          }
      </ScrollView>
    )
  }
  return null
}
const App: () => React$Node = () => {
  const color = 'red'
  const date = 12
  const isShowHotdeals = true
  const [categories, setCategories] = useState()

  useEffect(() => {
    console.log('Componen Did Mount')
    setCategories([
      {name: 'Food', color: 'red'},
      {name: 'Beverages', color: 'green'},
      {name: 'Meat', color: 'blue'},
      {name: 'Coffee', color: 'yellow'},
      {name: 'Snack', color: ''},
      {name: 'Drink', color: 'black'},
    ])
  }, [])

  console.log('RENDER', categories?.length)
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Header />
        </View>
        <View>
          <Text>Hello World</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 2, height: 100, backgroundColor: 'red'}}></View>
          <View style={{flex: 2, height: 100, backgroundColor: 'blue'}}></View>
        </View> 
        <RenderCategory categories={categories} />
        <Form isShow style={{ backgroundColor: 'blue', height: 140}} textButton="PRESS ME" />
        <RenderIf condition={isShowHotdeals}>
        <View style={{height:50, alignItems: 'center'}}>
          <TouchableOpacity title='Click Me' onPress={()=> alert('Click Me')}>
            <Text>Click Me</Text>
          </TouchableOpacity>
        </View>
        </RenderIf>
        <View style={{height:50, backgroundColor:'grey'}}>
          <Text style={{textAlign:'center'}}>Horizontal Scroll</Text>
        </View>
        <ScrollView horizontal>
          <View style={[styles.box, color === 'red' ? styles.red : styles.purple ]}></View>
          <View style={{flex: 2, height: 150, width: 600, backgroundColor: 'blue'}}></View>
          <View style={{flex: 2, height: 150, width: 600, backgroundColor: 'green'}}></View>
          <View style={{flex: 2, height: 150, width: 600, backgroundColor: 'yellow'}}></View>
        </ScrollView>  
        <View style={{height:50, backgroundColor:'grey'}}>
          <Text style={{textAlign:'center'}}>Vertical Scroll</Text>
        </View>
        <ScrollView>
          <View style={{flex: 2, height: 600, width: 600, backgroundColor: 'red'}}></View>
          <View style={{flex: 2, height: 600, width: 600, backgroundColor: 'blue'}}></View>
          <View style={{flex: 2, height: 600, width: 600, backgroundColor: 'green'}}></View>
          <View style={{flex: 2, height: 600, width: 600, backgroundColor: 'yellow'}}></View>
        </ScrollView>   
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  box:{
    flex: 2,
    width:600,
    height:150
  },
  red: {
    backgroundColor: 'red',
  },
  purple:{
    backgroundColor:'purple'
  }
});

export default App;
