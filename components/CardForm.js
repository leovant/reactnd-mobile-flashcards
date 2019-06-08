import React, { Component } from 'react';
import uuid from 'uuid/v1';
import { Container, Label, Input } from './Form';
import { Button, ButtonText, FloatingActions } from '../components/Buttons';

export default class CardForm extends Component {
  state = {
    question: '',
    answer: ''
  };

  save = () => {
    const { question, answer } = this.state;

    if (question.trim().length === 0 || answer.trim().length === 0) {
      return;
    }

    const data = {
      ...this.state,
      id: uuid()
    };

    this.props.onSubmit(data);
  };

  render() {
    return (
      <Container>
        <Label>What's the question?</Label>
        <Input
          placeholder="Type the question here"
          onChangeText={text => this.setState({ question: text.trim() })}
        />
        <Label>What's the answer</Label>
        <Input
          placeholder="Type the answer here"
          onChangeText={text => this.setState({ answer: text.trim() })}
        />
        <FloatingActions>
          <Button onPress={() => this.save()}>
            <ButtonText>Save</ButtonText>
          </Button>
        </FloatingActions>
      </Container>
    );
  }
}
