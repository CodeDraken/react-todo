import React, { Component } from 'react';

class AddTodo extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    let todoText = this.refs.todoInput.value;
    if ( todoText.length > 0 ) {
      this.refs.todoInput.value = '';
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todoInput.focus();
    }
  }
  
  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input ref="todoInput" type="text" placeholder="What do you need to do?" />
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
  
}

export default AddTodo;
