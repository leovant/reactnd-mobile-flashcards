import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import DecksList from '../components/DecksList';
import { Button, ButtonText, FloatingActions } from '../components/Buttons';

class Home extends Component {
  addDeck = () => this.props.navigation.navigate('NewDeck');

  viewDeck = ({ id, title }) =>
    this.props.navigation.navigate('Deck', { deckId: id, title });

  render() {
    const { decks } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <DecksList
          items={decks}
          onItemPressed={this.viewDeck}
          style={{ paddingBottom: 50 }}
        />
        <FloatingActions>
          <Button onPress={this.addDeck}>
            <ButtonText>Add Deck</ButtonText>
          </Button>
        </FloatingActions>
      </View>
    );
  }
}

const mapStateToProps = ({ decks }) => ({ decks });

export default connect(mapStateToProps)(Home);
