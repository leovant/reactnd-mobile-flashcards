import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import DeckItem from '../components/DeckItem';
import FloatBar from '../components/FloatBar';

class Deck extends Component {
  render() {
    const { deck } = this.props;
    const buttons = [
      {
        title: 'Start!',
        onPress: () =>
          this.props.navigation.navigate('Quiz', {
            deckId: deck.id,
            title: deck.title
          })
      },
      {
        title: 'Add card',
        onPress: () =>
          this.props.navigation.navigate('NewCard', { deckId: deck.id })
      }
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
