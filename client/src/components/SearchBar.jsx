import React, { useEffect, useState, useContext } from 'react';
import { DataContext } from '../state/DataProvider';

const SearchBar = () => {
  const { setCity, setCategory, city } = useContext(DataContext);

  return (
    <form className="form">
      <label className="form__label" htmlFor="search">
        Search
      </label>
      <input
        id="search"
        className="form__search"
        type="text"
        name="search"
        placeholder="what are you searching?"
      />
      <label className="form__label" htmlFor="options">
        Select a location
      </label>
      <select
        defaultValue=""
        className="form__select"
        id="options"
        onChange={e => setCity(e.target.value)}
      >
        <option disabled hidden value="">
          Cities...
        </option>
        <option value="Stockholm">Stockholm</option>
        <option value="Malmo">Malmo</option>
        <option value="Gothenburg">Gothenburg</option>
        <option value="Uppsala">Uppsala</option>
        <option value="Lund">Lund</option>
      </select>
      <button className="btn btn--primary" type="submit">
        Search
      </button>
    </form>
  );
};
export default SearchBar;
