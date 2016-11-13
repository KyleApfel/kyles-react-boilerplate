import { combineReducers }          from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import template                     from '../features/_featureTemplate/reducer';
import testReducer                  from '../features/test/reducer.js';

const rootReducer = combineReducers ({
  template,
  testReducer,
  routing
});

export default rootReducer;
