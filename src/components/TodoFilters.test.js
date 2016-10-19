import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import TodoFilters from './TodoFilters';
import FilterLink from '../containers/FilterLink';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducers';

describe('TodoFilters', () => {
  const store = createStore(reducer)
  let instance = TestUtils.renderIntoDocument(
    <Provider store={store}>
      <TodoFilters />
    </Provider>
  );
  const filterLinks = TestUtils.scryRenderedComponentsWithType(
    instance, FilterLink
  );

  it('returns three FilterLink components', () => {
    expect(filterLinks.length).toEqual(3);
  });

  it('returns a FilterLink with the filter SHOW_ALL', () => {
    expect(filterLinks[0].props.filter).toEqual('SHOW_ALL');
  });

  it('returns a FilterLink with the filter SHOW_ACTIVE', () => {
    expect(filterLinks[1].props.filter).toEqual('SHOW_ACTIVE');
  });

  it('returns a FilterLink with the filter SHOW_COMPLETED', () => {
    expect(filterLinks[2].props.filter).toEqual('SHOW_COMPLETED');
  });
});
