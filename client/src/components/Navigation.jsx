import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [checked, setChecked] = useState(false);

  const checkboxHandler = () => {
    setChecked(prev => !prev);
  };

  return (
    <nav className="navbar">
      <div className="menu">
        <input
          className="menu__checkbox"
          type="checkbox"
          checked={checked}
          onChange={e => setChecked(e.target.checked)}
        />
        <div className="menu-lines">
          <span className="menu-lines__line menu-lines--line1"></span>
          <span className="menu-lines__line menu-lines--line2"></span>
          <span className="menu-lines__line menu-lines--line3"></span>
        </div>
        <div className="navbar__logo">
          <Link to="/">Logo</Link>
        </div>
        <ul className="menu__items">
          <li className="menu__links--mobile">
            <Link onClick={checkboxHandler} to="/">
              Logo
            </Link>
          </li>
          <li className="menu__links">
            <Link onClick={checkboxHandler} to="/about">
              About
            </Link>
          </li>
          <li className="menu__links">
            <Link onClick={checkboxHandler} to="/feed">
              Feed
            </Link>
          </li>
          <button className="btn btn--secondary">
            <Link onClick={checkboxHandler} to="/add-item">
              Add New Item
            </Link>
          </button>
          <button className="btn">
            <Link onClick={checkboxHandler} to="/login">
              Login
            </Link>
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

// eslint-disable-next-line no-lone-blocks
{
  /* <nav className="navbar">
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
      <button className="btn btn--secondary">
        <Link to="/add-item">Add New Item</Link>
      </button>
      <button className="btn">
        <Link to="/login">Login</Link>
      </button>
    </nav> */
}
