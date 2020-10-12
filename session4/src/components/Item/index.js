import React, {PureComponent} from 'react';
import {Text} from 'react-native';
class Item extends PureComponent {
  render() {
    return <Text>{this.props.title}</Text>;
  }
}
export default Item;
