import React, { Component } from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';

const ButtonContainer = styled.View`
  position: absolute;
  right: 10px;
  bottom: 10px;
`;

export default class FloatButton extends Component {
  render() {
    const { title, onPress } = this.props;

    return (
      <ButtonContainer>
        <Button title={title} onPress={onPress} />
      </ButtonContainer>
    );
  }
}
