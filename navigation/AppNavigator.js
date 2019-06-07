import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import Deck from '../screens/Deck';

export default createAppContainer(
  createStackNavigator({
    Home: {
      screen: Home,
      navigationOptions: { header: null }
    },
    Deck: {
      screen: Deck,
      navigationOptions: { header: null }
    }
  })
);
