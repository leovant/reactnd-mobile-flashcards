import React, { Component } from 'react';
import { connect } from 'react-redux';
import DeckForm from '../components/DeckForm';
import { actionCreators } from '../redux/decks';

class NewDeck extends Component {
  onSubmit = data => {
    const { addDeck, goBack, redirectTo } = this.props;

    addDeck(data);
    redirectTo(data);
  };

  render() {
    return <DeckForm onSubmit={this.onSubmit} />;
  }
}

const mapStateToProps = ({ decks }) => ({ decks });

const mapDispatchToProps = (dispatch, { navigation }) => ({
  addDeck: item => dispatch(actionCreators.add(item)),
  redirectTo: deck =>
    navigation.navigate('Deck', { deckId: deck.id, title: deck.title })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewDeck);
