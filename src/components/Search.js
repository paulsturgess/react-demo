import React, { Component } from 'react';
import Constants from '../constants'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: ''
    };
  };

  get defaultItems() {
    return (
      Constants.COUNTRIES
    );
  }

  // this is automatically bound because of the property initializer syntax
  // enabled by babel-plugin-transform-class-properties
  handleChange = (event) => {
    this.setState({searchString:event.target.value});
  }

  filteredItems = (searchString) => {
    var items = this.defaultItems;
    if(searchString.length > 0){
      items = this.defaultItems.filter((item) => {
        return item.name.toLowerCase().match(
          searchString.trim().toLowerCase()
        );
      });
    }
    return items;
  }

  searchHTML() {
    return(
      <input
        type="text"
        value={this.state.searchString} // Each time the state is changed, the component is rendered and this value will be updated
        onChange={this.handleChange} // The function that will be called when the input value changes
        placeholder="Type here"
      />
    );
  }

  // This could be another component e.g. SearchResults
  resultsHTML() {
    return(
      <ul>
        {
          this.filteredItems(this.state.searchString).map((item) => {
            return <li key={item.name}>{item.name}</li>
          })
        }
      </ul>
    );
  }

  headerHTML() {
    return(<h2>Search As You Type</h2>)
  }

  render() {
    return (
      <div>
        {this.headerHTML()}
        <div>
          {this.searchHTML()}
          {this.resultsHTML()}
        </div>
      </div>
    );
  }
}

export default Search;
