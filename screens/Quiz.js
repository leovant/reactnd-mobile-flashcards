import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import Flashcard from '../components/Flashcard';
import { actionCreators as cardActions } from '../redux/cards';
import { actionCreators as deckActions } from '../redux/decks';
import colors from '../utils/colors';
import {
  clearLocalNotification,
  setLocalNotification
} from '../utils/notifications';
import { Button, ButtonText, FloatingActions } from '../components/Buttons';

const ResultsContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 100%;
`;

const ScoreLabel = styled.Text`
  font-size: 20px;
  line-height: 30px;
  color: ${colors.secondary};
`;

const Score = styled.Text`
  font-size: 60px;
  line-height: 90px;
  color: ${colors.primary};
`;

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = this.initState();
  }

  initState = () => {
    const { cards, navigation } = this.props;

    const generator = function*() {
      const keys = Object.keys(cards);

      for (const i of keys) {
        yield {
          ...cards[i],
          index: `Question ${keys.indexOf(i) + 1} of ${keys.length}`
        };
      }
    };
    const iterator = generator();
    const { value } = iterator.next();

    navigation.setParams({ title: value.index });

    return {
      iterator,
      currentCard: value,
      finished: false,
      score: 0
    };
  };

  next = () =>
    this.setState(currentState => {
      const { value } = currentState.iterator.next();
      const { score, deck, navigation } = this.props;

      if (value === undefined) {
        score(deck.id, currentState.score);
        clearLocalNotification().then(setLocalNotification);
        navigation.setParams({ title: 'Finished!' });
        return { finished: true };
      }

      navigation.setParams({ title: value.index });

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

  restart = () => {
    this.setState(this.initState());
  };

  back = () => {
    const { deck, navigation } = this.props;

    navigation.navigate('Deck', {
      deckId: deck.id,
      title: deck.title
    });
  };

  renderFlashcard = () => (
    <Flashcard
      card={this.state.currentCard}
      onCorrect={this.onCorrect}
      onIncorrect={this.onIncorrect}
    />
  );

  renderResults = () => (
    <ResultsContainer>
      <ScoreLabel>Your score</ScoreLabel>
      <Score>{this.props.deck.score}</Score>
      <FloatingActions>
        <Button color={colors.success} onPress={this.restart}>
          <ButtonText>Start new quiz</ButtonText>
        </Button>
        <Button color={colors.error} onPress={this.back}>
          <ButtonText>Back to deck</ButtonText>
        </Button>
      </FloatingActions>
    </ResultsContainer>
  );

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
      .filter(card => card.deckId === deckId)
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
