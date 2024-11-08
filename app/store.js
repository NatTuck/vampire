
import { createStore, combineReducers } from 'redux';

import defaultCode from './default-code';

function code(state = defaultCode, action) {
  switch (action.type) {
  case 'set-code':
    return action.data;
  default:
    return state;
  }
}

function tab(state = 'errors', action) {
  switch (action.type) {
  case 'set-tab':
    return action.data;
  default:
    return state;
  }
}

function output(state, action) {
  return combineReducers({tab})(state, action);
}

function rootReducer(state0, action) {
  let rs = {code, output};
  const state1 = combineReducers(rs)(state0, action);
  return state1;
}


let store = createStore(rootReducer);
export default store;
