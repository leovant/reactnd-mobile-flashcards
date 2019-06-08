import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import Flashcard from '../components/Flashcard';
import { actionCreators as cardActions } from '../redux/cards';
import { actionCreators as deckActions } from '../redux/decks';

class Quiz extends Component {
  constructor(props) {
    super(props);

    const { cards } = this.props;

    const generator = function*() {
      for (const i of Object.keys(cards)) {
        yield { ...cards[i], showAnswer: false };
      }
    };
    const iterator = generator();
    const { value } = iterator.next();

    this.state = {
      iterator,
      currentCard: value,
      finished: false,
      score: 0
    };
  }

  next = () =>
    this.setState(currentState => {
      const { value } = currentState.iterator.next();
      const { score, deck } = this.props;

      if (value === undefined) {
        this.props.score(deck.id, currentState.score);
        return { finished: true };
      }

      return {
        currentCard: value
      };
    });

  onCorrect = () => {
    this.props.correct(this.state.currentCard.id);
    this.setState(currentState => ({ score: currentState.score + 1 }));
    this.next();
  };

  onIncorrect = () => {
    this.props.incorrect(this.state.currentCard.id);
    this.next();
  };

  renderFlashcard = () => {
    return (
      <Flashcard
        card={this.state.currentCard}
        onCorrect={this.onCorrect}
        onIncorrect={this.onIncorrect}
      />
    );
  };

  renderResults = () => {
    return (
      <View>
        <Text>Finished!</Text>
      </View>
    );
  };

  render() {
    return this.state.finished ? this.renderResults() : this.renderFlashcard();
  }
}

function mapStateToProps({ decks, cards }, { navigation }) {
  const { deckId } = navigation.state.params;

  return {
    deck: decks[deckId],
    cards: Object.keys(cards)
      .map(index => cards[index])
      .filter(card => (card.deckId = deckId))
  };
}

const mapDispatchToProps = (dispatch, { navigation }) => {
  return {
    correct: cardId => {
      dispatch(cardActions.correct({ id: cardId }));
    },
    incorrect: cardId => {
      dispatch(cardActions.incorrect({ id: cardId }));
    },
    score: (deckId, score) => {
      dispatch(deckActions.updateScore({ id: deckId, score }));
    },
    goBack: () => navigation.goBack()
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);
