import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import App from './pages/App';
import ManualAdd from './pages/ManualAdd';
import Search from './pages/Search';
import Wishlist from './pages/Wishlist';

import store, { history } from './store';

import './style.scss';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/MovieWishlist/" component={App}>
        <IndexRoute component={Wishlist} />
        <Route path="/MovieWishlist/search" component={Search} />
        <Route path="/MovieWishlist/manual-add" component={ManualAdd} />
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
