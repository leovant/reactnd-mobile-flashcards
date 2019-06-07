import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import decks from './decks';

const reducer = combineReducers({ decks });

const store = createStore(reducer, undefined, autoRehydrate);

persistStore(store);

export const withStore = Component => props => (
  <Provider store={store}>
    <Component {...props} />
  </Provider>
);
