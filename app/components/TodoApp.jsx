import React, { Component } from 'react';
import uuid from 'node-uuid';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import TodoAPI from 'TodoAPI';


class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: TodoAPI.getTodos(),
      showCompleted: false,
      searchText: ''
    };
  }

  componentDidUpdate() {
    TodoAPI.setTodos(this.state.todos);
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

