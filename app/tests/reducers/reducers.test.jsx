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
        todo: {
          id: 'abc',
          text: 'Something to do',
          completed: false,
          createdAt: 342343
        }
      };
      const res = reducers.todosReducer(df([]),df(action));
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should update todo', () => {
      let todos = [
        {
          id: 1,
          text: 'Make tacos',
          completed: true,
          createdAt: 0,
          completedAt: 1
        },
         {
          id: 2,
          text: 'Make pizza',
          completed: false,
          createdAt: 0,
          completedAt: undefined
        }
      ];
      let updates = {
        completed: false,
        completedAt: null
      };
      let action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };
      
      let res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
    });

    it('should add existing todos', () => {
      const todos = [{
        id: 111,
        text: 'stuff',
        completed: false,
        completedAt: undefined,
        createdAt: 0
      }];
      const action = {
        type: 'ADD_TODOS',
        todos
      };
      const res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });

  });

});
