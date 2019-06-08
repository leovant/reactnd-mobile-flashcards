import React, { Component } from 'react';
import uuid from 'uuid/v1';
import { Container, Label, Input } from './Form';
import { Button, ButtonText, FloatingActions } from '../components/Buttons';

export default class DeckForm extends Component {
  state = {
    title: '',
    description: ''
  };

  save = () => {
    if (this.state.title.trim().length === 0) {
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
        <Label>You must set the title</Label>
        <Input
          placeholder="Type the title here"
          onChangeText={text => this.setState({ title: text.trim() })}
        />
        <Label>You can also set a description</Label>
        <Input
          placeholder="Type the description here"
          onChangeText={text => this.setState({ description: text.trim() })}
        />
        <FloatingActions>
          <Button onPress={() => this.save()}>
            <ButtonText>Create Deck</ButtonText>
          </Button>
        </FloatingActions>
      </Container>
    );
  }
}
