import React, { Component } from 'react';
import uuid from 'node-uuid';
import moment from 'moment';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';


const TodoApp = () => {
    return (
      <div className="todo-app">
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

export default TodoApp;

