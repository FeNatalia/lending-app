import React, { useContext, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import ItemCard from '../components/shared/ItemCard';
import { DataContext } from '../contexts/DataProvider';
import { getItems } from '../api';

const Feed = () => {
  const { items, setItems, keyword, city, category } = useContext(DataContext);

  useEffect(() => {
    getItems(keyword, city, category).then(res => {
      setItems(res);
    });
  }, [category, city, items, keyword, setItems]);

  return (
    <div className="feed">
      <SearchBar classes="mx-10 md:mx-auto sm:mx-auto lg:mx-auto" />
      <section className="feed__card--group">
        {items.length === 0 ? (
          <div className="text-lg font-bold p-4">No items found!</div>
        ) : (
          items.map((item, index) => (
            <ItemCard key={item._id} item={item} index={index} />
          ))
        )}
      </section>
    </div>
  );
};

export default Feed;
