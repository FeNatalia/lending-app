import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import ItemCard from '../components/shared/ItemCard';
import { getAllItems, getByCityName } from '../api';

const Feed = ({ type }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    switch (type) {
      case 'all-items':
        getAllItems().then(res => {
          setItems(res);
        });
        break;

      case 'items-by-city':
        getByCityName().then(res => {
          setItems(res);
        });
        break;

      // case 'items-category':
      //   getWatchedMovies().then(res => {
      //     setMoviesItems(res);
      //   });
      //   break;

      default:
        break;
    }
  }, [type]);

  return (
    <div>
      <SearchBar />
      <section className="feed__card--group">
        {items.map(item => (
          <ItemCard key={item._id} item={item} />
        ))}
      </section>
    </div>
  );
};

export default Feed;
