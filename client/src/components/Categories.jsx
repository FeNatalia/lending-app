import React from "react";
import Category from "./shared/Category";
import "../styles/categories.css";

const Categories = () => {
  const categoriesList = [
    {
      name: "Electronics",
      image:
        "https://academy.fredsappliance.com/wp-content/uploads/2020/11/tools1.jpg",
    },
    {
      name: "Tools",
      image:
        "https://academy.fredsappliance.com/wp-content/uploads/2020/11/tools1.jpg",
    },
    {
      name: "Camping",
      image:
        "https://academy.fredsappliance.com/wp-content/uploads/2020/11/tools1.jpg",
    },
    {
      name: "Garden",
      image:
        "https://academy.fredsappliance.com/wp-content/uploads/2020/11/tools1.jpg",
    },
    {
      name: "Renovation",
      image:
        "https://academy.fredsappliance.com/wp-content/uploads/2020/11/tools1.jpg",
    },
  ];
  return (
    <section className="categories">
      {categoriesList.map((item) => (
        <Category item={item} />
      ))}
    </section>
  );
};

export default Categories;
