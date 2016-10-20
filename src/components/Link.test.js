import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Link from './Link';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducers';

describe('Link', () => {
  const store = createStore(reducer);
  let instance, anchor, span;
  let onClick = jest.fn();

  describe('when it is not active', () => {
    beforeEach(() => {
      instance = TestUtils.renderIntoDocument(
        <Provider store={store}>
          <Link active={false} onClick={onClick}>
            {'The Link Text'}
          </Link>
        </Provider>
      );
      anchor = TestUtils.findRenderedDOMComponentWithTag(
       instance, 'a'
     );
    });

    it('returns an anchor with children', () => {
      expect(anchor.innerHTML).toEqual('The Link Text');
    });

    it('returns an anchor with the onClick', () => {
      TestUtils.Simulate.click(anchor);
      expect(onClick).toHaveBeenCalled();
    });
  });

  describe('when it is active', () => {
    beforeEach(() => {
      instance = TestUtils.renderIntoDocument(
        <Provider store={store}>
          <Link active={true} onClick={onClick}>
            {'The Link Text'}
          </Link>
        </Provider>
      );
      span = TestUtils.findRenderedDOMComponentWithTag(
       instance, 'span'
     );
    });

    it('returns a span with children', () => {
      expect(anchor.innerHTML).toEqual('The Link Text');
    });
  });
});
