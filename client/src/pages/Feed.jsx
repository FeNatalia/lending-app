import React, { useContext } from "react";
import SearchBar from "../components/SearchBar";
import ItemCard from "../components/shared/ItemCard";
import { DataContext } from "../contexts/DataProvider";

const Feed = () => {
  const { items, setItems } = useContext(DataContext);

  return (
    <div className="feed">
      <SearchBar />
      <section className="feed__card--group">
        {items.length === 0 ? (
          <div>No item found!</div>
        ) : (
          items.map((item, index) => <ItemCard key={item._id} item={item} index={index} />)
        )}
      </section>
    </div>
  );
};

export default Feed;
