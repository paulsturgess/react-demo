import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Search from './Search';

describe('Search', () => {
  let instance;

  let Wrapper = React.createClass({
    render: function() {
      return (<div>{this.props.children}</div>);
    }
  });

  describe('constructor', () => {
    it('renders with searchString state set to an empty string', () => {
      instance = new Search();
      expect(instance.state.searchString).toEqual('');
    });
  });


  describe('handleChange', () => {
    it('updates searchString with the target value', () => {
      instance = TestUtils.renderIntoDocument(<Search />);
      const event = {target: {value: 'foo'}};
      instance.handleChange(event);
      expect(instance.state.searchString).toEqual('foo');
    });
  });

  describe('filteredItems', () => {
    beforeEach(() => {
      instance = new Search();
    });

    describe('when there is a searchString', () => {
      it('returns the defaultItems filtered by the searchString', () => {
        expect(instance.filteredItems('Aus')).toEqual(
          [{name:'Australia'}, {name:'Austria'}]
        );
      });
    });

    describe('when there is no searchString', () => {
      it('returns the defaultItems', () => {
        expect(instance.filteredItems('')).toEqual(
          instance.defaultItems
        );
      });
    });
  });

  describe('searchHTML', () => {
    let input;
    beforeEach(() => {
      instance = TestUtils.renderIntoDocument(<Search />)
      instance.handleChange = jest.fn();
      instance.setState({searchString:'Foo'});
      const html = TestUtils.renderIntoDocument(
        <Wrapper>
          {instance.searchHTML()}
        </Wrapper>
      );
      input = TestUtils.findRenderedDOMComponentWithTag(html, 'input')
    });

    it('returns a search input with handleChange setup', () => {
      TestUtils.Simulate.change(input);
      expect(instance.handleChange).toHaveBeenCalled();
    });

    it('returns a text input', () => {
      expect(input.type).toEqual('text');
    });

    it('sets the value of the input to the searchString', () => {
      expect(input.value).toEqual('Foo');
    });

    it('sets the placeholder value of the input', () => {
      expect(input.placeholder).toEqual('Type here');
    });
  });

  describe('resultsHTML', () => {
    let lis;
    beforeEach(() => {
      instance = TestUtils.renderIntoDocument(<Search />)
      instance.handleChange = jest.fn();
      instance.setState({searchString:'Aus'});
      const html = TestUtils.renderIntoDocument(
        <Wrapper>
          {instance.resultsHTML()}
        </Wrapper>
      );
      lis = TestUtils.scryRenderedDOMComponentsWithTag(html, 'li')
    });

    it('returns a ul list of the filtered search items', () => {
      expect(lis.length).toEqual(2);
      expect(lis[0].innerHTML).toEqual('Australia');
      expect(lis[1].innerHTML).toEqual('Austria');
    })
  });

  describe('render', () => {
    it('calls searchHTML', () => {
      instance = new Search();
      instance.searchHTML = jest.fn()
      instance.render()
      expect(instance.searchHTML).toHaveBeenCalled();
    });

    it('calls resultsHTML', () => {
      instance = new Search();
      instance.resultsHTML = jest.fn()
      instance.render()
      expect(instance.resultsHTML).toHaveBeenCalled();
    });
  });
});
