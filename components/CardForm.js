import React, { Component } from 'react';
import uuid from 'uuid/v1';
import { Container, Label, Input } from './Form';
import FloatButton from './FloatButton';

export default class CardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: ''
    };
  }

  save = () => {
    const data = {
      ...this.state,
      id: uuid()
    };

    this.props.onSubmit(data);
    this.props.redirectOnSubmit();
  };

  render() {
    return (
      <Container>
        <Label>What's the question?</Label>
        <Input
          placeholder="Type the question here"
          onChangeText={text => this.setState({ question: text })}
        />
        <Label>What's the answer</Label>
        <Input
          placeholder="Type the answer here"
          onChangeText={text => this.setState({ question: text })}
        />
        <FloatButton title="Save" onPress={() => this.save()} />
      </Container>
    );
  }
}
