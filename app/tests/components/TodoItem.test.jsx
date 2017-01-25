import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';

import {TodoItem} from 'TodoItem';

describe('TodoItem', () => {
  it('should exist', () => {
    expect(TodoItem).toExist();
  });

  it('should dispatch TOGGLE_TODO action on click', () => {
    let todoData = {id: 18, text: 'todo test', completed: true};
    let spy = expect.createSpy();
    let todoItem = TestUtils.renderIntoDocument(<div><TodoItem {...todoData} dispatch={spy} /></div>);

    let $el = $(ReactDOM.findDOMNode(todoItem));
    let input = $el.find('input[type="checkbox"]');

    TestUtils.Simulate.change(input[0]);
    expect(spy).toHaveBeenCalledWith({
      type: 'TOGGLE_TODO',
      id: todoData.id
    });

    
  });

});
