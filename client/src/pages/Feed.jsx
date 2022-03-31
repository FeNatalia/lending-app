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
    console.log("222");
    getItems(keyword, city).then((res) => {
      console.log("333");
      setItems(res);
    });
  }, [city, keyword]);

  // useEffect(() => {
  //   console.log("111");
  //   let search = window.location.search;
  //   let params = new URLSearchParams(search);
  //   let q = params.get("q");
  //   let city = params.get("city");
  //   setKeyword(q);
  //   setCity(city);
  // }, []);

  return (
    <div>
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
