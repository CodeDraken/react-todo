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
        {id: uuid(),text: 'Make coffee', completed: true},
        {id: uuid(),text: 'Make tacos', completed: false},
        {id: uuid(),text: 'Drink coffee', completed: true},
        {id: uuid(),text: 'Eat tacos', completed: false}
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
          text: text,
          completed: false
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

  handleToggle = (id) => {
    let updatedTodos = this.state.todos.map( (todo) => {
      if ( todo.id === id ) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({
      todos: updatedTodos
    });
  }

  render() {
    let {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} onToggle={this.handleToggle} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
}

export default TodoApp;

