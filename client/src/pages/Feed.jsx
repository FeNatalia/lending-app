import React, { useState, useEffect, useContext, useRef } from "react";
import SearchBar from "../components/SearchBar";
import ItemCard from "../components/shared/ItemCard";
import { DataContext } from "../contexts/DataProvider";
import { getAllItems, getByCityName } from "../api";

const Feed = ({ type }) => {
  const hasFetchedData = useRef(false);
  const [items, setItems] = useState([]);
  const { setCity, city } = useContext(DataContext);
  const { keyword, setKeyword } = useContext(DataContext);

  useEffect(() => {
    switch (type) {
      case "all-items":
        if (!hasFetchedData.current) {
          getAllItems().then((res) => {
            if (keyword.length > 0) {
              const filtered = res.filter((e) => e.name.includes(keyword));
              console.log("66666666", filtered);
              setItems(filtered);
              hasFetchedData.current = true;
              setKeyword("");
            } else {
              setItems(res);
              hasFetchedData.current = true;
            }
          });
        }
        break;

      case "items-by-city":
        getByCityName(city).then((res) => {
          setItems(res);
          setCity();
        });
        break;

      default:
        break;
    }
  }, [type, city, setCity, keyword, setKeyword]);

  return (
    <div>
      <SearchBar />
      <section className="feed__card--group">
        {items.map((item) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </section>
    </div>
  );
};

export default Feed;
