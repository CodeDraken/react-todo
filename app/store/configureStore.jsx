import * as redux from 'redux';

import { searchTextReducer, showCompletedReducer, todosReducer } from 'reducers';

const configure = (initialState = {}) => {
  const reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  const store = redux.createStore(reducer, initialState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
}

export default configure;
