// Actions that can be dispatched
export const types = {
  ADD_CARD: 'cards/add',
  CORRECT_CARD: 'cards/correct',
  INCORRECT_CARD: 'cards/incorrect'
};

// Helper functions to dispatch actions
export const actionCreators = {
  add: item => ({ type: types.ADD_CARD, payload: item }),
  correct: item => ({ type: types.CORRECT_CARD, payload: item }),
  incorrect: item => ({ type: types.INCORRECT_CARD, payload: item })
};

// Initial state
const initialState = {
  1: {
    id: 1,
    question: `If a condition's value is zero, then the condition is evaluated as false ( i.e., if(0) means false). True or false?`,
    answer: 'True.',
    deckId: 1,
    correct: 0,
    incorrect: 0
  },
  2: {
    id: 2,
    question: `In computer programming, what is a program?`,
    answer: 'A set of instructions that tell a computer what to do.',
    deckId: 1,
    correct: 0,
    incorrect: 0
  },
  3: {
    id: 3,
    question: `How do you call a set of several programs working together to solve a problem?`,
    answer: 'Application.',
    deckId: 1,
    correct: 0,
    incorrect: 0
  }
};

// Reducer
const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_CARD:
      return {
        ...state,
        [payload.id]: { ...payload, correct: 0, incorrect: 0 }
      };
    case types.CORRECT_CARD:
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          correct: ++state[payload.id].correct
        }
      };
    case types.INCORRECT_CARD:
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          incorrect: ++state[payload.id].incorrect
        }
      };
  }

  return state;
};

export default reducer;
