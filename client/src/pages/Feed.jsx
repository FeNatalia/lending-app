import React, { useState, useEffect, useContext } from "react";
import SearchBar from "../components/SearchBar";
import ItemCard from "../components/shared/ItemCard";
import { getItems } from "../api";
import { DataContext } from "../contexts/DataProvider";

const Feed = () => {
  const [items, setItems] = useState([]);
  const { city, setCity } = useContext(DataContext);
  const { keyword, setKeyword } = useContext(DataContext);

  useEffect(() => {
    getItems(keyword, city).then((res) => {
      setItems(res);
    });
  }, [city, keyword]);

  return (
    <div className="feed">
      <SearchBar />
      <section className="feed__card--group">
        {items.length === 0 ? (
          <div>No item found!</div>
        ) : (
          items.map((item) => <ItemCard key={item._id} item={item} />)
        )}
      </section>
    </div>
  );
};

export default Feed;
