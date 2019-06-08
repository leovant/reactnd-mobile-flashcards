import React, { Component } from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';
import colors from '../utils/colors';
import { Button, ButtonText, FloatingActions } from './Buttons';

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 10px;
  margin-bottom: 50px;
`;

const Text = styled.Text`
  font-size: 20px;
  text-align: center;
  line-height: 30px;
  color: ${colors.secondary};
`;

export default class Flashcard extends Component {
  state = {
    showAnswer: false
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.card !== nextProps.card) {
      this.setState({ showAnswer: false });
    }
  }

  showAnswer = () => this.setState({ showAnswer: true });

  onCorrect = () => (this.props.onCorrect ? this.props.onCorrect() : null);

  onIncorrect = () =>
    this.props.onIncorrect ? this.props.onIncorrect() : null;

  renderQuestion = card => (
    <Container>
      <Text>{card.question}</Text>
      <FloatingActions>
        <Button color={colors.secondary} onPress={this.showAnswer}>
          <ButtonText>Show answer</ButtonText>
        </Button>
      </FloatingActions>
    </Container>
  );

  renderAnswer = card => (
    <Container>
      <Text>{card.answer}</Text>
      <FloatingActions>
        <Button color={colors.success} onPress={this.onCorrect}>
          <ButtonText>Correct</ButtonText>
        </Button>
        <Button color={colors.error} onPress={this.onIncorrect}>
          <ButtonText>Incorrect</ButtonText>
        </Button>
      </FloatingActions>
    </Container>
  );

  render() {
    const { card } = this.props;
    const { showAnswer } = this.state;

    return showAnswer ? this.renderAnswer(card) : this.renderQuestion(card);
  }
}
