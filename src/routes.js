import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App          from './static-components/App';
import Template     from './features/_featureTemplate/container';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ Template }/>
  </Route>
);
