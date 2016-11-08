import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import UI from './components/UI';
import HelloWorld from './components/HelloWorld';
import Clock from './components/Clock';
import Search from './components/Search';
import Search2 from './components/Search2';
import TodoScreen from './components/TodoScreen';
import { createStore } from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';

// There is only one store for the state in a Redux app
// See reducers for how the state is updated
const store = createStore(reducer)

render((
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route component={UI} >
        <Route path="/" component={HelloWorld} />
        <Route path="/clock" component={Clock} />
        <Route path="/search" component={Search} />
        <Route path="/search2" component={Search2} />
        <Route path="/todo-list" component={TodoScreen} />
      </Route>
    </Router>
  </Provider>
  ),
  document.getElementById('root')
);
