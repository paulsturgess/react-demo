import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import HelloWorld from './HelloWorld';

describe('HelloWorld', () => {
  let instance, header;
  beforeEach(() => {
    instance = TestUtils.renderIntoDocument(<HelloWorld />);
    header = TestUtils.findRenderedDOMComponentWithTag(instance, 'h2');
  });

  it('renders Hello World text', () => {
    expect(header.innerHTML).toEqual('Hello World')
  });
});
