import React from 'react';

const TodoItem = (props) => {
  let {text} = props;
  return (
    <li>
      {text}
    </li>
  );
}

export default TodoItem;
