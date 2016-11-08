import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import actions from '../actions'
import ConnectedFilterLink from './FilterLink.js'
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
const store = configureMockStore()({visibilityFilter: 'FOO'});

const setupInstance = (filter) => {
  return(
    TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedFilterLink filter={filter}>
          'Hi'
        </ ConnectedFilterLink>
      </Provider>
    )
  );
}

describe('ConnectedFilterLink', () => {
  let instance;

  describe('active prop', () => {
    describe('when the filter prop equals the state visibilityFilter', () => {
      it('sets the active prop on the Link Component to true', () => {
        instance = setupInstance('FOO')
        let container = TestUtils.findRenderedComponentWithType(
          instance, ConnectedFilterLink
        )
        const active = container.renderedElement.props.active
        expect(active).toEqual(true)
      });
    });

    describe('when the filter prop does not equal the state visibilityFilter', () => {
      it('sets the active prop on the Link Component to true', () => {
        instance = setupInstance('BAR')
        let container = TestUtils.findRenderedComponentWithType(
          instance, ConnectedFilterLink
        )
        const active = container.renderedElement.props.active
        expect(active).toEqual(false)
      });
    });
  });

  describe('onClick prop', () => {
    beforeEach(() => {
      spyOn(store, 'dispatch')
    });
    it('sets the onClick prop to dispatch the visibility filter action', () => {
      instance = setupInstance('BAR')
      let container = TestUtils.findRenderedComponentWithType(
        instance, ConnectedFilterLink
      )
      const action = container.renderedElement.props.onClick()
      expect(store.dispatch).toHaveBeenCalledWith(
        { type: 'SET_VISIBILITY_FILTER', filter: 'BAR' }
      );
    })
  });
});
