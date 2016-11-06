import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import AddTodoForm from './AddTodoForm.js'
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
const store = configureMockStore()({});

let instance, form, input;

describe('AddTodoForm', () => {
  const mockAction = jest.fn()

  beforeEach(() => {
    instance = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <AddTodoForm addTodo={mockAction} />
      </Provider>
    );
  });

  describe('form onsubmit', () => {
    beforeEach(() => {
      form = TestUtils.findRenderedDOMComponentWithTag(instance, 'form');
      input = TestUtils.findRenderedDOMComponentWithTag(instance, 'input');
    })
    it('calls the addTodo action', () => {
      input.value = 'My todo';
      TestUtils.Simulate.change(input);
      TestUtils.Simulate.submit(form);
      expect(mockAction).toBeCalledWith('My todo');
    })
  });
});
