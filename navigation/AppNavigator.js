import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import Deck from '../screens/Deck';
import NewDeck from '../screens/NewDeck';
import NewCard from '../screens/NewCard';
import Quiz from '../screens/Quiz';
import colors from '../utils/colors';

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
      navigationOptions: ({ navigation }) => ({
        headerTintColor: colors.secondary,
        headerStyle: { backgroundColor: colors.primary },
        title: navigation.state.params.title
      })
    },
    NewDeck: {
      screen: NewDeck,
      navigationOptions: {
        title: 'New deck',
        headerTintColor: colors.secondary,
        headerStyle: { backgroundColor: colors.primary }
      }
    },
    NewCard: {
      screen: NewCard,
      navigationOptions: {
        title: 'New card',
        headerTintColor: colors.secondary,
        headerStyle: { backgroundColor: colors.primary }
      }
    },
    Quiz: {
      screen: Quiz,
      navigationOptions: ({ navigation }) => ({
        headerTintColor: colors.secondary,
        headerStyle: { backgroundColor: colors.primary },
        title: navigation.state.params.title
      })
    }
  })
);
