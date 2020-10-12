import React from 'react';
import { ScrollView } from 'react-native';
import { Appbar} from 'react-native-paper';
import Header from './components/Header';
import Banner from './components/Banner';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';

const Home = ({ navigation }) => {
    return (
      <>
        <Header navigation={navigation}/>
        <ScrollView>
          <Banner/>
          <SectionOne/>
          <SectionTwo/>
          <SectionThree/>
        </ScrollView>
        
      </>
    );
  };

export default Home;