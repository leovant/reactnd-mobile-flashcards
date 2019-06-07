import React, { Component } from 'react';
import styled from 'styled-components/native';
import colors from '../constants/colors';

const Container = styled.View`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonsContainer = styled.View`
  border-radius: 10px;
  background-color: ${colors.secondary};
  display: flex;
  flex-direction: row;
`;

const Button = styled.TouchableOpacity`
  padding: 10px;
`;

const ButtonText = styled.Text`
  color: #fafafa;
  font-weight: bold;
  text-transform: uppercase;
`;

export default class FloatBar extends Component {
  renderButton = ({ title, onPress }, index) => (
    <Button key={index} onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </Button>
  );

  render() {
    const { buttons } = this.props;

    return (
      <Container>
        <ButtonsContainer>{buttons.map(this.renderButton)}</ButtonsContainer>
      </Container>
    );
  }
}
