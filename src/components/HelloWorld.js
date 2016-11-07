// Whenever you use the JSX syntax you need to import React
// Using the { } means you can import named exports
import React, { Component } from 'react';

class HelloWorld extends Component {
  render() {
    return (
      <h2>Hello World</h2>
    );
  }
}

// This means the class HelloWorld can be used in other files via import
export default HelloWorld;
