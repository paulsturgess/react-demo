import React, { Component } from 'react';
import Navigation from './Navigation';

class UI extends Component {
  render() {
    return(
      <main className="ui-content">
        <Navigation />
        {this.props.children}
      </main>
    );
  }
}

export default UI;
