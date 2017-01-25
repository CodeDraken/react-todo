import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import {Provider} from 'react-redux';

import TodoApp from 'TodoApp';

import * as actions from 'actions';
import configure from 'configureStore';
const store = configure();

store.subscribe(() => {
  console.log('New state: ', store.getState());
});

store.dispatch(actions.addTodo('Setup redux'));
store.dispatch(actions.setSearchText('redux'));
store.dispatch(actions.toggleShowCompleted());

// Load foundation
$(document).foundation();

// App css
require( 'applicationStyles' );

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
