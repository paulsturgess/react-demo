import React from 'react';
import Search from './Search.js'

// Inherit from other components using extends
class Search2 extends Search {

  // This overrides the handleChange method in Search
  handleChange = (event, value) => {
    event.preventDefault(); // You have to call preventDefault explicitly to cancel default behaviour
    this.setState({searchString:value});
  }

  searchHTML() {
    let input;
    return(
      <form onSubmit={event => this.handleChange(event, input.value)}>
        <input
          type="text"
          ref={node => {input = node}}
          placeholder="Type here"
        />
        <button type="submit">Search</button>
      </form>
    );
  }

  headerHTML() {
    return(<h2>Search When You Press The Button</h2>)
  }
}

export default Search2;
