import React, { Component } from 'react';
import styled from 'styled-components/native';
import { ThemeProvider } from 'styled-components';
import colors from '../constants/colors';

const DeckContainer = styled.View`
  margin: 10px;
  border-radius: 5px;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.color};
`;

const DeckTitle = styled.Text`
  width: 100%;
  font-size: 18px;
  padding: 10px;
  padding-left: 100px;
  color: ${props => props.theme.color};
`;

const DeckDescription = styled.Text`
  width: 100%;
  font-size: 14px;
  padding: 10px;
  padding-left: 100px;
  color: ${props => props.theme.color};
`;

const DeckScoreContainer = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 90px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DeckScore = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.theme.color};
`;

const DeckScoreLabel = styled.Text`
  font-size: 12px;
  color: ${props => props.theme.color};
`;

const DeckCardsNumber = styled.Text`
  width: 100%;
  text-align: right;
  font-size: 10px;
  padding: 10px;
  color: ${props => props.theme.color};
`;

export default class DeckItem extends Component {
  render() {
    const { item } = this.props;
    const score = item.score > 0 ? (item.score / item.numberOfCards) * 100 : 0;

    const getTheme = () => {
      const status = score < 30 ? 'bad' : score > 70 ? 'great' : 'good';

      switch (status) {
        case 'bad':
          return { background: colors.error, color: colors.textOnError };
        case 'good':
          return { background: colors.warning, color: colors.textOnWarning };
        case 'great':
          return { background: colors.success, color: colors.textOnSuccess };
      }
      return {};
    };

    return (
      <ThemeProvider theme={getTheme()}>
        <DeckContainer>
          <DeckScoreContainer>
            <DeckScoreLabel>Last score</DeckScoreLabel>
            <DeckScore>{Math.round(score)}</DeckScore>
          </DeckScoreContainer>
          <DeckTitle> {item.title} </DeckTitle>
          <DeckDescription> {item.description} </DeckDescription>
          <DeckCardsNumber>
            {' '}
            {item.numberOfCards > 0
              ? `${item.numberOfCards} card${item.numberOfCards > 1 ? 's' : ''}`
              : 'No cards'}
          </DeckCardsNumber>
        </DeckContainer>
      </ThemeProvider>
    );
  }
}
