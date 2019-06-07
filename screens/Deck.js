import React, { Component } from 'react';
import { Button, View } from 'react-native';
import { connect } from 'react-redux';
import DeckItem from '../components/DeckItem';
import FloatBar from '../components/FloatBar';

class Deck extends Component {
  render() {
    const { deck } = this.props;
    const buttons = [
      { title: 'Start!', onPress: () => console.warn('Start!') },
      { title: 'Add card', onPress: () => console.warn('New card') }
    ];

    return (
      <View style={{ flex: 1 }}>
        <DeckItem item={deck} />
        <FloatBar buttons={buttons} />
      </View>
    );
  }
}

function mapStateToProps({ decks }, { navigation }) {
  const { deckId } = navigation.state.params;

  return {
    deck: decks[deckId]
  };
}

export default connect(mapStateToProps)(Deck);
