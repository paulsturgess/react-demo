import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Navigation from './Navigation';
import { Link } from 'react-router'

describe('Navigation', () => {
   let instance;
   let Wrapper = React.createClass({
     render: function() {
       return this.props.children;
     }
   });

  beforeEach(() => {
    instance = TestUtils.renderIntoDocument(
      <Wrapper>
        <Navigation />
      </Wrapper>
    );
  });

  it('returns 2 links', () => {
    let links = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'a')
    expect(links.length).toEqual(3);
  });

  it('returns a link to the root', () => {
    let links = TestUtils.scryRenderedComponentsWithType(instance, Link)
    expect(links[0].props.to).toEqual('/')
  });

  it('returns a link to the search', () => {
    let links = TestUtils.scryRenderedComponentsWithType(instance, Link)
    expect(links[1].props.to).toEqual('/search')
  });

  it('returns a link to the todo list', () => {
    let links = TestUtils.scryRenderedComponentsWithType(instance, Link)
    expect(links[2].props.to).toEqual('/todo-list')
  });
});
