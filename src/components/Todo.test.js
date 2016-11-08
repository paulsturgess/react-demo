import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Todo from './Todo';

describe('Todo', () => {
  let instance, li;
  let Wrapper = React.createClass({
    render: function() {
      return (<div>{this.props.children}</div>);
    }
  });
  let onClick = jest.fn();

  describe('when completed is true', () => {
    beforeEach(() => {
      instance = TestUtils.renderIntoDocument(
        <Wrapper>
          <Todo onClick={onClick} completed={true} text='The Todo' />
        </Wrapper>
      )
      li = TestUtils.findRenderedDOMComponentWithTag(instance, 'li');
    });

    it('outputs the todo text', () => {
      expect(li.innerHTML).toEqual('The Todo');
    });

    it('sets up the onClick', () => {
      TestUtils.Simulate.click(li)
      expect(onClick).toHaveBeenCalled();
    });
    it('sets the text decoration to line-through', () => {
      expect(li.style.cssText).toEqual('text-decoration: line-through;');
    });
  });

  describe('when completed is false', () => {
    beforeEach(() => {
      instance = TestUtils.renderIntoDocument(
        <Wrapper>
          <Todo onClick={onClick} completed={false} text='The Todo' />
        </Wrapper>
      )
      li = TestUtils.findRenderedDOMComponentWithTag(instance, 'li');
    });

    it('sets the text decoration to none', () => {
      expect(li.style.cssText).toEqual('text-decoration: none;');
    });
  });
});
