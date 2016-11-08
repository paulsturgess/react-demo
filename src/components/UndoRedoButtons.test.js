import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import UndoRedoButtons from './UndoRedoButtons';

describe('UndoRedoButtons', () => {
   let instance;
   let Wrapper = React.createClass({
     render: function() {
       return this.props.children;
     }
   });

  beforeEach(() => {
    instance = TestUtils.renderIntoDocument(
      <Wrapper>
        <UndoRedoButtons />
      </Wrapper>
    );
  });

  it('returns 2 buttons', () => {
    let buttons = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'button')
    expect(buttons.length).toEqual(2);
  });
});
