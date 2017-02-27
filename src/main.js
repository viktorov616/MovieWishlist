import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import App from './pages/App';
import Search from './pages/Search';
import Wishlist from './pages/Wishlist';

import store, { history } from './store';

import './style.scss';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Wishlist} />
        <Route path="/search" component={Search} />
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
