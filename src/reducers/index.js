import { combineReducers }          from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import template                     from '../features/_featureTemplate/reducer';

const rootReducer = combineReducers ({
  template,
  routing
});

export default rootReducer;
