import React, { Component } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import colors from '../utils/colors';

const Description = styled.Text`
  font-size: 16px;
  padding: 10px;
  text-align: center;
  color: ${colors.primaryLight};
`;

const CardsRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
`;

const Card = styled.View`
  background-color: ${props => props.color};
  height: 150px;
  padding: 10px;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardLabel = styled.Text`
  font-size: 12px;
  line-height: 24px;
  text-align: center;
  color: ${colors.whiteText};
`;

const CardText = styled.Text`
  font-size: 48px;
  line-height: 72px;
  text-align: center;
  color: ${colors.whiteText};
`;

export default class DeckDetail extends Component {
  render() {
    const { deck } = this.props;
    return (
      <View>
        <CardsRow>
          <Card color={colors.primary}>
            <CardLabel>Number of questions</CardLabel>
            <CardText>{deck.numberOfCards}</CardText>
          </Card>
          <Card color={colors.success}>
            <CardLabel>Latest score</CardLabel>
            <CardText>{deck.score}</CardText>
          </Card>
        </CardsRow>
        <Description> {deck.description} </Description>
      </View>
    );
  }
}
