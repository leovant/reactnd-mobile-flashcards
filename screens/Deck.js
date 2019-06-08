import React, { Component } from 'react';
import { Animated, View } from 'react-native';
import { connect } from 'react-redux';
import DeckDetail from '../components/DeckDetail';
import { Button, ButtonText, FloatingActions } from '../components/Buttons';

class Deck extends Component {
  state = {
    fadeAnim: new Animated.Value(0)
  };

  componentDidMount() {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 500
    }).start();
  }

  render() {
    const { deck } = this.props;

    return (
      <Animated.View style={{ flex: 1, opacity: this.state.fadeAnim }}>
        <DeckDetail deck={deck} />
        <FloatingActions>
          {deck.numberOfCards > 0 && (
            <Button
              onPress={() =>
                this.props.navigation.navigate('Quiz', {
                  deckId: deck.id,
                  title: deck.title
                })
              }
            >
              <ButtonText>Start a Quiz</ButtonText>
            </Button>
          )}
          <Button
            onPress={() =>
              this.props.navigation.navigate('NewCard', { deckId: deck.id })
            }
          >
            <ButtonText>New Question</ButtonText>
          </Button>
        </FloatingActions>
      </Animated.View>
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
