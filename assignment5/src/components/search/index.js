import React, {useState} from 'react';
import { Searchbar } from 'react-native-paper';

const Cari = () => {
    const [searchQuery, setSearchQuery] = useState('');
  
    const onChangeSearch = query => setSearchQuery(query);
  
    return (
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{width:'90%', height:35, fontSize: 12}}
      />
    );
  };

export default Cari;