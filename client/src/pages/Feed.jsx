import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import ItemCard from '../components/shared/ItemCard';
import { getAllItems } from '../api';

const Feed = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getAllItems().then(res => {
      setItems(res);
    });
  }, []);

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
