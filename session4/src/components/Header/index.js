import React, {Component} from 'react';
import {Text} from 'react-native';
import Menu from '../../components/Menu';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      namavariable: 'test',
    };
  }

  componentDidMount() {
    this.setState({namavariable: 'idmarco'});
  }

  render() {
    return (
      <>
        <Text>Menu</Text>
        <Text>Searching</Text>
        <Menu name="menu utama" />
      </>
    );
  }
}

export default Header;
