import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import TodoApp from 'TodoApp';

// Load foundation
$(document).foundation();

// App css
require( 'applicationStyles' );

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
