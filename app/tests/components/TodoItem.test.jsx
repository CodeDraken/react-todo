import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';

import * as actions from 'actions';

import {TodoItem} from 'TodoItem';

describe('TodoItem', () => {
  it('should exist', () => {
    expect(TodoItem).toExist();
  });

  it('should dispatch UPDATE_TODO action on click', () => {
    let todoData = {id: 18, text: 'todo test', completed: true};
    const action = actions.startToggleTodo(todoData.id, !todoData.completed);
    let spy = expect.createSpy();
    let todoItem = TestUtils.renderIntoDocument(<div><TodoItem {...todoData} dispatch={spy} /></div>);

    let $el = $(ReactDOM.findDOMNode(todoItem));
    let input = $el.find('input[type="checkbox"]');

    TestUtils.Simulate.change(input[0]);
    expect(spy).toHaveBeenCalledWith(action);

    
  });

});
