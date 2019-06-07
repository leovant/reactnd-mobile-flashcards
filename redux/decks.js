// Actions that can be dispatched
export const types = {
  ADD_DECK: 'decks/add'
};

// Helper functions to dispatch actions
export const actionCreators = {
  add: item => ({ type: types.ADD_DECK, payload: item }),
  update: item => ({ type: types.UPDATE_DECK, payload: item }),
  remove: id => ({ type: types.REMOVE_DECK, payload: id })
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
  }

  return state;
};

export default reducer;
