import React from 'react';
import { Router, Route } from 'dva/router';
import Example from './components/Example';

import IndexPage from './routes/IndexPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/example" component={Example} />
    </Router>
  );
}

export default RouterConfig;
