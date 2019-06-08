import React, { Component } from 'react';
import styled from 'styled-components/native';
import { ThemeProvider } from 'styled-components';
import colors from '../utils/colors';

const DeckContainer = styled.View`
  margin: 10px;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.background};
  color: ${props => props.theme.textColor};
`;

const DeckTitle = styled.Text`
  width: 100%;
  font-size: 18px;
  padding: 10px;
  padding-left: 100px;
  color: ${props => props.theme.titleColor};
  text-align: center;
`;

const DeckDescription = styled.Text`
  width: 100%;
  font-size: 14px;
  padding: 10px;
  padding-left: 100px;
  color: ${props => props.theme.textColor};
  text-align: center;
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
  background-color: ${props => props.theme.background};
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: 1px solid ${props => props.theme.background};
`;

const DeckScore = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.theme.scoreColor};
`;

const DeckScoreLabel = styled.Text`
  font-size: 12px;
  color: ${props => props.theme.scoreColor};
`;

const DeckCardsNumber = styled.Text`
  width: 100%;
  text-align: right;
  font-size: 10px;
  padding: 10px;
  color: ${props => props.theme.textColor};
`;

export default class DeckItem extends Component {
  render() {
    const { item } = this.props;

    const getTheme = () => {
      const status =
        item.score < 30 ? 'bad' : item.score > 70 ? 'great' : 'good';

      const textColor = colors.primaryLight;

      switch (status) {
        case 'bad':
          return {
            textColor,
            background: colors.error,
            scoreColor: colors.textOnError,
            titleColor: colors.error
          };
        case 'good':
          return {
            textColor,
            background: colors.warning,
            scoreColor: colors.textOnWarning,
            titleColor: colors.warning
          };
        case 'great':
          return {
            textColor,
            background: colors.success,
            scoreColor: colors.textOnSuccess,
            titleColor: colors.success
          };
      }
      return {};
    };

    return (
      <ThemeProvider theme={getTheme()}>
        <DeckContainer>
          <DeckScoreContainer>
            <DeckScoreLabel>Last score</DeckScoreLabel>
            <DeckScore>{item.score}</DeckScore>
          </DeckScoreContainer>
          <DeckTitle> {item.title} </DeckTitle>
          <DeckDescription> {item.description} </DeckDescription>
          <DeckCardsNumber>
            {' '}
            {item.numberOfCards > 0
              ? `${item.numberOfCards} question${
                  item.numberOfCards > 1 ? 's' : ''
                }`
              : 'No questions'}
          </DeckCardsNumber>
        </DeckContainer>
      </ThemeProvider>
    );
  }
}
