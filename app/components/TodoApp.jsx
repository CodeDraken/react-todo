import React, { Component } from 'react';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import uuid from 'node-uuid';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {id: uuid(),text: 'Make coffee'},
        {id: uuid(),text: 'Make tacos'},
        {id: uuid(),text: 'Drink coffee'},
        {id: uuid(),text: 'Eat tacos'}
      ],
      showCompleted: false,
      searchText: ''
    };
  }

  handleAddTodo = (text) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text
        }
      ]
    });
  }

  handleSearch = (showCompleted, searchText) => {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  }

  render() {
    let {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
}

export default TodoApp;

