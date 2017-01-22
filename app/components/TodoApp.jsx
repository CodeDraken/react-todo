import React, { Component } from 'react';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {id: 1,text: 'Make coffee'},
        {id: 2,text: 'Make tacos'},
        {id: 3,text: 'Drink coffee'},
        {id: 4,text: 'Eat tacos'}
      ]
    };
  }

  handleAddTodo = (text) => {
    alert('new todo: ' + text);
  }

  render() {
    let {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
}

export default TodoApp;
