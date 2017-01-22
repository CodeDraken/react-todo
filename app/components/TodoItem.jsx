import React from 'react';

const TodoItem = (props) => {
  let { text, completed, id } = props;
  return (
    <li className="todo-item">
      <label>
        <input type="checkbox" defaultChecked={completed} onChange={() => {
         props.onToggle(id)
        }} />
        {text}
      </label>
      
    </li>
  );
}

export default TodoItem;
