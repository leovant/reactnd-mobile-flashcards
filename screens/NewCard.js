import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardForm from '../components/CardForm';
import { actionCreators as cardActions } from '../redux/cards';
import { actionCreators as deckActions } from '../redux/decks';

class NewCard extends Component {
  onSubmit = data => {
    const { addCard, goBack } = this.props;

    addCard(data);
    goBack();
  };

  render() {
    return <CardForm onSubmit={this.onSubmit} />;
  }
}

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
  undefined,
  mapDispatchToProps
)(NewCard);
