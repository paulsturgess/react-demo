import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import UI from './UI';
import HelloWorld from './HelloWorld';
import Search from './Search';

render((
  <Router history={browserHistory} >
    <Route component={UI} >
      <Route path="/" component={HelloWorld} />
      <Route path="/search" component={Search} />
    </Route>
  </Router>),
  document.getElementById('root')
);
