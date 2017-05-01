import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App          from './components/App';
import Template     from './features/_featureTemplate/container';
import NotFoundPage from './components/notfoundpage.js';
//import Test         from './features/test/container.js';

export default (
  <Route path="/" component={App}>
    { /* <IndexRoute component={ Test }/> */}
    { /* <Route path="test" component={ Test }/> */}
    <Route path="*" component={ NotFoundPage }/>
  </Route>
);
