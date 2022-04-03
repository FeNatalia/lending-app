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
      className="md:flex flex-col max-w-xs p-7 bg-slate-200 gap-2 mx-auto rounded-md shadow-md"
      onSubmit={handleSubmit}
    >
      <label className="text-base font-bold" htmlFor="search">
        Search
      </label>
      <input
        id="search"
        className="p-2 rounded-md accent-slate-500 shadow-sm"
        type="text"
        name="search"
        value={tempKeyword}
        onChange={e => setTempKeyword(e.target.value)}
        placeholder="what are you searching?"
      />
      <label className="text-base font-bold mt-2" htmlFor="options">
        Select a location
      </label>
      <select
        defaultValue=""
        className="p-2 rounded-md shadow-sm bg-white"
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
        className="rounded-md bg-red-700 border-solid border-2 border-red-700 text-white p-2 mt-2 text-lg hover:bg-white hover:text-red-700 transition-all duration-300"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
