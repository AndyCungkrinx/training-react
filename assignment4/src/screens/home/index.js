import React from 'react';
import { ScrollView } from 'react-native';
import { Appbar} from 'react-native-paper';
import Cari from '../../components/search';
import Banner from './components/Banner';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';

const Header = () => {
    return(
      <Appbar.Header style={{paddingHorizontal:15, paddingVertical:20}}>
        <Cari/>
        <Appbar.Action icon='cart' onPress={() => {}} />
      </Appbar.Header>
    );
}
const Home = ({ navigation }) => {
    return (
      <>
        <Header/>
        <ScrollView>
          <Banner/>
          <SectionOne/>
          <SectionTwo/>
        </ScrollView>
        
      </>
    );
  };

export default Home;