import React, { Component } from 'react';
import * as Redux from 'react-redux';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import * as actions from 'actions';

export class TodoApp extends Component {
  onLogout = (e) => {
    let {dispatch} = this.props;
    e.preventDefault();

    dispatch(actions.startLogout());
  }
  render() {
    return (
      <div className="todo-app">
        <div className="page__actions">
          <a href="#" onClick={this.onLogout}>Logout</a>
        </div>
        
        <header>
          <h1 className="page__title">React Todo App</h1>
        </header>

        <main className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch />
              <TodoList />
              <AddTodo />
            </div>
          </div>
        </main>

      </div>
      );
  }

}

export default Redux.connect()(TodoApp);

