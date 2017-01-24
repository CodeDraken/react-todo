import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';

import TodoList from 'TodoList';
import TodoItem from 'TodoItem';

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo item', () => {
    let todos = [
      {id: 1,text: 'item'},
      {id: 2,text: 'item 2'}
    ];
    let todoList = TestUtils.renderIntoDocument(<div><TodoList todos={todos}/></div>);

    // expect(TestUtils.isDOMComponent(todoList)).toBe(true);
    // expect(TestUtils.isCompositeComponent(todoList)).toBe(false);

    // let elemsCount = $(todoList).find('.todo-item').length;
    let $el = $(ReactDOM.findDOMNode(todoList));
    expect($el.find('.todo').length).toBe(2);
  });

  it('should show a message when no todos found', () => {
    let todos = [];
    let todoList = TestUtils.renderIntoDocument(<div><TodoList todos={todos}/></div>);
    let $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });

});
