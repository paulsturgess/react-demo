// This is a stateless functional component
import React from 'react';
import { Link } from 'react-router';

const Navigation = () => {
  return (
    <nav className="ui-navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/clock">Clock</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/search2">Search 2</Link>
        </li>
        <li>
          <Link to="/todo-list">Todo List</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
