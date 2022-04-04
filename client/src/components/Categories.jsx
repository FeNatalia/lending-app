import React from "react";
import Category from "./shared/Category";

const Categories = () => {
  const categoriesList = [
    {
      name: "Tools",
      image: "",
    },
    {
      name: "Tools2",
      image: "",
    },
    {
      name: "Tools3",
      image: "",
    },
  ];
  return (
    <section className="categories">
      <h3>Categories</h3>
      {categoriesList.map((item) => (
        <Category item={item} />
      ))}
    </section>
  );
};

export default Categories;
