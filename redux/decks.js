// Actions that can be dispatched
export const types = {
  ADD_DECK: 'decks/add',
  INCREMENT_CARDS: 'decks/increment-cards',
  UPDATE_SCORE: 'decks/score'
};

// Helper functions to dispatch actions
export const actionCreators = {
  add: item => ({ type: types.ADD_DECK, payload: item }),
  incrementCards: item => ({ type: types.INCREMENT_CARDS, payload: item }),
  updateScore: item => ({ type: types.UPDATE_SCORE, payload: item })
};

// Initial state
const initialState = {
  1: {
    id: 1,
    title: 'Programming',
    description: '',
    score: 0,
    numberOfCards: 3
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
          numberOfCards: ++state[payload.id].numberOfCards
        }
      };
    case types.UPDATE_SCORE:
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          score: payload.score
        }
      };
  }

  return state;
};

export default reducer;
