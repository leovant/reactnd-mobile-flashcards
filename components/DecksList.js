import React, { Component } from 'react';
import { TouchableOpacity, ScrollView } from 'react-native';
import DeckItem from './DeckItem';

export default class DecksList extends Component {
  renderItem = (item, i) => {
    const { onItemPressed } = this.props;

    return (
      <TouchableOpacity key={i} onPress={() => onItemPressed(item)}>
        <DeckItem item={item} />
      </TouchableOpacity>
    );
  };

  render() {
    const { items } = this.props;

    return (
      <ScrollView>
        {items &&
          Object.keys(items).map(index => this.renderItem(items[index], index))}
      </ScrollView>
    );
  }
}
