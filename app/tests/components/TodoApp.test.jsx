import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';

import TodoApp from 'TodoApp';

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to the todos state on handleAddTodo', () => {
    let todoText = 'test text';
    let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    
    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle completed value when handleToggle called', () => {
    let todoData = {id:11, text:'Test', completed:false, createdAt: 0, completedAt: undefined};
    let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos:[todoData]});

    // check todos first item completed is false
    expect(todoApp.state.todos[0].completed).toBe(false);
    // handleToggle with id 11
    todoApp.handleToggle(11);
    // check completed changed to true
    expect(todoApp.state.todos[0].completed).toBe(true);
    // completedAt should be a number
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });

  // Test when toggle from completed to not completed completedAt === undefined  
  it('should change completedAt to undefined when toggle completed to false', () => {
    let todoData = {id:11, text:'Test', completed:true, createdAt: 0, completedAt: 1};
    let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos:[todoData]});

    expect(todoApp.state.todos[0].completed).toBe(true);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toNotExist();
  });

});
