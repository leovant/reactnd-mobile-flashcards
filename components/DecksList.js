import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import DeckItem from './DeckItem';

export default class DecksList extends Component {
  renderItem = (item, i) => {
    const { onItemPressed } = this.props;

    return (
      <TouchableOpacity key={i} onPress={() => onItemPressed(i)}>
        <DeckItem item={item} />
      </TouchableOpacity>
    );
  };

  render() {
    const { items } = this.props;

    return (
      <View>
        {items &&
          Object.keys(items).map(index => this.renderItem(items[index], index))}
      </View>
    );
  }
}
