import React from 'react';
import { Appbar} from 'react-native-paper';
import Cari from '../../../components/search';

const Header = () => {
    return(
      <Appbar.Header style={{paddingHorizontal:15, paddingVertical:20, backgroundColor:'#ff7c2b'}}>
        <Cari/>
        <Appbar.Action icon='cart' onPress={() => {}} />
      </Appbar.Header>
    );
}

export default Header;