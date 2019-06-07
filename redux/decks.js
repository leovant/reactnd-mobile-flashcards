// Actions that can be dispatched
export const types = {
  ADD_DECK: 'decks/add',
  INCREMENT_CARDS: 'decks/increment-cards'
};

// Helper functions to dispatch actions
export const actionCreators = {
  add: item => ({ type: types.ADD_DECK, payload: item }),
  incrementCards: item => ({ type: types.INCREMENT_CARDS, payload: item })
};

// Initial state
const initialState = {
  1: {
    id: 1,
    title: 'Programming',
    description: '',
    score: 0,
    numberOfCards: 0
  }
};

// Reducer
const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_DECK:
      return {
        ...state,
        [payload.id]: { ...payload, score: 0, numberOfCards: 0 }
      };
    case types.INCREMENT_CARDS:
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          numberOfCards: state[payload.id].numberOfCards + 1
        }
      };
  }

  return state;
};

export default reducer;
