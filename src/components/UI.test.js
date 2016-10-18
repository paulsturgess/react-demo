// Note it's not currently possible to use TestUtils to find a stateless component
// Otherwise I would just test for the instance of the Navigation component
import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import UI from './UI';
import { Link } from 'react-router'

describe('UI', () => {
  let instance;

  it('renders the navigation', () => {
    instance = TestUtils.renderIntoDocument(<UI />);
    const navigation = TestUtils.findRenderedDOMComponentWithClass(
      instance, 'ui-navigation'
    );
    expect(navigation).toBeDefined();
  });
});
