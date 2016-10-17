import React, { Component } from 'react';
import Constants from './constants'

class Search extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      searchString: ''
    };
  };

  get defaultItems() {
    return (
      Constants.COUNTRIES
    );
  }

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
        value={this.state.searchString}
        onChange={this.handleChange}
        placeholder="Type here"
      />
    );
  }

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

  render() {
    return (
      <div>
        <h2>Search</h2>
        <div>
          {this.searchHTML()}
          {this.resultsHTML()}
        </div>
      </div>
    );
  }
}

export default Search;
