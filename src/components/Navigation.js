// This is a stateless functional component
import React from 'react';
import { Link } from 'react-router';

function Navigation() {
  return (
    <nav className="ui-navigation">
      <ul>
        <li className="ui-navigation__link_container">
          <Link to="/">Home</Link>
        </li>
        <li className="ui-navigation__link_container">
          <Link to="/search">Search</Link>
        </li>
        <li className="ui-navigation__link_container">
          <Link to="/todo-list">Todo List</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
