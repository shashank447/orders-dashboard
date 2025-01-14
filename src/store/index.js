import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import order from './orders';

function createStore() {
  const history = createBrowserHistory();
  const rootReducer = combineReducers({
    router: connectRouter(history),
    order,
  });
  const store = configureStore({
    reducer: rootReducer,
  });
  return { store, history };
}

export default createStore;
