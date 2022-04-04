import React, { useState, useContext, useEffect } from 'react';
import { DataContext } from '../contexts/DataProvider';
import { useNavigate } from 'react-router-dom';

const SearchBar = (homeSearch = false) => {
  const { city, setCity } = useContext(DataContext);
  const { keyword, setKeyword } = useContext(DataContext);
  const [tempKeyword, setTempKeyword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    setKeyword(tempKeyword);
    setTempKeyword('');
    if (homeSearch) {
      return navigate('/feed');
    }
  };

  // useEffect(() => {
  //   return () => {
  //     setKeyword("");
  //     setCity("");
  //   };
  // }, []);

  return (
    <form
      className="flex flex-col flex-wrap max-w-xl p-7 md:flex-row md:max-w-2xl md:items-center md:p-4 md:justify-center bg-slate-200 gap-2 mx-auto rounded-md shadow-md top-4 mt-5"
      onSubmit={handleSubmit}
    >
      <label className="text-base font-bold" htmlFor="search">
        Search
      </label>
      <input
        id="search"
        className="p-2 rounded-md accent-slate-500 shadow-sm md:p-3 md:mr-3"
        type="text"
        name="search"
        value={tempKeyword}
        onChange={e => setTempKeyword(e.target.value)}
        placeholder="what are you searching?"
      />
      <label className="text-base font-bold mt-2 md:mt-0" htmlFor="options">
        Select a location
      </label>
      <select
        defaultValue=""
        className="p-2 rounded-md shadow-sm bg-white md:p-3"
        id="options"
        onChange={e => setCity(e.target.value)}
      >
        <option value="" className="text-gray-400">
          Sweden...
        </option>
        <option value="Stockholm">Stockholm</option>
        <option value="Malmo">Malmo</option>
        <option value="Gothenburg">Gothenburg</option>
        <option value="Uppsala">Uppsala</option>
        <option value="Lund">Lund</option>
      </select>
      <button
        className="rounded-md bg-red-700 border-solid border-2 border-red-700 text-white p-2 mt-2 text-lg hover:bg-white hover:text-red-700 transition-all duration-300 md:px-2 md:mt-0 md:py-1 shadow-sm"
        type="submit"
      >
        <i className="fa-solid fa-magnifying-glass mr-2 md:mr-0"></i>
        <p className="md:hidden inline">Search</p>
      </button>
    </form>
  );
};

export default SearchBar;
