import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App          from './static-components/App';
import BlankPage    from './features/blank/container';
import AboutPage    from './static-components/AboutPage.js';
import NotFoundPage from './static-components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={BlankPage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="blank" component={BlankPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
