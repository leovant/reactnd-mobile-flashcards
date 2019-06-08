import React, { Component } from 'react';
import styled from 'styled-components/native';
import colors from '../constants/colors';

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

const Actions = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: ${props =>
    props.children.length > 1 ? 'space-between' : 'center'};
  align-items: center;
  padding: 10px;
`;

const Button = styled.TouchableOpacity`
  padding: 10px;
  background-color: ${props => props.color || colors.secondary};
  border-radius: 2px;
`;

const ButtonText = styled.Text`
  color: ${props => props.color || colors.textOnSecondary};
  font-weight: bold;
  text-transform: uppercase;
`;

export default class Flashcard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAnswer: false
    };
  }

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
      <Actions>
        <Button color={colors.secondary} onPress={this.showAnswer}>
          <ButtonText>Show answer</ButtonText>
        </Button>
      </Actions>
    </Container>
  );

  renderAnswer = card => (
    <Container>
      <Text>{card.answer}</Text>
      <Actions>
        <Button color={colors.success} onPress={this.onCorrect}>
          <ButtonText>Correct</ButtonText>
        </Button>
        <Button color={colors.error} onPress={this.onIncorrect}>
          <ButtonText>Incorrect</ButtonText>
        </Button>
      </Actions>
    </Container>
  );

  render() {
    const { card } = this.props;
    const { showAnswer } = this.state;

    return showAnswer ? this.renderAnswer(card) : this.renderQuestion(card);
  }
}
