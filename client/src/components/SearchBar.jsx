import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "../contexts/DataProvider";
import { useNavigate } from "react-router-dom";

const SearchBar = (homeSearch = false) => {
  const { city, setCity } = useContext(DataContext);
  const { keyword, setKeyword } = useContext(DataContext);
  const [tempKeyword, setTempKeyword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setKeyword(tempKeyword);
    setTempKeyword("");
    if (homeSearch) {
      return navigate("/feed");
    }
  };

  // useEffect(() => {
  //   return () => {
  //     setKeyword("");
  //     setCity("");
  //   };
  // }, []);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__label" htmlFor="search">
        Search
      </label>
      <input
        id="search"
        className="form__search"
        type="text"
        name="search"
        value={tempKeyword}
        onChange={(e) => setTempKeyword(e.target.value)}
        placeholder="what are you searching?"
      />
      <label className="form__label" htmlFor="options">
        Select a location
      </label>
      <select
        defaultValue=""
        className="form__select"
        id="options"
        onChange={(e) => setCity(e.target.value)}
      >
        <option value="">Sweden...</option>
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
