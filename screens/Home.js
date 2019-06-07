import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { actionCreators } from '../redux/decks';
import DecksList from '../components/DecksList';
import FloatButton from '../components/FloatButton';
import colors from '../constants/colors';

class Home extends Component {
  addDeck = () => this.props.navigation.navigate('NewDeck');

  viewDeck = (id, title) =>
    this.props.navigation.navigate('Deck', { deckId: id, title });

  render() {
    const { decks } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <DecksList items={decks} onItemPressed={this.viewDeck} />
        <FloatButton title="Add deck" onPress={this.addDeck} />
      </View>
    );
  }
}

const mapStateToProps = ({ decks }) => ({ decks });

export default connect(mapStateToProps)(Home);
