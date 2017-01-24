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

});
