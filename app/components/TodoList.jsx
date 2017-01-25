import React from 'react';
import {connect} from 'react-redux';

import TodoItem from 'TodoItem';

export const TodoList = (props) => {
  let {todos} = props;
  let renderTodos = () => {
    if (todos.length === 0) {
      return (
        <p className="container__message">Nothing To Do</p>
      );
    }

    return todos.map( (todo) => {
      return (
        // pass all props on todo down with destructuring
        <TodoItem key={todo.id} {...todo}  />
      )
    });
  }

  return (
    <ul className="no-bullet todo-list">
      {renderTodos()}
    </ul>
  );

}

export default connect(
  (state) => {
    return {
      todos: state.todos
    };
  }
)(TodoList);
