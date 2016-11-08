import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Clock from './Clock';

describe('Clock', () => {
  let instance, paragraph;
  const date = new Date(2016, 11, 9);
  beforeEach(() => {
    jasmine.clock().install(); // time is now frozen
    jasmine.clock().mockDate(date); // the date and time is manually changed
    instance = TestUtils.renderIntoDocument(<Clock />);
    paragraph = TestUtils.findRenderedDOMComponentWithTag(instance, 'p');
  });

  afterEach(() => {
    jasmine.clock().uninstall(); // time is now unfrozen
  });

  it('renders the time after each second', () => {
    expect(paragraph.textContent).toEqual('It is 12:00:00 AM')
    jasmine.clock().tick(1000); // move time on 1 second
    expect(paragraph.textContent).toEqual('It is 12:00:01 AM')
  });

  describe('componentWillUnmount', () => {
    it('clears the timer', () => {
      spyOn(global, 'clearInterval');
      instance.componentWillUnmount();
      expect(global.clearInterval).toHaveBeenCalledWith(instance.timerID);
    })
  });
});
