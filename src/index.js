import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import UI from './components/UI';
import HelloWorld from './components/HelloWorld';
import Search from './components/Search';
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
        <Route path="/search" component={Search} />
        <Route path="/todo-list" component={TodoScreen} />
      </Route>
    </Router>
  </Provider>
  ),
  document.getElementById('root')
);
