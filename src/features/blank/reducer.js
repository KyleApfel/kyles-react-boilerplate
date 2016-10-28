const isTrue = n => n === true;

import * as R from 'ramda'
import initialState from './initialState';
import { 
         UPDATE_KEY_PATH
       , INCREMENT
       } from './actionTypes';

export default function blankReducer(state = initialState.Blank, action) {
  let newState;

  switch (action.type) {
    case UPDATE_KEY_PATH:
      return R.compose(R.assocPath(action.path, action.value))(state)
    case INCREMENT:
      return R.assocPath(["buttonData", "number"], (state.buttonData.number + 1), state)
    default:
      return state;
  }
} 
