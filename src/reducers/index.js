import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import search from './search';
import wishlist from './wishlist';

const rootReducer = combineReducers({
  search,
  wishlist,
  routing: routerReducer,
});

export default rootReducer;
