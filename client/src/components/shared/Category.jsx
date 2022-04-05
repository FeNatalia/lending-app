import React, { useContext } from "react";
import "../../styles/category.css";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../contexts/DataProvider";
import { getItems } from "../../api";

const Category = ({ item }) => {
  const { category, setCategory } = useContext(DataContext);
  const { items, setItems } = useContext(DataContext);
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    setCategory(item.name);
    getItems("", "", item.name).then((res) => {
      setItems(res);
    });
    return navigate("/feed");
  };

  return (
    <div className="Category__Card" onClick={handleCategoryClick}>
      <figure className="img-wrap">
        <img className="card-img-top" src={item.image} alt="Card cap" />
      </figure>
      <div>{item.name}</div>
    </div>
  );
};

export default Category;
