import { createStore } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import rootReducer from './reducers/index';

const defaultState = {};
const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
