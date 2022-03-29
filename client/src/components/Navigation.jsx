import React from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Logo</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/feed">Feed</Link>
        </li>
        <li>
          <Link to="/add-item">Add New Item</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
