import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import rootReducer from './reducers/index';

const enhancers = compose(
  applyMiddleware(thunk),
);
const defaultState = {};
const store = createStore(rootReducer, defaultState, enhancers);
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
