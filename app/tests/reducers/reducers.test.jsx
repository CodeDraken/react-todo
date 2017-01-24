import expect from 'expect';
import df from 'deep-freeze-strict';

import * as reducers from 'reducers';

describe('Reducers', () => {

  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      const action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'coffee'
      };
      const res = reducers.searchTextReducer(df(''),df(action));
      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      const action = {type: 'TOGGLE_SHOW_COMPLETED'};
      const res = reducers.showCompletedReducer(df(false), df(action));
      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      const action = {
        type: 'ADD_TODO',
        text: 'make coffee'
      };
      const res = reducers.todosReducer(df([]),df(action));
      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should toggle complete todos', () => {
      const action = {
        type: 'TOGGLE_TODO',
        id: 1
      };
      let todos = [
        {
          id: 1,
          text: 'Make tacos',
          completed: false,
          createdAt: 0,
          completedAt: undefined
        },
         {
          id: 2,
          text: 'Make pizza',
          completed: false,
          createdAt: 0,
          completedAt: undefined
        }
      ];
      const res = reducers.todosReducer(df(todos), df(action));
      expect(res[0].completed).toEqual(true);
      expect(res[0].completedAt).toExist();
    });

  });

});
