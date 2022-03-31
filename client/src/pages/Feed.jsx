import React, { useState, useEffect, useContext } from 'react';
import SearchBar from '../components/SearchBar';
import ItemCard from '../components/shared/ItemCard';
import { DataContext } from '../contexts/DataProvider';
import { getAllItems, getByCityName } from '../api';

const Feed = ({ type }) => {
  const [items, setItems] = useState([]);
  const { setCity, city } = useContext(DataContext);
  const { keyword, setKeyword } = useContext(DataContext);

  useEffect(() => {
    switch (type) {
      case 'all-items':
        getAllItems().then(res => {
          if (keyword.length > 0){
            const filtered =res.filter( e => e.name.includes(keyword))
            console.log('66666666', filtered);
            setItems(filtered)
            setKeyword('')
          } else {
            setItems(res);
          }
          
        });
        break;

      case 'items-by-city':
        getByCityName(city).then(res => {
          setItems(res);
          setCity();
        });
        break;

      default:
        break;
    }
  }, [type, city, setCity]);

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
