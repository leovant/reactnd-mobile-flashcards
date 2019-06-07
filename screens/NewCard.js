import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardForm from '../components/CardForm';
import { actionCreators as cardActions } from '../redux/cards';
import { actionCreators as deckActions } from '../redux/decks';

class NewCard extends Component {
  render() {
    const { addCard, goBack } = this.props;

    return <CardForm onSubmit={addCard} redirectOnSubmit={goBack} />;
  }
}

const mapStateToProps = ({ cards }) => ({ cards });

const mapDispatchToProps = (dispatch, { navigation }) => {
  const { deckId } = navigation.state.params;

  return {
    addCard: item => {
      dispatch(cardActions.add({ ...item, deckId }));
      dispatch(deckActions.incrementCards({ id: deckId }));
    },
    goBack: () => navigation.goBack()
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCard);
