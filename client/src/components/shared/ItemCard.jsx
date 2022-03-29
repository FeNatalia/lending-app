import React from "react";

const ItemCard = ({ item }) => {
  return (
    <article>
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
    </article>
  );
};

export default ItemCard;
