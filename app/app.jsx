import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';
import {Provider} from 'react-redux';

import * as actions from 'actions';
import configure from 'configureStore';
import firebase from 'app/firebase/';
import router from 'app/router/';

const store = configure();

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(actions.login(user.uid));
    store.dispatch(actions.startAddTodos());
    hashHistory.push('/todos');
  } else {
    store.dispatch(actions.logout());
    hashHistory.push('/');
  }
});


// fetch todos from firebase
// store.dispatch(actions.startAddTodos());

// Load foundation
$(document).foundation();

// App css
require( 'applicationStyles' );


ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
