import React from 'react';
import Category from './shared/Category';
import '../styles/categories.css';

const Categories = () => {
  const categoriesList = [
    {
      name: 'Electronics',
      image:
        'https://thumbs.dreamstime.com/b/set-yellow-power-tools-professional-craftsman-vector-illustration-instruments-handyman-flat-style-renovation-181761505.jpg',
    },
    {
      name: 'Tools',
      image:
        'https://image.shutterstock.com/image-vector/construction-tools-set-vector-icons-260nw-1189237477.jpg',
    },
    {
      name: 'Camping',
      image:
        'https://cdn.w600.comps.canstockphoto.com/camping-supplies-tools-and-equipment-vector-clip-art_csp74593118.jpg',
    },
    {
      name: 'Garden',
      image:
        'https://previews.123rf.com/images/dreamsvector/dreamsvector1801/dreamsvector180100017/93570036-gartenwerkzeugvektorgartenger%C3%A4t-r%C3%BChrstange-oder-schaufel-und-rasenm%C3%A4her-der-g%C3%A4rtnerbauernhofsammlung.jpg',
    },
    {
      name: 'Renovation',
      image:
        'https://images.clipartlogo.com/files/istock/previews/9843/98439719-repair-and-renovation-tools-hand-drawn-vector-icons.jpg',
    },
  ];
  return (
    <section className="categories">
      {categoriesList.map(item => (
        <Category
          key={Math.random().toString(36).substring(2, 5)}
          item={item}
        />
      ))}
    </section>
  );
};

export default Categories;
