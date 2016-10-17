import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import HelloWorld from './HelloWorld';

describe('HelloWorld', () => {
  it('renders without crashing', () => {
    TestUtils.renderIntoDocument(<HelloWorld />);
  });
});
