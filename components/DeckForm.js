import React, { Component } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import uuid from 'uuid/v1';
import styled from 'styled-components/native';
import colors from '../constants/colors';
import FloatButton from './FloatButton';

const Container = styled.View`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 10px;
`;

const Label = styled.Text`
  margin: 40px 0 20px 0;
  font-size: 20px;
  color: ${colors.secondary};
`;

const Input = styled.TextInput`
  font-size: 20px;
  line-height: 28px;
  padding: 4px;
  color: ${colors.text};
`;

export default class DeckForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
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
        <Label>You must set the title</Label>
        <Input
          placeholder="Type the title here"
          onChangeText={text => this.setState({ title: text })}
        />
        <Label>You can also set a description</Label>
        <Input
          placeholder="Type the description here"
          onChangeText={text => this.setState({ description: text })}
        />
        <FloatButton title="Save" onPress={() => this.save()} />
      </Container>
    );
  }
}
