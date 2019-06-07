// Actions that can be dispatched
export const types = {
  ADD_DECK: 'decks/add',
  UPDATE_DECK: 'decks/update',
  REMOVE_DECK: 'decks/delete'
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
    description: ''
  }
};

// Reducer
const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_DECK:
      return { ...state, [payload.id]: payload };
    case types.UPDATE_DECK:
      return { ...state };
    case types.REMOVE_DECK:
      return { ...state };
  }

  return state;
};

export default reducer;
