import React, { Component } from 'react';
import styled from 'styled-components/native';
import colors from '../utils/colors';

export const FloatingActions = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: ${props =>
    props.children.length > 1 ? 'space-around' : 'center'};
  align-items: center;
  padding: 10px;
  background-color: ${colors.primaryDark};
  opacity: 0.8;
`;

export const Button = styled.TouchableOpacity`
  padding: 10px;
  background-color: ${props => props.color || colors.secondary};
  border-radius: 2px;
  z-index: 1;
`;

export const ButtonText = styled.Text`
  color: ${props => props.color || colors.textOnSecondary};
  font-weight: bold;
  text-transform: uppercase;
`;

export default {
  FloatingActions,
  Button,
  ButtonText
};
