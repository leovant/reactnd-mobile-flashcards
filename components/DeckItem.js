import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import colors from '../constants/colors';

const CardView = styled.View`
  margin: 10px;
  background-color: white;
  padding: 10px;
  border: 1px solid ${colors.primaryLight};
  border-radius: 10px;
`;

export default class DeckItem extends Component {
  render() {
    const { item } = this.props;

    return (
      <CardView>
        <Text> {item.title} </Text>
      </CardView>
    );
  }
}
