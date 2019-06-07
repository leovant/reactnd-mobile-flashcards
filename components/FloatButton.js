import React, { Component } from 'react';
import styled from 'styled-components/native';
import colors from '../constants/colors';

const ButtonContainer = styled.View`
  position: absolute;
  right: 10px;
  bottom: 10px;
`;

const Button = styled.TouchableOpacity`
  background-color: ${colors.secondary};
  border-radius: 2px;
  padding: 10px;
`;

const ButtonText = styled.Text`
  color: ${colors.textOnSecondary};
  font-weight: bold;
  text-transform: uppercase;
`;

export default class FloatButton extends Component {
  render() {
    return (
      <ButtonContainer>
        <Button {...this.props}>
          <ButtonText>{this.props.title}</ButtonText>
        </Button>
      </ButtonContainer>
    );
  }
}
