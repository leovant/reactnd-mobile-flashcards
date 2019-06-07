// Actions that can be dispatched
export const types = {
  ADD_CARD: 'cards/add'
};

// Helper functions to dispatch actions
export const actionCreators = {
  add: item => ({ type: types.ADD_CARD, payload: item })
};

// Initial state
const initialState = {};

// Reducer
const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_CARD:
      return {
        ...state,
        [payload.id]: { ...payload, correct: 0, incorrect: 0 }
      };
  }

  return state;
};

export default reducer;
