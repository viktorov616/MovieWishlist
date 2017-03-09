import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import manualAdd from './manualAdd';
import movieForm from './movieForm';
import search from './search';
import wishlist from './wishlist';

const rootReducer = combineReducers({
  manualAdd,
  search,
  wishlist,
  form: formReducer.plugin({
    movie: movieForm,
  }),
  routing: routerReducer,
});

export default rootReducer;
