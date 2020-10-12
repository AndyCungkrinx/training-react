import React from 'react';
import { Appbar} from 'react-native-paper';
import Cari from '../../../components/search';

const Header = ({navigation}) => {
    return(
      <Appbar.Header style={{paddingHorizontal:15, paddingVertical:20, backgroundColor:'#f23535'}}>
        <Cari/>
        <Appbar.Action icon='cart' onPress={() => navigation.navigate('Cart')} />
      </Appbar.Header>
    );
}

export default Header;