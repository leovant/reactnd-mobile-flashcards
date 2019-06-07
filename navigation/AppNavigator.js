import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import Deck from '../screens/Deck';
import NewDeck from '../screens/NewDeck';
import colors from '../constants/colors';

export default createAppContainer(
  createStackNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Your decks',
        headerTintColor: colors.secondary,
        headerStyle: { backgroundColor: colors.primary }
      }
    },
    Deck: {
      screen: Deck,
      navigationOptions: {
        headerTintColor: colors.secondary,
        headerStyle: { backgroundColor: colors.primary }
      }
    },
    NewDeck: {
      screen: NewDeck,
      navigationOptions: {
        title: 'New deck',
        headerTintColor: colors.secondary,
        headerStyle: { backgroundColor: colors.primary }
      }
    }
  })
);
