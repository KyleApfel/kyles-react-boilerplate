import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App          from './components/App';
import Template     from './features/_featureTemplate/container';
//import Test         from './features/test/container.js';

export default (
  <Route path="/" component={App}>
    { /* <IndexRoute component={ Test }/> */}
  </Route>
);
