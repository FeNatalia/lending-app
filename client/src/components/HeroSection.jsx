import SearchBar from './SearchBar';

const HeroSection = () => {
  return (
    <header className="bg-[url('/public/lend-borrow.jpg')] bg-no-repeat bg-center h-[calc(100vh-64px)] ">
      <SearchBar homeSearch={true} />
    </header>
  );
};

export default HeroSection;
