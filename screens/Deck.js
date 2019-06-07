import React, { Component } from 'react';
import { Button, View } from 'react-native';
import { connect } from 'react-redux';
import DeckItem from '../components/DeckItem';
import FloatBar from '../components/FloatBar';

class Deck extends Component {
  render() {
    const { deck } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <DeckItem item={deck} />
        <FloatBar>
          <Button title="Start!" onPress={() => console.warn('Start!')} />
          <Button title="Add card" onPress={() => console.warn('New card')} />
        </FloatBar>
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
