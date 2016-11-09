const isTrue = n => n === true;

import * as R from 'ramda'
import initialState from './initialState';
import { 
         BLANK_UPDATE_KEY_PATH
       , BLANK_INCREMENT
       } from './actionTypes';

export default function blankReducer(state = initialState.Blank, action) {
  let newState;

  switch (action.type) {
    case BLANK_UPDATE_KEY_PATH:
      return R.compose(R.assocPath(action.path, action.value))(state)
    case BLANK_INCREMENT:
      return R.assocPath(["buttonData", "number"], (state.buttonData.number + 1), state)
    default:
      return state;
  }
} 
