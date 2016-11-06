import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import actions from '../actions'
import ConnectedAddTodo from './AddTodo.js'
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
const store = configureMockStore()({});

describe('AddTodo', () => {
  let instance, container;

  beforeEach(() => {
    spyOn(store, 'dispatch')
    instance = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedAddTodo />
      </Provider>
    );
  });

  it('sets the addTodo prop on the AddTodoForm Component', () => {
    container = TestUtils.findRenderedComponentWithType(instance, ConnectedAddTodo)
    let action = container.renderedElement.props.addTodo('test')
    expect(store.dispatch).toHaveBeenCalledWith(
      { type: 'ADD_TODO', id: 0, text: 'test' }
    );
  });
});
