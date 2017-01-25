import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import {Provider} from 'react-redux';

import TodoApp from 'TodoApp';

import * as actions from 'actions';
import configure from 'configureStore';
import TodoAPI from 'TodoAPI';
const store = configure();


store.subscribe(() => {
  const state = store.getState();
  console.log('New state: ', state);
  TodoAPI.setTodos(state.todos);
});

const initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

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
