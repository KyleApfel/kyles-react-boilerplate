import { combineReducers } from 'redux';
import blankReducer from '../features/blank/reducer.js';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  blankData: blankReducer,
  routing: routerReducer
});

export default rootReducer;
