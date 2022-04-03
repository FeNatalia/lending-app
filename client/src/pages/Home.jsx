import React from 'react';
import Categories from '../components/Categories';
import HeroSection from '../components/HeroSection';

const Home = () => {
  console.log(process.env);
  return (
    <>
      <HeroSection />
      {console.log('the key', process.env.REACT_APP_FIREBASE_API_KEY)}
      <Categories />
    </>
  );
};

export default Home;
