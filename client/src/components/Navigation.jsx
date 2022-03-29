import React from 'react';
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">Logo</Link>
      </div>
      <ul className="menu">
        <li className="menu__links">
          <Link to="/about">About</Link>
        </li>
        <li className="menu__links">
          <Link to="/feed">Feed</Link>
        </li>
      </ul>
      <button className="btn">
        <Link to="/add-item">Add New Item</Link>
      </button>
      <button className="btn">
        <Link to="/login">Login</Link>
      </button>
    </nav>
  );
};

export default Navigation;
