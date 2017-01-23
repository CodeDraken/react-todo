import React from 'react';
import TodoItem from 'TodoItem';

const TodoList = (props) => {
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
        <TodoItem key={todo.id} {...todo} onToggle={props.onToggle} />
      )
    });
  }

  return (
    <ul className="no-bullet">
      {renderTodos()}
    </ul>
  );

}

export default TodoList;
