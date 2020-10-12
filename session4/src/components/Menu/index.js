import React, {Component} from 'react';
import {Text} from 'react-native';

import styles from './style';

class Menu extends Component {
  constructor() {
    super();
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <Text style={[styles.contoh, styles.warna]}>{this.props.name}</Text>
      </>
    );
  }
}

export default Menu;
