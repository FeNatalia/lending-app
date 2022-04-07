import React, { useContext } from 'react';
import '../../styles/category.css';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../contexts/DataProvider';
import { getItems } from '../../api';

const Category = ({ item }) => {
  const { setCategory } = useContext(DataContext);
  const { setItems } = useContext(DataContext);
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    setCategory(item.name);
    getItems('', '', item.name).then(res => {
      setItems(res);
    });
    return navigate('/feed');
  };

  return (
    <div
      className="Category__Card hover:scale-110 transition-all duration-200"
      onClick={handleCategoryClick}
    >
      <figure className="img-wrap shadow-sm">
        <img className="card-img-top" src={item.image} alt="Card cap" />
      </figure>
      <div className="Category__name">{item.name}</div>
    </div>
  );
};

export default Category;
