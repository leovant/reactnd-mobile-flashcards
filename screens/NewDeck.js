import React, { Component } from 'react';
import { connect } from 'react-redux';
import DeckForm from '../components/DeckForm';
import { actionCreators } from '../redux/decks';

class NewDeck extends Component {
  render() {
    const { addDeck, goBack } = this.props;

    return <DeckForm onSubmit={addDeck} redirectOnSubmit={goBack} />;
  }
}

const mapStateToProps = ({ decks }) => ({ decks });

const mapDispatchToProps = (dispatch, { navigation }) => ({
  addDeck: item => dispatch(actionCreators.add(item)),
  goBack: () => navigation.goBack()
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewDeck);
