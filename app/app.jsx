import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import {Provider} from 'react-redux';

import TodoApp from 'TodoApp';
import Login from 'Login';

import * as actions from 'actions';
import configure from 'configureStore';
import TodoAPI from 'TodoAPI';
const store = configure();


// fetch todos from firebase
store.dispatch(actions.startAddTodos());

// Load foundation
$(document).foundation();

// App css
require( 'applicationStyles' );

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/">
          <Route path="/todos" component={TodoApp}/>
          <IndexRoute component={Login}/>
        </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
